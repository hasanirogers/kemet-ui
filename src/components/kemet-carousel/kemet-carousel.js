import { html, css, LitElement } from 'lit';

export default class KemetCarousel extends LitElement {
  static get styles() {
    return css`
      :host,
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        position: relative;
        display: flex;
        align-items: center;
        width: var(--kemet-carousel-width, 100%);
        height: var(--kemet-carousel-height, auto);
        overflow: visible;
      }

      .pagination {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        line-height: 1;
        padding: 1rem;
      }

      .slides {
        overflow: hidden;
      }

      .slider {
        display: flex;
        flex-wrap: nowrap;
        transition: transform 300ms ease;
      }

      ::slotted([slot='next']),
      ::slotted([slot='prev']) {
        opacity: 0.25;
        transition: opacity 300ms ease-in-out;
      }

      :host(:hover) ::slotted([slot='next']),
      :host(:hover) ::slotted([slot='prev']) {
        opacity: 1;
      }
    `;
  }

  static get properties() {
    return {
      index: {
        type: Number,
        reflect: true,
      },
      pagination: {
        type: String,
        reflect: true,
      },
      slidesWidth: {
        type: String,
      },
      slidesTranslateX: {
        type: String,
      },
      options: {
        type: Object,
      },
      breakpoints: {
        type: Object,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.index = 0;
    this.pagination = 'bottom';
    this.slidesWidth = 'auto';
    this.slidesTranslateX = '0';
    this.options = {
      perView: 1,
      perMove: 1,
      gap: 24,
      slideshow: 0,
      rewind: true,
    };
    this.breakpoints = {
      768: {
        perView: 2,
        rewind: false,
      },
      1280: {
        perView: 3,
      },
    };

    // bindings
    this.addEventListener('kemet-carousel-first', this.handleFirst.bind(this));
    this.addEventListener('kemet-carousel-last', this.handleLast.bind(this));
    this.addEventListener('kemet-carousel-next', this.handleNext.bind(this));
    this.addEventListener('kemet-carousel-prev', this.handlePrev.bind(this));
    this.addEventListener('kemet-carousel-link', this.handleLink.bind(this));

    // methods
    this.swipeMove = (event) => {
      event.preventDefault();

      const pageX = event.touches ? event.touches[0].pageX : event.pageX;
      const currentSlide = this.slides[this.index];

      this.slidesTranslateX = `${pageX - this.startX - currentSlide.offsetLeft}px`;
    };

    this.handleSlideShow = () => {
      if (this.getOption('slideshow') > 0) {
        this.updateIndex(this.index + 1);
        clearTimeout(this.handleSlideShow);
      }
    };
  }

  firstUpdated() {
    // standard properties
    this.slides = [];
    this.links = [];
    this.loaded = false;
    this.slidesElement = this.shadowRoot.querySelector('[part="slides"]');

    window.addEventListener('resize', () => {
      this.setSlideSize();
      this.updateIndex(this.index);
    });
  }

  updated(prevProps) {
    this.setSlideSize();

    if (prevProps.has('index')) {
      setTimeout(this.handleSlideShow, this.getOption('slideshow') * 1000);
    }
  }

  render() {
    return html`
      <slot name="prev"></slot>
      <div
        class="slides"
        part="slides"
        @mousedown=${this.swipeStart}
        @mouseup=${this.swipeEnd}
        @touchstart=${this.swipeStart}
        @touchend=${this.swipeEnd}
        @mouseleave=${this.swipeLeave}
      >
        <div class="slider" part="slider" style="width:${this.slidesWidth}; transform:translateX(${this.slidesTranslateX});">
          <slot name="slides" @slotchange="${this.handleSlotChange}"></slot>
        </div>
        <div class="pagination" part="pagination">
          <slot name="pagination"></slot>
        </div>
      </div>
      <slot name="next"></slot>
    `;
  }

  swipeStart(event) {
    this.startX = event.touches ? event.touches[0].pageX : event.pageX;

    this.addEventListener('mousemove', this.swipeMove);
    this.addEventListener('touchmove', this.swipeMove);
  }

  swipeEnd(event) {
    this.updateIndex(this.swipeUpdate(event));
    this.removeEventListener('mousemove', this.swipeMove, false);
    this.removeEventListener('touchmove', this.swipeMove, false);
  }

  swipeUpdate(event) {
    const pageX = event.changedTouches ? event.changedTouches[0].pageX : event.pageX;
    const direction = this.startX > pageX ? 'right' : 'left';
    const threshold = this.slidesElement.offsetWidth / 3;
    const diff = this.startX - pageX;
    const shouldUpdate = Math.abs(diff) > threshold;

    let { index } = this;

    if (shouldUpdate && direction === 'right') {
      index = this.index >= this.slides.length - 1 ? this.index : this.index + 1;
    }

    if (shouldUpdate && direction === 'left') {
      index = this.index < 1 ? 0 : this.index - 1;
    }

    return index;
  }

  swipeLeave() {
    this.updateIndex(this.index);
    this.removeEventListener('mousemove', this.swipeMove, false);
    this.removeEventListener('touchmove', this.swipeMove, false);
  }

  setSlideSize() {
    const slidesElement = this.shadowRoot.querySelector('.slides');

    this.slideWidth = slidesElement.offsetWidth / this.getOption('perView');

    this.slides.forEach((slide) => {
      slide.style.width = `${this.slideWidth - this.getOption('gap')}px`;
      slide.style.marginRight = `${this.getOption('gap') / 2}px`;
      slide.style.marginLeft = `${this.getOption('gap') / 2}px`;
    });

    this.slidesWidth = `${this.slideWidth * this.slides.length}px`;
  }

  handleSlotChange() {
    const slides = this.querySelectorAll('kemet-carousel-slide');
    const links = this.querySelectorAll('kemet-carousel-link');

    links.forEach((link) => {
      this.links.push(link);
    });

    // populate slide array
    slides.forEach((slide) => {
      this.slides.push(slide);
    });
  }

  handleFirst() {
    this.updateIndex(0);
  }

  handleLast() {
    this.updateIndex(this.slides.length - 1);
  }

  handleNext() {
    let newIndex = this.index + this.getOption('perMove');

    if (newIndex >= this.slides.length) {
      if (this.getOption('rewind')) {
        newIndex = 0;
      } else {
        newIndex = this.index;
      }
    }

    this.updateIndex(newIndex);
  }

  handlePrev() {
    let newIndex = this.index - this.getOption('perMove');

    // send them to the last slide
    if (newIndex < 0) {
      if (this.getOption('rewind')) {
        newIndex = this.slides.length - 1;
      } else {
        newIndex = this.index;
      }
    }

    this.updateIndex(newIndex);
  }

  updateIndex(newIndex) {
    let currentSlide = this.slides[this.index];
    let currentLink = this.links[newIndex];

    // remove selected from all links
    this.links.forEach((link) => {
      link.selected = false;
    });

    // if current link is invalid assume it's the first link
    if (!currentLink) {
      [currentLink] = this.links;
    }

    // add selected to current link
    if (currentLink) {
      currentLink.selected = true;
    }

    if (currentSlide) {
      currentSlide.addEventListener('transitionend', this.handleTransitionEnd);
      currentSlide.setAttribute('aria-hidden', 'true');

      // correct for invalid indexes
      if (newIndex > -1 && newIndex < this.slides.length) {
        this.index = newIndex;
      } else {
        // eslint-disable-next-line no-console
        console.warn('An invalid index number was entered. The kemet-carousel has been reset to the first slide.');
        this.index = 0;
      }

      // move
      this.goToSlide(this.index);

      // update new slide
      currentSlide = this.slides[this.index];
      currentSlide.setAttribute('aria-hidden', 'false');

      // notify consumers of slide change
      this.dispatchEvent(new CustomEvent('kemet-carousel-change-start', {
        bubbles: true,
        composed: true,
        detail: this,
      }));
    }
  }

  goToSlide(index) {
    this.slidesTranslateX = `${(this.slideWidth * index) * -1}px`;
  }

  handleTransitionEnd(event) {
    this.dispatchEvent(new CustomEvent('kemet-carousel-change-finished', {
      bubbles: true,
      composed: true,
      detail: this.closest('kemet-carousel'),
    }));

    event.target.removeEventListener('transitionend', this.handleTransitionEnd);
  }

  handleLink(event) {
    this.updateIndex(event.detail.slide);
  }

  getOption(option) {
    const breakpoints = Object.keys(this.breakpoints);
    let value = this.options[option];

    breakpoints.forEach((breakpoint) => {
      if (window.matchMedia(`(min-width: ${breakpoint}px)`).matches && this.breakpoints[breakpoint][option] !== undefined) {
        value = this.breakpoints[breakpoint][option];
      }

      return value;
    });

    return value;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel') || customElements.define('kemet-carousel', KemetCarousel);

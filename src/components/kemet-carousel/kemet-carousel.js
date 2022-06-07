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
        display: block;
        width: var(--kemet-carousel-width, 100%);
        height: var(--kemet-carousel-height, auto);
        overflow: visible;
      }

      :host([hidden]) {
        display: none;
      }

      :host([pagination="top"]) {
        display: flex;
        flex-direction: column;
      }

      :host([pagination="left"]),
      :host([pagination="right"]) {
        display: flex;
      }


      :host([pagination="top"]) .pagination,
      :host([pagination="left"]) .pagination {
        order: -1;
      }

      ::slotted([slot='pagination']) {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        line-height: 1;
        padding: 1rem;
      }

      ::slotted([slot='slides']) {
        display: flex;
        flex-wrap: nowrap;
      }

      .slides {
        overflow: hidden;
      }

      .slides > div {
        transition: transform 300ms ease;
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
      perView: 3,
      gap: 24,
      slideshow: 0,
    };

    // bindings
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
      if (this.options.slideshow > 0) {
        this.updateIndex(this.index + 1);
        clearTimeout(this.handleSlideShow);
      }
    };
  }

  updated(prevProps) {
    this.setSlideSize();

    if (prevProps.has('index')) {
      setTimeout(this.handleSlideShow, this.options.slideshow * 1000);
    }
  }

  firstUpdated() {
    // standard properties
    this.slides = [];
    this.links = [];
    this.loaded = false;
    this.slidesElement = this.shadowRoot.querySelector('[part="slides"]');
  }

  render() {
    return html`
      <div
        class="slides"
        part="slides"
        @mousedown=${this.swipeStart}
        @mouseup=${this.swipeEnd}
        @touchstart=${this.swipeStart}
        @touchend=${this.swipeEnd}
        @mouseleave=${this.swipeLeave}
      >
        <div style="width:${this.slidesWidth}; transform:translateX(${this.slidesTranslateX});">
          <slot name="slides" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </div>

      <div class="pagination" part="pagination">
        <slot name="pagination"></slot>
      </div>
    `;
  }

  swipeStart(event) {
    this.startX = event.touches ? event.touches[0].pageX : event.pageX;

    this.addEventListener('mousemove', this.swipeMove);
    this.addEventListener('touchmove', this.swipeMove);
  }

  swipeEnd(event) {
    console.log('end');

    this.updateIndex(this.index + this.swipeUpdate(event));
    this.removeEventListener('mousemove', this.swipeMove, false);
    this.removeEventListener('touchmove', this.swipeMove, false);
  }

  swipeUpdate(event) {
    const pageX = event.changedTouches ? event.changedTouches[0].pageX : event.pageX;
    const direction = this.startX > pageX ? 'right' : 'left';
    const threshold = this.slidesElement.offsetWidth / 3;
    const diff = this.startX - pageX;
    const shouldUpdate = Math.abs(diff) > threshold;

    let index;

    if (shouldUpdate && direction === 'right') {
      index = this.index > this.slides.length ? 0 : 1;
    }

    if (shouldUpdate && direction === 'left') {
      index = this.index < 1 ? 0 : -1;
    }

    return index;
  }

  swipeLeave() {
    this.updateIndex(this.index);
    this.removeEventListener('mousemove', this.swipeMove, false);
    this.removeEventListener('touchmove', this.swipeMove, false);
  }

  setSlideSize() {
    this.slideWidth = this.offsetWidth / this.options.perView; // perView Number

    this.slides.forEach((slide) => {
      slide.style.width = `${this.slideWidth - this.options.gap}px`;
      slide.style.marginRight = `${this.options.gap / 2}px`;
      slide.style.marginLeft = `${this.options.gap / 2}px`;
    });

    this.slidesWidth = `${this.slideWidth * this.slides.length}px`;
  }

  handleSlotChange() {
    // let elementIndex = 0;
    const slides = this.querySelectorAll('kemet-carousel-slide');
    const links = this.querySelectorAll('kemet-carousel-link');

    links.forEach((link) => {
      this.links.push(link);
    });

    // populate slide array
    slides.forEach((slide) => {
      // slide.seen = this.index > elementIndex;
      this.slides.push(slide);
      // elementIndex += 1;
    });

    const slotSlides = this.querySelector('[slot="slides"]');

    // clones
    for (let i = 0; i < this.options.perView; i += 1) {
      const clone = slides[i].cloneNode(true);

      clone.style.width = `${this.slideWidth - this.options.gap}px`;
      clone.style.marginRight = `${this.options.gap / 2}px`;
      clone.style.marginLeft = `${this.options.gap / 2}px`;

      slotSlides.append(clone);
      // this.slides.push(slides[i]);
    }

    // console.log(this.slides);

    // fake firstUpdated because slotChange happens after it
    // if (!this.loaded) {
    // const hash = window.location.hash.replace('#', '');
    // const index = parseInt(hash, 10);

    // if (
    //   this.useHash // if the user is using hashes
    //   && Number.isInteger(index) // and index from hash is a number
    //   && index > -1 // and it's more than -1
    //   && index <= this.slides.length // but not more than the total number of slides
    // ) {
    //   this.index = hash;
    // } else {
    // this.index = 0;
    // }

    // this.loaded = true;
    // this.updateIndex(this.index);
    // }
  }

  handleNext() {
    let newIndex = this.index + 1;

    // reset to first slide
    if (newIndex >= this.slides.length) newIndex = 0;

    this.updateIndex(newIndex);
  }

  handlePrev() {
    let newIndex = this.index - 1;

    // send them to the last slide
    if (newIndex < 0) newIndex = this.slides.length - 1;

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

      // correct for wrong index entered by users
      if (newIndex > -1 && newIndex < this.slides.length) {
        this.index = newIndex;
      } else {
        this.index = 0;
      }

      // move
      this.goToSlide(newIndex);

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
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel') || customElements.define('kemet-carousel', KemetCarousel);

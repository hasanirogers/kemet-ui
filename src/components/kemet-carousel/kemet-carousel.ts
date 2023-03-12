import { html, LitElement } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events.js';
import { stylesCarousel } from './styles.js';
import { KemetCarouselCurrentInterface, KemetCarouselLinkInterface, KemetCarouselSlideInterface } from './types.js';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel
 * @summary The Carousel allows you to click or swipe through content.
 *
 * @prop {number} index - The current slide index.
 * @prop {number} total - The total amount of slides.
 * @prop {string} sliderWidth - The width of the slider.
 * @prop {string} sliderTranslateX - The X position of the slider.
 * @prop {boolean} inner - Displays the toolbar inside the carousel container.
 * @prop {boolean} arrows - Determines whether or not to display arrows.
 * @prop {object} options - Default options for the carousel.
 * @prop {object} breakpoints - Options at different breakpoints for the carousel. Is mobile first.
 *
 * @event kemet-carousel-change-start - Fires with the a slide has begun to change.
 * @event kemet-carousel-change-finished - Fires when a slide has changed and finished animating
 *
 * @slot slides - Place the slide elements here.
 * @slot toolbar - Allows you to construct a toolbar within the carousel. Place things like pagination here.
 * @slot prev - A slot for the previous arrow.
 * @slot next - A slot for the next arrow.
 * @slot information - Allows you to enter custom HTML such as a slide description to be used in the toolbar.
 *
 * @cssproperty --kemet-carousel-width - The width of the carousel. Default: 100%.
 * @cssproperty --kemet-carousel-height - The height of the carousel. Default: auto.
 * @cssproperty --kemet-carousel-toolbar-gap - The space between items in the toolbar. Default: 1rem.
 * @cssproperty --kemet-carousel-toolbar-justify-content - The cross axis alignment of the toolbar. Default: center.
 * @cssproperty --kemet-carousel-toolbar-padding - The padding of the toolbar. Default: 1rem.
 * @cssproperty --kemet-carousel-toolbar-inner-width - The inner toolbar width. Default: 100%.
 * @cssproperty --kemet-carousel-toolbar-inner-bottom - The bottom position of the inner toolbar. Default: 0.
 * @cssproperty --kemet-carousel-toolbar-inner-top - The top position of the inner toolbar. Default: auto.
 * @cssproperty --kemet-carousel-toolbar-inner-color - The inner toolbar text color. Default: var(--kemet-color-white).
 * @cssproperty --kemet-carousel-toolbar-inner-background-color - The inner toolbar background color. Default: rgba(0, 0, 0, 0.4).
 * @cssproperty --kemet-carousel-slides-border - The border around the slides. Default: 1px solid var(--kemet-color-gray1).
 * @cssproperty --kemet-carousel-transition-speed - The transition speed of the slides. Default: 300ms.
 * @cssproperty --kemet-carousel-arrows-opacity - The arrows start opacity. Default: 0.25.
 * @cssproperty --kemet-carousel-arrows-opacity-hover - The arrows however opacity. Default: 1.
 * @cssproperty --kemet-carousel-arrows-transition-speed - The arrows transition speed. Default: 300ms.
 *
 * @csspart container - Contains the slides and toolbar.
 * @csspart slides - Wrapper for the slider.
 * @csspart slider - Contains the slides.
 * @csspart toolbar - Contains the toolbar.
 *
 */

@customElement('kemet-carousel')
export default class KemetCarousel extends LitElement {
  static styles = [stylesCarousel];

  @property({ type: Number, reflect: true })
  index: number = 0;

  @property({ type: Number })
  total: number = 0;

  @property({ type: String })
  sliderWidth: string = 'auto';

  @property({ type: String })
  sliderTranslateX: string = '0';

  @property({ type: Boolean, reflect: true })
  inner: boolean = false;

  @property({ type: Boolean, reflect: true })
  arrows: boolean = false;

  @property({ type: Object })
  options: object = {
    perView: 1,
    perMove: 1,
    gap: 12,
    slideshow: 0,
    rewind: true,
    center: false,
  };

  @property({ type: Object })
  breakpoints: object = {
    768: {
      perView: 2,
      gap: 24,
      rewind: false,
    },
    1280: {
      perView: 2.5,
      center: true,
    },
  };


  @state()
  slides: any[] = [];

  @state()
  links: any[] = [];

  @state()
  toolbarSlotElement: HTMLElement | null;

  @state()
  informationElement: HTMLElement | null;

  @state()
  swipeMove: (event) => void;

  @state()
  handleSlideShow: any;

  @state()
  startX: number;

  @state()
  slideWidth: number;

  @state()
  informationSlot: HTMLElement;


  @query('#container')
  containerElement: HTMLElement;

  @query('#slides')
  slidesElement: HTMLElement;

  @query('#slider')
  sliderElement: HTMLElement;

  @query('#toolbar')
  toolbarElement: HTMLElement;


  constructor() {
    super();

    // bindings
    this.addEventListener('kemet-carousel-first', this.handleFirst.bind(this));
    this.addEventListener('kemet-carousel-last', this.handleLast.bind(this));
    this.addEventListener('kemet-carousel-next', this.handleNext.bind(this));
    this.addEventListener('kemet-carousel-prev', this.handlePrev.bind(this));
    this.addEventListener('kemet-carousel-link', this.handleLink.bind(this));
  }

  firstUpdated() {
    // elements
    this.toolbarSlotElement = this.querySelector('[slot="toolbar"]');
    this.informationElement = this.querySelector('kemet-carousel-information');

    // events
    window.addEventListener('resize', () => {
      this.setSlideSize();
      this.setToolbarSize();
      this.updateIndex(this.index);
    });

    this.sliderElement?.addEventListener('transitionend', this.handleTransitionEnd.bind(this));

    // methods
    this.swipeMove = (event) => {
      event.preventDefault();

      const pageX = event.touches ? event.touches[0].pageX : event.pageX;
      const currentSlide = this.slides[this.index];

      this.sliderTranslateX = `${pageX - this.startX - currentSlide.offsetLeft}px`;
    };

    this.handleSlideShow = () => {
      if (this.getOption('slideshow') > 0) {
        this.updateIndex(this.index + 1);
        clearTimeout(this.handleSlideShow);
      }
    };

    // setup
    this.setSlideSize();
    this.goToSlide(this.index);
  }

  updated(prevProps) {
    this.setSlideSize();
    this.setToolbarSize();

    if (prevProps.has('index')) {
      this.updateIndex(this.index);
      setTimeout(this.handleSlideShow, this.getOption('slideshow') * 1000);
    }
  }

  render() {
    return html`
      <slot name="prev" @slotchange=${this.handleArrows}></slot>
      <div id="container" class="container" part="container">
        <section
          id="slides"
          class="slides"
          part="slides"
          @mousedown=${this.swipeStart}
          @mouseup=${this.swipeEnd}
          @touchstart=${this.swipeStart}
          @touchend=${this.swipeEnd}
          @mouseleave=${this.swipeLeave}
        >
          <div id="slider" class="slider" part="slider" style="width:${this.sliderWidth}; transform:translateX(${this.sliderTranslateX});">
            <slot name="slides" @slotchange="${this.handleSlotChange}"></slot>
          </div>
        </section>
        ${this.makeToolbar()}
      </div>
      <slot name="next" @slotchange=${this.handleArrows}></slot>
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
    this.slideWidth = this.containerElement?.offsetWidth as number / this.getOption('perView');

    this.slides.forEach((slide) => {
      slide.style.marginLeft = `${this.getOption('gap') / 2}px`;
      slide.style.marginRight = `${this.getOption('gap') / 2}px`;
      slide.style.width = `${this.slideWidth - this.getOption('gap')}px`;
    });

    this.sliderWidth = `${this.slideWidth * this.slides.length}px`;
  }

  setToolbarSize() {
    if (this.inner && this.toolbarElement) {
      const width = this.slidesElement.offsetWidth;
      this.toolbarElement.style.width = `${width}px`;
    }
  }

  makeToolbar() {
    if (this.toolbarSlotElement) {
      return html`
        <section id="toolbar" class="toolbar" part="toolbar">
          <slot name="toolbar"></slot>
        </section>
      `;
    }

    return null;
  }

  handleSlotChange() {
    const slides = this.querySelectorAll('kemet-carousel-slide') as NodeListOf<KemetCarouselSlideInterface>;
    const links = this.querySelectorAll('kemet-carousel-link') as NodeListOf<KemetCarouselLinkInterface>;

    // handle slides
    slides.forEach((slide) => {
      this.slides.push(slide);
    });

    this.updateInformation();
    this.total = slides.length;
    slides[this.index].selected = true;

    // handle links
    links.forEach((link) => {
      this.links.push(link);
    });
  }

  handleArrows() {
    this.arrows = true;
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

      this.slides.forEach((slide) => {
        slide.selected = false;
      });

      currentSlide.selected = true;

      // notify consumers of slide change
      emitEvent(this, 'kemet-carousel-change-start', this);

      // update information element
      this.updateInformation();
    }
  }

  updateInformation() {
    this.informationSlot = this.slides[this.index].querySelector('[slot="information"]');

    if (this.informationElement) {
      if (this.informationSlot) {
        this.informationElement.innerHTML = this.informationSlot.outerHTML;
      } else {
        this.informationElement.innerHTML = '';
      }
    }
  }

  goToSlide(index) {
    if (this.getOption('center') === true) {
      const slidesCenter = this.slidesElement.offsetWidth / 2;
      const slideX = this.slideWidth * index;
      this.sliderTranslateX = `${slideX - (slideX - slidesCenter) - this.slideWidth / 2 - slideX}px`;
    } else {
      this.sliderTranslateX = `${(this.slideWidth * index) * -1}px`;
    }
  }

  handleTransitionEnd() {
    const currentElement = this.querySelector('kemet-carousel-current') as KemetCarouselCurrentInterface;

    if (currentElement) {
      currentElement.current = this.index + 1;
    }

    emitEvent(this, 'kemet-carousel-change-finished', this);
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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel': KemetCarousel
  }
}

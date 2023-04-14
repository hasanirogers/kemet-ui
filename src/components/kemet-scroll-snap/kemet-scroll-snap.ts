import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';
import { stylesScrollSnap } from './styles';
import { KemetScrollSnapSlideInterface, TypeAxis, TypePagination } from './types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-snap
 * @summary A scroll-snap implementation for responsive sliders.
 *
 * @prop {string} axis - Determines the direction the component flows. Values include: (horizontal | vertical)
 * @prop {string} pagination - Determines where to display the paginator. Values include: (top | right | bottom | left)
 *
 * @slot slides - Place your slides here.
 * @slot pagination - Place the paginator component here if you want one.
 *
 * @csspart slides - The slides container.
 * @csspart pagination - The pagination element.
 *
 * @cssproperty --kemet-scroll-snap-gap - Space between the slides. Default: 1.5rem.
 * @cssproperty --kemet-scroll-snap-horizontal-max-width - The horizontal max width of the container. Default: 1024px.
 * @cssproperty --kemet-scroll-snap-vertical-height - The vertical height of the container. Default: 100vh.
 * @cssproperty --kemet-scroll-snap-slides-vertical-padding - Padding on the vertical axis. Default: 0 2rem.
 *
 * @event kemet-scroll-snap-make-slides - Fires when slide data has been created.
 *
 */

@customElement('kemet-scroll-snap')
export default class KemetScrollSnap extends LitElement {
  static styles = [stylesScrollSnap];

  @property({ type: String, reflect: true })
  axis: TypeAxis = 'horizontal';

  @property({ type: String, reflect: true })
  pagination: TypePagination = 'bottom';

  @state()
  isTouchDevice: boolean;

  @state()
  slides: any[];

  constructor() {
    super();

    this.addEventListener('kemet-scroll-snap-focus', (event: CustomEvent) => {
      this.focusSlide(event.detail);
    });
  }

  firstUpdated() {
    // standard properties
    this.isTouchDevice = 'ontouchstart' in document.documentElement;
    this.slides = [];

    this.setFocusedSlides();
  }

  updated() {
    this.setVerticalAttribute();
  }

  render() {
    return html`
      <slot name="slides"></slot>
      <slot name="pagination"></slot>
    `;
  }

  setFocusedSlides() {
    // reference: https://24ways.org/2019/beautiful-scrolling-experiences-without-libraries/
    // reference: https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/
    const slides = this.querySelectorAll('kemet-scroll-snap-slide');
    const container = this.querySelector('[slot="slides"]');

    const options = {
      root: container,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;

        if (entry.intersectionRatio >= 0.5) {
          target.focused = true;
        } else {
          target.focused = false;
        }
      });

      this.makeSlides();
    };

    const observer = new IntersectionObserver(callback, options);

    slides.forEach((slide) => {
      observer.observe(slide);
    });
  }

  makeSlides() {
    const slides = [];

    this.querySelectorAll('kemet-scroll-snap-slide').forEach((element, index) => {
      const slide = element as KemetScrollSnapSlideInterface;

      slide.index = index;
      slides.push({
        id: index,
        focused: slide.focused,
        label: slide.label,
      });
    });

    this.slides = slides;
    emitEvent(this, 'kemet-scroll-snap-make-slides', this.slides);
  }

  focusSlide(index) {
    const activeSlide = this.querySelector(`kemet-scroll-snap-slide[index="${index}"]`);
    activeSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  setVerticalAttribute() {
    if (this.axis === 'vertical') {
      document.querySelector('html').setAttribute('kemet-scroll-snap-axis', 'vertical');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-scroll-snap': KemetScrollSnap
  }
}

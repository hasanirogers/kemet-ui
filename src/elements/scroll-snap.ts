import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../utilities/events';
import { stylesScrollSnap } from '../styles/elements/scroll-snap';
import KemetScrollSnapSlide from './scroll-snap-slide';
import { EnumAxis, EnumDirections, TypeAxis, TypeDirection } from '../utilities/constants';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-snap
 * @summary A scroll-snap implementation for responsive sliders.
 *
 * @prop {TypeAxis} axis - Determines the direction the component flows. Values include: (horizontal | vertical)
 * @prop {TypeDirection} pagination - Determines where to display the paginator. Values include: (top | right | bottom | left)
 *
 * @slot slides - Place your slides here.
 * @slot pagination - Place the paginator component here if you want one.
 *
 * @csspart slides - The slides container.
 * @csspart pagination - The pagination element.
 *
 * @cssproperty --kemet-scroll-snap-gap - Space between the slides.
 * @cssproperty --kemet-scroll-snap-horizontal-max-width - The horizontal max width of the container.
 * @cssproperty --kemet-scroll-snap-vertical-height - The vertical height of the container.
 * @cssproperty --kemet-scroll-snap-slides-vertical-padding - Padding on the vertical axis.
 *
 * @event kemet-make-slides - Fires when slide data has been created.
 *
 */

@customElement('kemet-scroll-snap')
export default class KemetScrollSnap extends LitElement {
  static styles = [stylesScrollSnap];

  @property({ type: String, reflect: true })
  axis: TypeAxis = EnumAxis.Horizontal;

  @property({ type: String, reflect: true })
  pagination: TypeDirection = EnumDirections.Bottom;

  @state()
  isTouchDevice: boolean;

  @state()
  slides: KemetScrollSnapSlide[];

  constructor() {
    super();

    this.addEventListener('kemet-focus', (event: CustomEvent) => {
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

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const target = entry.target as KemetScrollSnapSlide;
        target.focused = entry.intersectionRatio >= 0.5;
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
      const slide = element as KemetScrollSnapSlide;

      slide.index = index;
      slides.push({
        id: index,
        focused: slide.focused,
        label: slide.label,
      });
    });

    this.slides = slides;
    emitEvent(this, 'kemet-make-slides', this.slides);
  }

  focusSlide(index: number) {
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

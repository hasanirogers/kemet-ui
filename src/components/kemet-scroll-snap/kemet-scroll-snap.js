import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

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

export default class KemetScrollSnap extends LitElement {
  static get styles() {
    return css`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      :host([axis='horizontal']) {
        margin: auto;
        max-width: var(--kemet-scroll-snap-horizontal-max-width, 1024px);
      }

      :host([pagination="left"]),
      :host([pagination="right"]) {
        flex-direction: row;
      }

      :host([pagination="none"]) ::slotted([slot="pagination"]) {
        display: none;
      }

      :host([pagination="top"]) ::slotted([slot="pagination"]),
      :host([pagination="left"]) ::slotted([slot="pagination"]) {
        order: -1;
      }


      ::slotted([slot="slides"]) {
        display: flex;
        gap: var(--kemet-scroll-snap-gap, 1.5rem);
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
      }

      /* vertical */
      :host([axis="vertical"]) {
        height: var(--kemet-scroll-snap-vertical-height, 100vh);
      }

      :host([axis="vertical"]) ::slotted([slot="slides"]) {
        flex-direction: column;
        overflow-x: hidden;
        scroll-snap-type: y mandatory;
        padding: var(--kemet-scroll-snap-slides-vertical-padding, 0 2rem);
      }
    `;
  }

  static get properties() {
    return {
      axis: {
        type: String,
        reflect: true,
      },
      pagination: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.axis = 'horizontal';
    this.pagination = 'bottom';

    this.addEventListener('kemet-scroll-snap-focus', (event) => {
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
      const slide = element;

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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-scroll-snap') || customElements.define('kemet-scroll-snap', KemetScrollSnap);

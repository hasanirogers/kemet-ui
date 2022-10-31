import { html, css, LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-rotator
 * @summary A component that rotates through an array of text.
 *
 * @prop {number} activeSlide - The index number for the current slide.
 * @prop {string} width - The width of the rotator block.
 * @prop {string} height - The height of the rotator block.
 * @prop {array} messages - Text in the rotator. Supports HTML.
 * @prop {string} effect - The transition effect type.
 * @prop {number} rotationSpeed - How fast, in seconds, each slide lasts. Stop the rotator with 0.
 *
 * @cssproperty --kemet-rotator-transition-speed - How long, in css time units, the transition effect lasts. Default: 500ms.
 *
 */

export default class KemetRotator extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
      }

      .rotator__slide {
        pointer-events: none;
      }

      .rotator__slide--active {
        pointer-events: auto;
      }

      /* fade effect */
      :host([effect="fade"]) .rotator {
        display: inline-flex;
        flex-wrap: nowrap;
        flex-direction: row;
      }

      :host([effect="fade"]) .rotator__slide {
        width: 100%;
        flex: none;
        opacity: 0;
        box-sizing: border-box;
        transition: all var(--kemet-rotator-transition-speed, 500ms) ease;
      }

      :host([effect="fade"]) .rotator__slide:not(:first-child) {
        margin-left: -100%; /* this is the bulk of the overlay trick */
      }

      :host([effect="fade"]) .rotator__slide--active {
        opacity: 1;
      }

      /* flip effect */
      :host([effect="flip"]) .rotator {
        display: flex;
        position: relative;

        perspective: 500;
      }

      :host([effect="flip"]) .rotator__slide {
        display: block;
        width: auto;
        position: absolute;
        top: -20px;
        left: 0;

        opacity: 0;

        transform: rotateX(90deg);
        transform-origin: 0% 0%;
        transition: all var(--kemet-rotator-transition-speed, 500ms) ease;
      }

      :host([effect="flip"]) .rotator__slide--active {
        top: 0;
        opacity: 1;

        transform: rotateX(0deg);
      }

      :host([effect="flip"]) .rotator__slide--prev {
        top: 40px;;
        transform: rotateX(-90deg);
      }
    `;
  }

  static get properties() {
    return {
      activeSlide: {
        type: Number,
      },
      width: {
        type: String,
      },
      height: {
        type: String,
      },
      messages: {
        type: Array,
      },
      effect: {
        type: String,
        reflect: true,
      },
      rotationSpeed: {
        type: Number,
        attribute: 'rotation-speed',
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.activeSlide = 0;
    this.messages = [];
    this.effect = 'fade';
    this.rotationSpeed = 3;
    this.width = 'auto';
    this.height = 'auto';
  }

  firstUpdated() {
    // standard properties
    this.prevSlide = null;

    window.addEventListener('resize', this.setDimensions.bind(this));
  }

  updated(changed) {
    const widthHasChanged = !!changed.get('width');
    const heightHasChanged = !!changed.get('height');

    this.setDimensions();

    // only trigger slide updates when width and height has not changed
    if (!widthHasChanged && !heightHasChanged) {
      setTimeout(() => {
        if (this.rotationSpeed > 0) {
          this.nextSlide();
        }
      }, this.rotationSpeed * 1000);
    }
  }

  render() {
    const setWidth = this.effect === 'flip' ? `width:${this.width};` : '';
    const setHeight = this.effect === 'flip' ? `height:${this.height};` : '';

    return html`
      <span class="rotator" style="${setWidth} ${setHeight}">
        ${this.makeMessages()}
      </span>
    `;
  }

  makeMessages() {
    const messages = this.messages.map((message, index) => {
      const setActiveClass = this.activeSlide === index ? 'rotator__slide--active' : '';
      const setPrevClass = this.prevSlide === index ? 'rotator__slide--prev' : '';

      return html`
        <span class="rotator__slide ${setActiveClass} ${setPrevClass}">
          ${unsafeHTML(message)}
        </span>
      `;
    });

    return messages;
  }

  setDimensions() {
    if (this.effect === 'flip') {
      this.width = `${this.offsetWidth}px`;

      const slides = this.shadowRoot.querySelectorAll('.rotator__slide');
      let tallest = 0;

      slides.forEach((slide) => {
        if (slide.offsetHeight > tallest) {
          tallest = slide.offsetHeight;
        }
      });

      this.height = `${tallest}px`;
    }
  }

  nextSlide() {
    if (this.activeSlide < this.messages.length - 1) {
      this.activeSlide += 1;
      this.prevSlide = this.activeSlide - 1;
    } else {
      this.activeSlide = 0;
      this.prevSlide = this.messages.length - 1;
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-rotator') || customElements.define('kemet-rotator', KemetRotator);

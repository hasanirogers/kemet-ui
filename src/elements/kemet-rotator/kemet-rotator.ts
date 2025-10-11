import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { stylesRotator } from './styles';
import { TypeEffect } from './types';

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
 * @cssproperty --kemet-rotator-transition-speed - How long, in css time units, the transition effect lasts.
 *
 */

@customElement('kemet-rotator')
export default class KemetRotator extends LitElement {
  static styles = [stylesRotator];

  @property({ type: Number })
  activeSlide: number = 0;

  @property({ type: String })
  width: string = 'auto';

  @property({ type: String })
  height: string = 'auto';

  @property({ type: Array })
  messages: string[] = [];

  @property({ type: String, reflect: true })
  effect: TypeEffect = 'fade';

  @property({ type: Number, attribute: 'rotation-speed' })
  rotationSpeed: number = 3;

  @state()
  prevSlide: number | null;

  firstUpdated() {
    // standard properties
    this.prevSlide = null;

    window.addEventListener('resize', this.setDimensions.bind(this));
  }

  updated(changed: Map<string, never>) {
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
    return this.messages.map((message, index) => {
      const setActiveClass = this.activeSlide === index ? 'rotator__slide--active' : '';
      const setPrevClass = this.prevSlide === index ? 'rotator__slide--prev' : '';

      return html`
        <span class="rotator__slide ${setActiveClass} ${setPrevClass}">
          ${unsafeHTML(message)}
        </span>
      `;
    });
  }

  setDimensions() {
    if (this.effect === 'flip') {
      this.width = `${this.offsetWidth}px`;

      const slides = this.shadowRoot.querySelectorAll('.rotator__slide');
      let tallest = 0;

      slides.forEach((slide: HTMLElement) => {
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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-rotator': KemetRotator
  }
}

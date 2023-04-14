import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-slide
 * @summary A container for a slide in the carousel.
 *
 * @prop {boolean} selected - Determines if the slide is selected.
 *
 */

@customElement('kemet-carousel-slide')
export default class KemetCarouselSlide extends LitElement {
  static styles = [
    css`
      :host,
      :host *,
      :host *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        flex: 0 0 auto;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  static get properties() {
    return {
      'aria-hidden': { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this['aria-hidden'] = 'true';
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-slide': KemetCarouselSlide
  }
}

import { html, css, LitElement } from 'lit';

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

export default class KemetCarouselSlide extends LitElement {
  static get styles() {
    return [
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
  }

  static get properties() {
    return {
      selected: { type: Boolean, reflect: true },
      'aria-hidden': { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.selected = false;
    this['aria-hidden'] = 'true';
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-slide') || customElements.define('kemet-carousel-slide', KemetCarouselSlide);

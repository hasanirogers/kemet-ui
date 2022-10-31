import { html, css, LitElement } from 'lit';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-current
 * @summary Displays the active slide number.
 *
 * @prop {number} current - The current slide number.
 *
 */

export class KemetCarouselCurrent extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      current: { type: Number },
    };
  }

  firstUpdated() {
    this.carousel = this.closest('kemet-carousel');
  }

  updated() {
    this.current = this.carousel.index + 1;
  }

  render() {
    return html`${this.current}`;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-current') || customElements.define('kemet-carousel-current', KemetCarouselCurrent);

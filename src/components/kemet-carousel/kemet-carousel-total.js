import { html, css, LitElement } from 'lit';

export class KemetCarouselTotal extends LitElement {
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
      total: {
        type: Number,
      },
    };
  }

  firstUpdated() {
    this.carousel = this.closest('kemet-carousel');
  }

  updated() {
    this.total = this.carousel.total;
  }

  render() {
    return html`${this.total}`;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-total') || customElements.define('kemet-carousel-total', KemetCarouselTotal);

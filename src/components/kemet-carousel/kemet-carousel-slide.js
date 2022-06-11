import { html, css, LitElement } from 'lit';

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
      selected: {
        type: Boolean,
        reflect: true,
      },
      'aria-hidden': {
        type: String,
        reflect: true,
      },
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

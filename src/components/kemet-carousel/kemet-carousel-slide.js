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

        // :host {
        //   position: absolute;
        //   contain: content;
        //   box-sizing: border-box;
        //   display: block;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   transition: transform ease var(--kemet-carousel-slide-speed, 0.3s), opacity ease var(--kemet-carousel-slide-fade-speed, 1s);
        // }

        :host {
          flex: 0 0 auto;
        }
      `,
    ];
  }

  static get properties() {
    return {
      seen: {
        type: Boolean,
      },
      transition: {
        type: String,
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
    this.seen = false;
    this.transition = 'horizontal';
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

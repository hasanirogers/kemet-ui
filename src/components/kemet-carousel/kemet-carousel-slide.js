import { html, css, LitElement } from 'lit';

export class KemetCarouselSlide extends LitElement {
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
          position: absolute;
          contain: content;
          box-sizing: border-box;
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform ease var(--kemet-carousel-slide-speed, 0.3s), opacity ease var(--kemet-carousel-slide-fade-speed, 1s);
        }

        :host([aria-hidden="false"]) {
          z-index: 1;
          transform: translate(0, 0);
        }

        /* horizontal */
        :host([aria-hidden="true"][transition="horizontal"]) {
          transform: translate(100%, 0);
        }

        /* vertical */
        :host([aria-hidden="true"][transition="vertical"]) {
          transform: translate(0, -100%);
        }

        /* fade */
        :host([transition="fade"]) {
          opacity: 0;
        }

        :host([aria-hidden="false"][transition="fade"]) {
          opacity: 1;
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

window.customElements.define('kemet-carousel-slide', KemetCarouselSlide);

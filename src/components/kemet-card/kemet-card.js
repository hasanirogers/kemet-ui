import { html, css, LitElement } from 'lit';

export default class KemetCard extends LitElement {
  static get styles() {
    return [
      css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          --kemet-card-padding: 1rem;
          --kemet-card-border-color: var(--kemet-color-gray4);

          color: var(--kemet-card-color, var(--kemet-color-black));
          display: inline-flex;
          flex-direction: column;
          max-width: var(--kemet-card-max-width, 360px);
          border: var(--kemet-card-border, 1px solid var(--kemet-card-border-color));
          border-radius: var(--kemet-card-border-radius, 0);
          background-color: var(--kemet-card-background-color, var(--kemet-color-white));
        }

        :host([center]) {
          align-items: center;
          text-align: center;
        }

        .body {
          padding: var(--kemet-card-body-padding, var(--kemet-card-padding));
        }

        .media {
          position: relative;
        }

        ::slotted(*) {
          max-width: 100%;
        }

        ::slotted(img) {
          display: flex;
          max-width: 100%;
        }

        ::slotted([slot="header"]) {
          padding: var(--kemet-card-header-padding, var(--kemet-card-padding));
          border-bottom: var(--kemet-card-header-border-bottom, 1px solid var(--kemet-card-border-color));
        }

        ::slotted([slot="caption"]) {
          color: var(--kemet-card-caption-color, var(--kemet-color-white));
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: var(--kemet-card-caption-padding, calc(var(--kemet-card-padding) / 2) var(--kemet-card-padding));
          background-color: var(--kemet-card-caption-background-color, rgba(0,0,0,0.5));
        }

        ::slotted([slot="footer"]) {
          padding: var(--kemet-card-footer-padding, var(--kemet-card-padding));
          border-top: var(--kemet-card-footer-border-top, 1px solid var(--kemet-card-border-color));
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Centers the elements in the card
       */
      center: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  render() {
    return html`
      <slot name="header"></slot>
      <div class="media" part="part">
        <slot name="media"></slot>
        <slot name="caption"></slot>
      </div>
      <div class="body" part="body">
        <slot></slot>
      </div>
      </div>
      <slot name="footer"></slot>
    `;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-card') || customElements.define('kemet-card', KemetCard);

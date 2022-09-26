import { html, css, LitElement } from 'lit';

export default class KemetAvatar extends LitElement {
  static get styles() {
    return [
      css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: inline-flex;
          color: var(--kemet-avatar-color, var(--kemet-color-white));
          position: relative;
          background-color: var(--kemet-avatar-background-color, var(--kemet-color-gray4));
        }

        :host([circle]) {
          border-radius: 50%;
        }

        :host([circle]) > * {
          border-radius: 50%;
        }

        :host([rounded]) {
          border-radius: var(--kemet-avatar-rounded-radius, 1rem);
        }

        :host([rounded]) > * {
          border-radius: var(--kemet-avatar-rounded-radius, 1rem);
        }

        .initials {
          margin: var(--kemet-avatar-initials-margin, 1rem);
        }

        ::slotted(kemet-badge) {
          position: absolute;
          bottom: 0;
          right: 0;
          border-radius: 50%;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * The size in pixels.
       */
      size: {
        type: Number,
      },
      /**
       * Url to an image
       */
      image: {
        type: String,
      },
      /**
       * Labels the avatar
       */
      label: {
        type: String,
      },
      /**
       * Initials of the user
       */
      initials: {
        type: String,
      },
      /**
       * Displays in a circle
       */
      circle: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Displays with rounded corners
       */
      rounded: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  firstUpdated() {
    this.makeSize();
  }

  render() {
    return html`
      ${this.makeContent()}
      <slot name="status"></slot>
    `;
  }

  makeSize() {
    if (this.size) {
      this.style.width = `${this.size}px`;
      this.style.height = `${this.size}px`;
    }
  }

  makeContent() {
    if (this.image) {
      return html`<img src=${this.image} alt=${this.label} />`;
    }

    if (this.initials) {
      return html`<div part="initials" class="initials">${this.initials}</div>`;
    }

    return html`<slot></slot>`;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-avatar') || customElements.define('kemet-avatar', KemetAvatar);

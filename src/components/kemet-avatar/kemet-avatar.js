import { html, css, LitElement } from 'lit';

/**
 * @since 1.4.0
 * @status stable
 *
 * @tagname kemet-avatar
 * @summary A representation of a person or thing.
 *
 * @prop {string} size - The size in pixels.
 * @prop {string} image - Url to an image.
 * @prop {string} label - Labels the avatar.
 * @prop {string} initials - Initials of the user.
 * @prop {boolean} circle - Displays in a circle.
 * @prop {boolean} rounded - Displays with rounded corners
 *
 * @slot status - A slot for an icon or element that indicates the status of the avatar.
 *
 * @csspart initials - Contains the initials for the avatar.
 *
 * @cssproperty --kemet-avatar-color - The color of the text. Default: var(--kemet-color-white).
 * @cssproperty --kemet-avatar-background-color - The color of the background. Default: var(--kemet-color-gray4).
 * @cssproperty --kemet-avatar-rounded-radius - The border radius of the rounded type. Default: 1rem.
 * @cssproperty --kemet-avatar-initials-margin - The space around the initials. Default: 1rem.
 *
 */

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
      size: { type: Number },
      image: { type: String },
      label: { type: String },
      initials: { type: String },
      circle: { type: Boolean, reflect: true },
      rounded: { type: Boolean, reflect: true },
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

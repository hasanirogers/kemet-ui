import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesBase } from '../styles/elements/avatar';

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
 * @cssproperty --kemet-avatar-color - The color of the text.
 * @cssproperty --kemet-avatar-background-color - The color of the background.
 * @cssproperty --kemet-avatar-rounded-radius - The border radius of the rounded type.
 * @cssproperty --kemet-avatar-initials-margin - The space around the initials.
 *
 */

@customElement('kemet-avatar')
export default class KemetAvatar extends LitElement {
  static styles = [stylesBase];

  @property({ type: String })
  size: string;

  @property({ type: String })
  image: string;

  @property({ type: String })
  label: string;

  @property({ type: String })
  initials: string;

  @property({ type: Boolean, reflect: true })
  circle: boolean;

  @property({ type: Boolean, reflect: true })
  rounded: boolean;

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
      return html`<img part="avatar-image" src=${this.image} alt=${this.label} />`;
    }

    if (this.initials) {
      return html`<div part="initials" class="initials">${this.initials}</div>`;
    }

    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-avatar': KemetAvatar
  }
}

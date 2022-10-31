import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-link
 * @summary Zero-based index link to a slide in the carousel.
 *
 * @prop {number} slide
 * @prop {boolean} selected - Automatically applied when link is active slide.
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-carousel-link
 *
 * @cssproperty --kemet-carousel-link-selected-color - The color of an selected link. Default: var(--kemet-color-primary).
 *
 */

export default class KemetCarouselLink extends LitElement {
  static get properties() {
    return {
      slide: { type: Number, reflect: true },
      selected: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return [
      css`
        :host([selected]) {
          color: var(--kemet-carousel-link-selected-color, var(--kemet-color-primary));
        }

        :host(:not([selected])) {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `,
    ];
  }

  render() {
    return html`
      <span tabindex="0" @keyup=${() => this.changed()} @click=${() => this.changed()}>
        <slot></slot>
      </span>
    `;
  }

  changed() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-link', this);
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-link') || customElements.define('kemet-carousel-link', KemetCarouselLink);

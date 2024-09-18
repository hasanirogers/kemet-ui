import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';

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

@customElement('kemet-carousel-link')
export default class KemetCarouselLink extends LitElement {
  static styles = [
    css`
      :host([selected]) {
        color: var(--kemet-carousel-link-selected-color, var(--kemet-color-primary));
      }

      button {
        border: 0;
        background: none;
      }

      :host(:not([selected])) button {
        cursor: pointer;
      }

      :host([disabled]) button {
        cursor: not-allowed;
      }
    `,
  ];

  @property({ type: Number, reflect: true })
  slide: number;

  @property({ type: Boolean, reflect: true })
  selected: boolean;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  render() {
    return html`
      <button @keyup=${event => this.handleKeyUp(event)} @click=${() => this.changed()}>
        <slot></slot>
      </button>
    `;
  }

  changed() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-link', this);
    }
  }

  handleKeyUp(event) {
    if (event.code === 'Enter') {
      this.changed();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-link': KemetCarouselLink
  }
}

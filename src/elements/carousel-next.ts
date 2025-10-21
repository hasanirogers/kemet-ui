import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../utilities/events';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-next
 * @summary A link to the next slide in the carousel.
 *
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-carousel-next
 *
 */

@customElement('kemet-carousel-next')
export default class KemetCarouselNext extends LitElement {
  static styles = [
    css`
      button {
        cursor: pointer;
        border: 0;
        background: none;
      }

      :host([disabled]) button {
        cursor: not-allowed;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  render() {
    return html`
      <button @keyup=${event => this.handleKeyUp(event)} @click=${() => this.next()}>
        <slot></slot>
      </button>
    `;
  }

  next() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-next', this);
    }
  }

  handleKeyUp(event) {
    if (event.code === 'Enter') {
      this.next();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-next': KemetCarouselNext
  }
}

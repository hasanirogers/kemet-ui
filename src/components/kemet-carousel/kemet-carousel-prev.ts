import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-prev
 * @summary A link to the previous slide in the carousel.
 *
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-carousel-prev
 *
 */

@customElement('kemet-carousel-prev')
export default class KemetCarouselPrev extends LitElement {
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
      <button @keyup=${event => this.handleKeyUp(event)} @click=${() => this.prev()}>
        <slot></slot>
      </button>
    `;
  }

  prev() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-prev', this);
    }
  }

  handleKeyUp(event) {
    if (event.code === 'Enter') {
      this.prev();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-prev': KemetCarouselPrev
  }
}

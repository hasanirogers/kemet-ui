import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../utilities/misc/events';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-last
 * @summary A link to the last slide in the carousel.
 *
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-carousel-last
 *
 */

@customElement('kemet-carousel-last')
export default class KemetCarouselLast extends LitElement {
  static styles = [
    css`
      button {
        cursor: pointer;
        border: 0;
        background: transparent;
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
      <button @keyup=${event => this.handleKeyUp(event)} @click=${() => this.last()}>
        <slot></slot>
      </button>
    `;
  }

  last() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-last', this);
    }
  }

  handleKeyUp(event) {
    if (event.code === 'Enter') {
      this.last();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-last': KemetCarouselLast
  }
}

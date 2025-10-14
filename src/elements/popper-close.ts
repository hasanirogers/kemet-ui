import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { emitEvent } from '../utilities/misc/events';

/**
 * @since 2.0.0
 * @status stable
 *
 * @tagname kemet-popper-close
 * @summary A close button for the popper
 *
 * @event kemet-popper-close-btn
 *
 */

@customElement('kemet-popper-close')
export default class KemetPopperClose extends LitElement {
  static styles = [
    css`
      button {
        font: inherit;
        color: inherit;
        cursor: pointer;
        border: 0;
        background: transparent;
      }
    `,
  ];

  render() {
    return html`
      <button @click=${() => this.close()} @keyup=${(event: KeyboardEvent) => this.handleKeyboard(event)}>
        <slot></slot>
      </button>
    `;
  }

  close() {
    emitEvent(this, 'kemet-popper-close-btn', this);
  }

  handleKeyboard(event: KeyboardEvent) {
    event.preventDefault();

    if (event.code === 'Space' || event.key === 'Enter') {
      this.close();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-popper-close': KemetPopperClose
  }
}

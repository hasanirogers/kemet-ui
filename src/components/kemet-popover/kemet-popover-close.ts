import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';
import { keyCodes } from '../../utilities/misc/constants';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-popover-close
 * @summary A close button for the popover
 *
 * @event kemet-popover-close-btn
 *
 */

@customElement('kemet-popover-close')
export default class KemetPopoverClose extends LitElement {
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
      <button @click=${() => this.close()} @keyup=${event => this.handleKeyboard(event)}>
        <slot></slot>
      </button>
    `;
  }

  close() {
    emitEvent(this, 'kemet-popover-close-btn', this);
  }

  handleKeyboard(event) {
    event.preventDefault();

    if (event.keyCode === keyCodes.SPACE || event.keyCode === keyCodes.ENTER) {
      this.close();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-popover-close': KemetPopoverClose
  }
}


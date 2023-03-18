import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.ts';

const keyCodes = {
  ENTER: 13,
  SPACE: 32,
  ESC: 27,
};

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

export default class KemetPopoverClose extends LitElement {
  static get styles() {
    return [
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
  }

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

window.customElements.define('kemet-popover-close', KemetPopoverClose);

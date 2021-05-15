import { html, css, LitElement } from 'lit';
import keyCodes from '../../utilities/constants/keycodes.const.js';

export class KemetPopoverClose extends LitElement {
  static get styles() {
    return [
      css`
        button {
          font: inherit;
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
    this.dispatchEvent(
      new CustomEvent('kemet-popover-close-btn', {
        bubbles: true,
        composed: true,
        detail: this,
      }),
    );
  }

  handleKeyboard(event) {
    event.preventDefault();

    if (event.keyCode === keyCodes.SPACE || event.keyCode === keyCodes.ENTER) {
      this.close();
    }
  }
}

window.customElements.define('kemet-popover-close', KemetPopoverClose);

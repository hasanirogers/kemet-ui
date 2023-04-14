import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-modal-close
 * @summary A close button for a modal.
 *
 * @event kemet-modal-close-pressed - Fires when the close button is pressed
 *
 */

@customElement('kemet-modal-close')
export default class KemetModalClose extends LitElement {
  static styles = [
    css`
      :host {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      <slot @keyup=${() => this.close()} @click=${() => this.close()}></slot>
    `;
  }

  close() {
    emitEvent(this, 'kemet-modal-close-pressed', this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-modal-close': KemetModalClose
  }
}

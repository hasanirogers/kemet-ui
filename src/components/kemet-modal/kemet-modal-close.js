import { css, html, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

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

export default class KemetModalClose extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
        }
      `,
    ];
  }

  render() {
    return html`
      <slot @keyup=${() => this.close()} @click=${() => this.close()}></slot>
    `;
  }

  close() {
    emitEvent(this, 'kemet-modal-close-press', this);
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-modal-close') || customElements.define('kemet-modal-close', KemetModalClose);

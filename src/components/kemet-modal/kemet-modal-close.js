import { css, html, LitElement } from 'lit';

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
    /**
     * Fires when the close button is pressed
     */
    this.dispatchEvent(new CustomEvent('kemet-modal-close-pressed', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-modal-close') || customElements.define('kemet-modal-close', KemetModalClose);

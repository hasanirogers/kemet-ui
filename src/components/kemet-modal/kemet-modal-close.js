import { html, LitElement } from 'lit';

export class KemetModalClose extends LitElement {
  render() {
    return html`
      <slot @keyup=${() => this.close()} @click=${() => this.close()}></slot>
    `;
  }

  close() {
    this.dispatchEvent(new CustomEvent('kemet-modal-close-btn', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }
}

window.customElements.define('kemet-modal-close', KemetModalClose);

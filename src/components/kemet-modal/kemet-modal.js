import { html, LitElement } from 'lit';
import { stylesBase, stylesEffects } from './kemet-modal.styles.js';

export class KemetModal extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesEffects,
    ];
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true,
      },
      effect: {
        type: String,
        reflect: true,
      },
      closeOnClick: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.opened = false;
    this.closeOnClick = false;

    this.addEventListener('kemet-modal-close-btn', this.close.bind(this));
  }

  render() {
    return html`
      <div class="content">
        <slot></slot>
      </div>

      <div class="overlay"></div>
    `;
  }

  firstUpdated() {
    this.addEventListener('click', (event) => {
      if (this.opened && this.closeOnClick && event.target.tagName.toLowerCase() === 'kemet-modal') {
        this.close();
      }
    });
  }

  open() {
    this.opened = true;

    this.dispatchEvent(new CustomEvent('kemet-modal-open', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }

  close() {
    this.opened = false;

    this.dispatchEvent(new CustomEvent('kemet-modal-close', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }
}

window.customElements.define('kemet-modal', KemetModal);

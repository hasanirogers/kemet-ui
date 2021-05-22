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
        attribute: 'close-on-click',
      },
    };
  }

  constructor() {
    super();
    this.opened = false;
    this.closeOnClick = false;

    this.addEventListener('kemet-modal-close-btn', () => { this.opened = false; });
  }

  firstUpdated() {
    this.addEventListener('click', (event) => {
      if (this.opened && this.closeOnClick && event.target.tagName.toLowerCase() === 'kemet-modal') {
        this.opened = false;
      }
    });
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      this.makeEvent('opened');
    }

    if (prevProps.get('opened') && this.opened === false) {
      this.makeEvent('closed');
    }
  }

  render() {
    return html`
      <div class="content">
        <slot></slot>
      </div>
      <div class="overlay"></div>
    `;
  }

  makeEvent(type) {
    this.dispatchEvent(
      new CustomEvent(`kemet-modal-${type}`, {
        bubbles: true,
        composed: true,
        detail: this,
      }),
    );
  }
}

window.customElements.define('kemet-modal', KemetModal);

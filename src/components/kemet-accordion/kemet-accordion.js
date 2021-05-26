import { LitElement, html, css } from 'lit';

export class KemetAccordion extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      [name="trigger"] {
        cursor: pointer
      }

      #panel {
        overflow: hidden;
        transition: all var(--kemet-accordion-transition-speed, 300ms) ease;
      }
    `;
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true,
      },
      maxHeight: {
        type: String,
        attribute: 'max-height',
      },
      closeOthers: {
        type: Boolean,
        attribute: 'close-others',
      },
    };
  }

  constructor() {
    super();

    this.opened = undefined;
    this.maxHeight = '0px';
    this.closeOthers = false;
  }

  firstUpdated() {
    // eslint-disable-next-line prefer-destructuring
    this.panelElement = this.shadowRoot
      .querySelector('slot[name="panel"]')
      .assignedNodes({ flatten: true })[0];
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
      <div id="trigger" tabindex="0" @keyup=${() => this.toggle()} @click="${() => this.toggle()}">
        <slot name="trigger"></slot>
      </div>
      <div id="panel" style="max-height:${this.maxHeight};">
        <slot name="panel"></slot>
      </div>
    `;
  }

  toggle() {
    this.opened = !this.opened;

    if (this.opened) {
      this.closeAll();
      this.opened = true;
      this.maxHeight = `${this.panelElement.offsetHeight}px`;
    } else {
      this.maxHeight = '0px';
    }
  }

  makeEvent(type) {
    this.dispatchEvent(
      new CustomEvent(`kemet-accordion-${type}`, {
        bubbles: true,
        composed: true,
        detail: this,
      }),
    );
  }

  closeAll() {
    if (this.closeOthers) {
      document.querySelectorAll('kemet-accordion').forEach((accordion) => {
        accordion.opened = false;
        accordion.maxHeight = '0px';
      });
    }
  }
}

window.customElements.define('kemet-accordion', KemetAccordion);

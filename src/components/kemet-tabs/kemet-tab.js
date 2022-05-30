import { LitElement, html, css } from 'lit';

export default class KemetTab extends LitElement {
  static get styles() {
    return css`
      :host {
        cursor: pointer;
        display: inline-flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        padding: var(--kemet-tab-padding, 1rem);
      }

      :host([selected]) {
        cursor: auto;
        color: var(--kemet-tab-color, var(--kemet-color-primary));
      }

      kemet-icon {
        cursor: pointer;
        margin-left: 0.5rem;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Is true when the tab is selected
       */
      selected: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Links to a panel name
       */
      link: {
        type: String,
      },
      /**
       * Determines if the tab can be closed
       */
      closable: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();

    // property defaults
    this.selected = false;
  }

  firstUpdated() {
    this.addEventListener('click', this.select.bind(this));
  }

  updated() {
    this.a11y();
  }

  render() {
    return html`
      <slot></slot>
      ${this.makeCloseable()}
    `;
  }

  select() {
    /**
     * Fires when a tab is selected
     */
    this.dispatchEvent(new CustomEvent('kemet-tab-selected', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }

  a11y() {
    this.setAttribute('role', 'tab');

    if (this.selected) {
      this.setAttribute('aria-selected', 'true');
      this.setAttribute('tabindex', '0');
    } else {
      this.setAttribute('aria-selected', 'false');
      this.setAttribute('tabindex', '-1');
    }
  }

  makeCloseable() {
    if (this.closable) {
      return html`<kemet-icon icon="x-lg" @click=${() => this.handleClosable()}></kemet-icon>`;
    }

    return null;
  }

  handleClosable() {
    /**
     * Fires when the tab should close
     */
    this.dispatchEvent(new CustomEvent('kemet-tab-close', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }
}

customElements.define('kemet-tab', KemetTab);

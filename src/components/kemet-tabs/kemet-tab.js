import { LitElement, html, css } from 'lit';

export default class KemetTab extends LitElement {
  static get styles() {
    return css`
      :host {
        cursor: pointer;
      }

      :host([selected]) {
        cursor: auto;
      }
    `;
  }

  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflect: true,
      },
      link: {
        type: String,
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
    `;
  }

  select() {
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
}

customElements.define('kemet-tab', KemetTab);

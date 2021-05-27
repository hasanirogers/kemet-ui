import { LitElement, html, css } from 'lit';

export class KemetTab extends LitElement {
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

  render() {
    return html`
      <span tabindex="0" @keyup=${() => this.select()} @click=${() => this.select()}>
        <slot></slot>
      </span>
    `;
  }

  select() {
    this.dispatchEvent(new CustomEvent('kemet-tab-selected', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }
}

customElements.define('kemet-tab', KemetTab);

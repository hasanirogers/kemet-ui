import { LitElement, html, css } from 'lit';

export class KemetTabPanel extends LitElement {
  static get styles() {
    return css`
      :host {
        display: none;
      }

      :host([selected]) {
        display: block;
      }

      ::slotted(img) {
        max-width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflect: true,
      },
      panel: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('kemet-tab-panel', KemetTabPanel);

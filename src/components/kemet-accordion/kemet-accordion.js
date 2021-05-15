import { LitElement, html, css } from 'lit';

export class KemetAccordion extends LitElement {
  static get styles() {
    return css`
      .panel {
        overflow: hidden;
        max-height: 0px;
        transition: all 600ms ease;
      }

      :host {
        display: block;
      }

      :host([opened]) .panel {
        max-height: 99rem;
      }

      [name="trigger"] {
        cursor: pointer
      }
    `;
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.opened = false;
  }

  render() {
    return html`
      <slot name="trigger" @keyup=${() => this.toggle()} @click="${() => this.toggle()}"></slot>
      <div class="panel">
        <slot name="panel"></slot>
      </div>
    `;
  }

  toggle() {
    this.opened = !this.opened;
  }
}

window.customElements.define('kemet-accordion', KemetAccordion);

import { LitElement, html, css } from 'lit';

export class KemetSVGs extends LitElement {
  static get styles() {
    return css`
      :host {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      set: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    this.set = 'svgs';
    document.kemetSVGs = document.kemetSVGs || {};
  }

  firstUpdated() {
    this.slotElement = this.shadowRoot.querySelector('slot');

    this.populateIcons();
    this.slotElement.addEventListener('slotchange', this.populateIcons());
  }

  render() {
    return html`<slot></slot>`;
  }

  populateIcons() {
    const svg = this.slotElement.assignedElements()[0];
    const svgContents = svg ? svg.querySelectorAll('defs > g') : null;

    if (svgContents) {
      document.kemetSVGs[this.set] = svgContents;
    }
  }
}

window.customElements.define('kemet-svgs', KemetSVGs);

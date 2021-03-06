import { LitElement, html, css } from 'lit';

export default class KemetSVGs extends LitElement {
  static get styles() {
    return css`
      :host {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Defines the name for the set of svgs.
       */
      set: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    this.set = 'svgs';
  }

  firstUpdated() {
    this.slotElement = this.shadowRoot.querySelector('slot');
    document.kemetSVGs = document.kemetSVGs || {};

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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-svgs') || customElements.define('kemet-svgs', KemetSVGs);

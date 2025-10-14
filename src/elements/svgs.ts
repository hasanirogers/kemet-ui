import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-svgs
 * @summary A set of SVG graphics that can be referenced anywhere in a page or app.
 *
 * @prop {string} set - Defines the name for the set of svgs.
 *
 */

@customElement('kemet-svgs')
export default class KemetSVGs extends LitElement {
  static styles = [css`
    :host {
      display: none;
    }
  `];

  @property({ type: String })
  set: string = 'svgs';

  @state()
  slotElement: HTMLSlotElement;

  firstUpdated() {
    this.slotElement = this.shadowRoot.querySelector('slot');
    document.kemetSVGs = document.kemetSVGs || {};

    this.populateIcons();
    this.slotElement.addEventListener('slotchange', () => this.populateIcons());
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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-svgs': KemetSVGs
  }

  interface Document {
    kemetSVGs: any;
  }
}

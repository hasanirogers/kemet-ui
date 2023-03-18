import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-svg
 * @summary A svg from a set of custom SVGs.
 *
 * @prop {string} set - Defines which set of svgs is referenced.
 * @prop {string} svg - The name (id) of the svg to be displayed.
 * @prop {number} size - Sets the width and height of a the svg to the given value in pixels.
 * @prop {string} ratio - The value for the preserveAspectRatio attribute of the svg.
 * @prop {string} viewBox - The value for the viewBox attribute of the svg.
 *
 * @csspart svg - The svg element.
 *
 */

@customElement('kemet-svg')
export default class KemetSVG extends LitElement {
  static styles = [css`
    :host {
      display: inline-block;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `];

  @property({ type: String })
  set: string;

  @property({ type: String })
  svg: string = 'svgs';

  @property({ type: Number })
  size: number;

  @property({ type: String })
  ratio: string = 'none';

  @property({ type: String })
  viewBox: string = '0 0 128 128';

  updated() {
    this.setSize();
    this.getIcon();
  }

  render() {
    return html`
      <svg part="svg" viewBox="${this.viewBox}" preserveAspectRatio="${this.ratio}" fill="currentColor"></svg>
    `;
  }

  setSize() {
    if (this.size) {
      this.style.width = `${this.size}px`;
      this.style.height = `${this.size}px`;
    }
  }

  getIcon() {
    let svgElement;
    const svgs = document.kemetSVGs[this.set];

    svgs.forEach((svg, index) => {
      const id = svg.getAttribute('id');

      if (id && id === this.svg) {
        svgElement = svgs[index];
      }
    });

    if (svgElement) {
      this.fillSVG(svgElement);
    } else {
      // eslint-disable-next-line no-console
      console.error(`Could not find svg "${this.svg}" in set "${this.set}".`);
    }
  }

  fillSVG(element) {
    const content = element.cloneNode(true);
    const svg = this.shadowRoot.querySelector('svg');
    const g = svg.querySelector('g');

    if (g) g.remove();
    svg.appendChild(content);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-svg': KemetSVG
  }

  interface Document {
    kemetSVGs: any;
  }
}

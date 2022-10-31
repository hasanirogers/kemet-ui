import { html, css, LitElement } from 'lit';

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

export default class KemetSVG extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    `;
  }

  static get properties() {
    return {
      set: {
        type: String,
      },
      svg: {
        type: String,
      },
      size: {
        type: Number,
      },
      ratio: {
        type: String,
      },
      viewBox: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    this.set = 'svgs';
    this.ratio = 'none';
    this.viewBox = '0 0 128 128';
  }

  updated() {
    this.setSize();
    this.getIcon();
  }

  render() {
    return html`
      <svg part="svg" viewBox="${this.viewBox}" preserveAspectRatio="${this.ratio}"></svg>
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-svg') || customElements.define('kemet-svg', KemetSVG);

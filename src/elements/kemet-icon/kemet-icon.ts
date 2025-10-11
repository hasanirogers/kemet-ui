import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesBase } from './styles';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-icon
 * @summary An element that represents an icon from a predefined set of open sourced icons.
 *
 * @prop {string} icon - The name of the icon to reference.
 * @prop {string} set - The sprite map from an open source project that an icon belongs too. Values include: (bootstrap | font-awesome-brand | font-awesome-regular | font-awesome-solid)
 * @prop {number} size - The width and height of the icon in pixels.
 *
 */

@customElement('kemet-icon')
export default class KemetIcon extends LitElement {
  static styles = [stylesBase];

  @property({ type: String })
  icon: string = 'alarm';

  @property({ type: String })
  set: string = 'bootstrap';

  @property({ type: Number })
  size: number = 16;

  updated() {
    this.getIcon();
    this.style.width = `${this.size}px`;
    this.style.height = `${this.size}px`;
  }

  render() {
    return html``;
  }

  async getIcon() {
    const parser = new DOMParser();
    let svgString;

    try {
      svgString = await fetch(`${this.getUrl()}/${this.icon}.svg`)
        .then(response => response.text());

      if (svgString.indexOf('</svg>') < 0) {
        throw new Error('Not a valid svg.');
      }
    } catch (error) {
      svgString = '';
      console.error(error);
    }

    const svgElement = parser.parseFromString(svgString, 'image/svg+xml').documentElement;
    const svgPrevious = this.shadowRoot?.querySelector('svg');

    if (svgElement.tagName.toLowerCase() === 'svg') {
      svgElement.setAttribute('id', this.icon);
      svgElement.setAttribute('width', `${this.size}px`);
      svgElement.setAttribute('height', `${this.size}px`);
      svgElement.setAttribute('fill', 'currentColor');

      if (svgPrevious) svgPrevious.remove();
      this.shadowRoot?.appendChild(svgElement);
    } else {
      console.error(`Could not find icon "${this.icon}" in set "${this.set}"`);

      const errorIconString = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="kemet-error" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" width="${this.size}" height="${this.size}">
          <style type="text/css">
            .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
            .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#EC1C24;}
          </style>
          <g>
            <path class="st0" d="M256,0c70.7,0,134.7,28.7,181,75c46.3,46.3,75,110.3,75,181c0,70.7-28.7,134.7-75,181   c-46.3,46.3-110.3,75-181,75c-70.7,0-134.7-28.7-181-75C28.7,390.7,0,326.7,0,256c0-70.7,28.7-134.7,75-181S185.3,0,256,0z"/>
            <path class="st1" d="M512,256c0-70.7-28.7-134.7-75-181C390.7,28.7,326.7,0,256,0C193,0,135.5,22.8,90.9,60.6l-0.1-0.1   C85.3,65.1,80,69.9,75,75c-5,5.1-9.9,10.3-14.5,15.8l0.1,0.1C22.8,135.5,0,193,0,256c0,70.7,28.7,134.7,75,181   c46.3,46.3,110.3,75,181,75c63,0,120.5-22.8,165.1-60.6l0.1,0.1c5.4-4.6,10.7-9.5,15.8-14.5c5-5,9.9-10.3,14.5-15.8l-0.1-0.1   C489.2,376.6,512,319,512,256z M256,42.9c58.9,0,112.1,23.9,150.7,62.4c38.6,38.6,62.4,91.9,62.4,150.7c0,51.1-18.1,98-48.1,134.8   L121.2,90.9C158,60.9,204.9,42.9,256,42.9z M256,469.1c-58.8,0-112.1-23.9-150.7-62.4C66.7,368.1,42.9,314.9,42.9,256   c0-51.1,18.1-98,48.1-134.8l299.8,299.8C354,451.1,307.1,469.1,256,469.1z"/>
          </g>
        </svg>
      `;

      const errorIconElement = parser.parseFromString(errorIconString, 'image/svg+xml').documentElement;

      if (svgPrevious) svgPrevious.remove();
      this.shadowRoot?.appendChild(errorIconElement);
    }
  }

  getUrl() {
    let url;

    switch (this.set) {
      case 'bootstrap': url = 'https://unpkg.com/bootstrap-icons@latest/icons'; break;
      case 'font-awesome-brands': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/brands'; break;
      case 'font-awesome-regular': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/regular'; break;
      case 'font-awesome-solid': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/solid'; break;
      default: url = 'https://unpkg.com/bootstrap-icons@latest/icons';
    }

    return url;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-icon': KemetIcon
  }
}

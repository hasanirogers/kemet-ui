import { html, css, LitElement } from 'lit';

export class KemetScrollSnapSlide extends LitElement {
  static get properties() {
    return {
      focused: {
        type: Boolean,
        reflect: true,
      },
      index: {
        type: String,
        reflect: true,
      },
      label: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        flex: 0 0 auto;
        width: var(--kememt-scroll-snap-slide-width, 100%);
        scroll-snap-align: var(--kemet-scroll-snap-slide-align, center);
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('kemet-scroll-snap-slide', KemetScrollSnapSlide);

import { html, css, LitElement } from 'lit';

export class KemetRatio extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 0px;
        overflow: hidden;
        position: relative;
      }

      #container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    `;
  }

  static get properties() {
    return {
      aspectRatio: {
        type: String,
        reflect: true,
        attribute: 'aspect-ratio',
      },
    };
  }

  constructor() {
    super();
    this.aspectRatio = '16:9';
  }

  render() {
    return html`
      <div id="container" part="container">
        <slot @slotchange=${() => this.setAspectRatio()}></slot>
      </div>
    `;
  }

  setAspectRatio() {
    // https://ratiobuddy.com

    const getDimensions = this.aspectRatio.split(':');
    const width = parseInt(getDimensions[0], 10);
    const height = parseInt(getDimensions[1], 10);

    this.style.paddingTop = width && height ? `${(height / width) * 100}%` : '56.25%';
  }
}

window.customElements.define('kemet-ratio', KemetRatio);

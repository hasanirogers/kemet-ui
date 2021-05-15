import { html, css, LitElement } from 'lit';

export class KemetScrollLink extends LitElement {
  static get styles() {
    return css`
      :host {
        cursor: pointer;
        display: inline-block;
      }
    `;
  }

  static get properties() {
    return {
      element: {
        type: Object,
      },
      target: {
        type: Object,
      },
      xOffset: {
        type: Number,
        attribute: 'x-offset',
        reflect: true,
      },
      yOffset: {
        type: Number,
        attribute: 'y-offset',
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.element = this.element || window;
    this.target = this.target || document.querySelector('body');
    this.xOffset = 0;
    this.yOffset = 0;
    this.keyCodes = {
      ENTER: 13,
      SPACE: 32,
    };
    this.isSmoothSupported = 'scrollBehavior' in document.documentElement.style;
  }

  render() {
    return html`
      <div tabindex="0" @click=${() => this.handleScroll()} @keyup=${event => this.handleKeyup(event)}>
        <slot></slot>
      </div>
    `;
  }

  handleKeyup(event) {
    if (event.keyCode === this.keyCodes.ENTER || event.keyCode === this.keyCodes.SPACE) {
      this.handleScroll();
    }
  }

  handleScroll() {
    const scrollTop = this.target.offsetTop + this.yOffset;
    const scrollLeft = this.target.offsetLeft + this.xOffset;

    if (this.isSmoothSupported) {
      this.element.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: 'smooth',
      });
    } else {
      this.element.scrollTo(scrollLeft, scrollTop);
    }
  }
}

window.customElements.define('kemet-scroll-link', KemetScrollLink);

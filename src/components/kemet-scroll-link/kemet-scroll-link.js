import { html, css, LitElement } from 'lit';

export default class KemetScrollLink extends LitElement {
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
      /**
       * A DOM element that establishes the context of scrolling.
       */
      element: {
        type: Object,
      },
      /**
       * A DOM element that represents the destination of the scroll link.
       * If no target is specified it will default to the top of the page.
       */
      target: {
        type: Object,
      },
      /**
       * Allows the horizontal scrolling to stop short of the given value.
       */
      xOffset: {
        type: Number,
        attribute: 'x-offset',
        reflect: true,
      },
      /**
       * Allows the vertical scrolling to stop short of the given value.
       */
      yOffset: {
        type: Number,
        attribute: 'y-offset',
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.element = this.element || window;
    this.target = this.target || document.querySelector('body');
    this.xOffset = 0;
    this.yOffset = 0;
  }

  firstUpdated() {
    // standard properties
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-scroll-link') || customElements.define('kemet-scroll-link', KemetScrollLink);

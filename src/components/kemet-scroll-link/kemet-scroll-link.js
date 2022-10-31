import { html, css, LitElement } from 'lit';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-link
 * @summary A component that adds a smooth scrolling link to an target..
 *
 * @prop {object} element - A DOM element that establishes the context of scrolling.
 * @prop {object} target - A DOM element that represents the destination of the scroll link. If no target is specified it will default to the top of the page.
 * @prop {number} xOffset - Allows the horizontal scrolling to stop short of the given value.
 * @prop {number} yOffset - Allows the vertical scrolling to stop short of the given value.
 *
 */

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

    // managed properties
    this.element = this.element || window;
    this.target = this.target || document.querySelector('body');
    this.xOffset = 0;
    this.yOffset = 0;
  }

  firstUpdated() {
    // standard properties
    /** @internal */
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

import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-link
 * @summary A component that adds a smooth scrolling link to a target.
 *
 * @prop {object} element - A DOM element that establishes the context of scrolling.
 * @prop {object} target - A DOM element that represents the destination of the scroll link. If no target is specified it will default to the top of the page.
 * @prop {number} xOffset - Allows the horizontal scrolling to stop short of the given value.
 * @prop {number} yOffset - Allows the vertical scrolling to stop short of the given value.
 *
 */

@customElement('kemet-scroll-link')
export default class KemetScrollLink extends LitElement {
  static styles = [
    css`
      :host {
        cursor: pointer;
        display: inline-block;
      }
    `,
  ];

  @property({ type: Object })
  element: HTMLElement | Window = window;

  @property({ type: Object })
  target: HTMLElement = document.querySelector('body');

  @property({ type: Number, attribute: 'x-offset', reflect: true })
  xOffset: number = 0;

  @property({ type: Number, attribute: 'y-offset', reflect: true })
  yOffset: number = 0;

  @state()
  isSmoothSupported: boolean;

  firstUpdated() {
    // standard properties
    this.isSmoothSupported = 'scrollBehavior' in document.documentElement.style;
  }

  render() {
    return html`
      <div tabindex="0" @click=${() => this.handleScroll()} @keyup=${(event: KeyboardEvent) => this.handleKeyup(event)}>
        <slot></slot>
      </div>
    `;
  }

  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.code === 'Space') {
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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-scroll-link': KemetScrollLink
  }
}

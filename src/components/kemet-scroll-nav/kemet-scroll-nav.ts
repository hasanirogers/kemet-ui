import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesScrollNav } from './styles';
import { TypeEffect } from './types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-nav
 * @summary An element that transforms at a scroll point.
 *
 * @prop {string} effect - Determines where the transform point is activated. Values include: (sticky | resize)
 * @prop {boolean} transform - Whether the nav has shifted into a new state.
 * @prop {number} offset - Allows for an arbitrary adjustment of the transform point in pixels. Works with negative values.
 *
 * @cssproperty --kemet-scroll-nav-padding - The padding of the nav.
 * @cssproperty --kemet-scroll-nav-background - The background color of the nav.
 * @cssproperty --kemet-scroll-nav-transition - The transition speed of the transformation.
 * @cssproperty --kemet-scroll-nav-resize-height - The height of the pre-transformed nav.
 * @cssproperty --kemet-scroll-nav-resize-height-transformed - The height of the transformed nav.
 *
 */

@customElement('kemet-scroll-nav')
export default class KemetScrollNav extends LitElement {
  static styles = [stylesScrollNav];

  @property({ type: String, reflect: true })
  effect: TypeEffect = 'sticky';

  @property({ type: Boolean, reflect: true })
  transform: boolean = false;

  @property({ type: Number })
  offset: number = 0;

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated() {
    const stickPoint = this.offsetTop;
    const elementHeight = this.offsetHeight;

    window.addEventListener('scroll', () => {
      // we pass stickPoint and elementHeight as recorded constants
      // so that it does not update for each call to handleScroll
      this.handleScroll(stickPoint, elementHeight);
    });
  }

  handleScroll(stickPoint: number, elementHeight: number) {
    const transformPoint = (this.effect === 'sticky')
      ? stickPoint + this.offset
      : elementHeight + this.offset;

    this.transform = window.pageYOffset >= transformPoint;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-scroll-nav': KemetScrollNav
  }
}

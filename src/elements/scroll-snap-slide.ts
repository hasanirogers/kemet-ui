import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-snap-slide
 * @summary A slide in a scroll snap component.
 *
 * @prop {boolean} focused - Is true when the slide is fully visible in its container.
 * @prop {number} index - Identifies the slide.
 * @prop {string} label - Labels the slide.
 *
 * @cssproperty --kemet-scroll-snap-slide-width - The width of the slide. Default: 100%.
 * @cssproperty --kemet-scroll-snap-slide-align - The slide alignment. Default: center.
 *
 */

@customElement('kemet-scroll-snap-slide')
export default class KemetScrollSnapSlide extends LitElement {
  static styles = [css`
    :host {
      display: block;
      flex: 0 0 auto;
      width: var(--kemet-scroll-snap-slide-width, 100%);
      scroll-snap-align: var(--kemet-scroll-snap-slide-align, center);
    }
  `];

  @property({ type: Boolean, reflect: true })
  focused: boolean;

  @property({ type: Number, reflect: true })
  index: number;

  @property({ type: String, reflect: true })
  label: string;

  updated() {
    this.addTabIndex();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  addTabIndex() {
    this.setAttribute('tabindex', '0');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-scroll-snap-slide': KemetScrollSnapSlide
  }
}

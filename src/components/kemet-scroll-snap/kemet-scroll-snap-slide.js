import { html, css, LitElement } from 'lit';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-snap-slide
 * @summary A slide in a scroll snap component.
 *
 * @prop {boolean} focused - Is true when the slide is fully visible in it's container.
 * @prop {string} index - Identifies the slide.
 * @prop {string} label - Labels the slide.
 *
 * @cssproperty --kemet-scroll-snap-slide-width - The width of the slide. Default: 100%.
 * @cssproperty --kemet-scroll-snap-slide-align - The slide alignment. Default: center.
 *
 */

export default class KemetScrollSnapSlide extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        flex: 0 0 auto;
        width: var(--kemet-scroll-snap-slide-width, 100%);
        scroll-snap-align: var(--kemet-scroll-snap-slide-align, center);
      }
    `;
  }

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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-scroll-snap-slide') || customElements.define('kemet-scroll-snap-slide', KemetScrollSnapSlide);

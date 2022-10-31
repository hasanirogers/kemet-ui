import { LitElement, html, css } from 'lit';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-nav
 * @summary An element that transforms at a scroll point.
 *
 * @prop {string} effect - Determines where the transform point is activated. Values include: (sticky | resize)
 * @prop {boolean} transform - Whether or not the nav has shifted into a new state.
 * @prop {number} offset - Allows for an arbitrary adjustment of the transform point in pixels. Works with negative values.
 *
 * @cssproperty --kemet-scroll-nav-padding - The padding of the nav. Default: 1rem 2rem.
 * @cssproperty --kemet-scroll-nav-background - The background color of the nav. Default: #fafafa.
 * @cssproperty --kemet-scroll-nav-transition - The transition speed of the transformation. Default: 300ms.
 * @cssproperty --kemet-scroll-nav-resize-height - The height of the pre-transformed nav. Default: 400px.
 * @cssproperty --kemet-scroll-nav-resize-height-transformed - The height of the transformed nav. Default: 100px.
 *
 */

export default class KemetScrollNav extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          box-sizing: border-box;
          padding: var(--kemet-scroll-nav-padding, 1rem 2rem);
          background-color: var(--kemet-scroll-nav-background, #fafafa);
          transition: all var(--kemet-scroll-nav-transition, 300ms) ease;
        }

        :host([transform]),
        :host([effect="resize"]) {
          position: fixed;
          top: 0;
          width: 100%;
        }

        :host([effect="resize"]) {
          height: var(--kemet-scroll-nav-resize-height, 400px);
        }

        :host([transform][effect="resize"]) {
          height: var(--kemet-scroll-nav-resize-height-transformed, 100px);
        }
      `,
    ];
  }

  static get properties() {
    return {
      effect: {
        type: String,
        reflect: true,
      },
      transform: {
        type: Boolean,
        reflect: true,
      },
      offset: {
        type: Number,
      },
    };
  }

  constructor() {
    super();

    this.effect = 'sticky';
    this.transform = false;
    this.offset = 0;
  }

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

  handleScroll(stickPoint, elementHeight) {
    const transformPoint = (this.effect === 'sticky')
      ? stickPoint + this.offset
      : elementHeight + this.offset;

    if (window.pageYOffset >= transformPoint) {
      this.transform = true;
    } else {
      this.transform = false;
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-scroll-nav') || customElements.define('kemet-scroll-nav', KemetScrollNav);

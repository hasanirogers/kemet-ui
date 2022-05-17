import { LitElement, html, css } from 'lit';

export class KemetScrollNav extends LitElement {
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
      /**
       * Determines where the transform point is activated. Values include: (sticky | resize)
       */
      effect: {
        type: String,
        reflect: true,
      },
      /**
       * Whether or not the nav has shifted into a new state.
       */
      transform: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Allows for an arbitrary adjustment of the transform point in pixels.
       * Works with negative values.
       */
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

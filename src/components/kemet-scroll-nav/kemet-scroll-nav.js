import { LitElement, html, css } from 'lit';

export class KemetScrollNav extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        :host([transform]),
        :host([effect="resize"]) {
          position: fixed;
          top: 0;
          width: 100%;
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

window.customElements.define('kemet-scroll-nav', KemetScrollNav);

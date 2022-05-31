import { LitElement, html } from 'lit';
import { stylesBase, stylesEffects } from './kemet-drawer.styles.js';

export default class KemetDrawer extends LitElement {
  static get styles() {
    return [stylesBase, stylesEffects];
  }

  static get properties() {
    return {
      /**
       * Determines if the drawer is opened or not.
       */
      opened: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The animation effect for opening and closing the drawer.
       * Values include: (slide | reveal | push | scale)
       */
      effect: {
        type: String,
        reflect: true,
      },
      /**
       * Allows you to control which side the drawer opens from.
       * Values include: (left | right | top | bottom)
       */
      side: {
        type: String,
        reflect: true,
      },
      /**
       * Adds a overlay over the content section of the Drawer when opened
       */
      overlay: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.opened = undefined;
    this.effect = 'slide';
    this.side = 'left';
    this.overlay = false;
  }

  firstUpdated() {
    this.addEventListener('click', (event) => {
      if (this.opened && event.target.tagName.toLowerCase() === 'kemet-drawer') {
        this.opened = false;
      }
    });
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      /**
       * Fires when the drawer opens.
       */
      this.dispatchEvent(
        new CustomEvent('kemet-drawer-opened', {
          bubbles: true,
          composed: true,
          detail: this,
        }),
      );
    }

    if (prevProps.get('opened') && this.opened === false) {
      /**
       * Fires when the drawer closes.
       */
      this.dispatchEvent(
        new CustomEvent('kemet-drawer-closed', {
          bubbles: true,
          composed: true,
          detail: this,
        }),
      );
    }
  }

  render() {
    return html`
      <section class="off-canvas" part="container">
        <nav class="off-canvas__nav" part="drawer" title="Drawer">
          <slot name="navigation"></slot>
        </nav>
        <div class="off-canvas__pusher" part="pusher">
          <main class="off-canvas__content" part="content">
            <div class="off-canvas__wrapper" part="wrapper">
              <slot name="content"></slot>
            </div>
          </main>
        </div>
      </section>
    `;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-drawer') || customElements.define('kemet-drawer', KemetDrawer);

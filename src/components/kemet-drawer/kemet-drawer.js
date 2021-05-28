import { LitElement, html } from 'lit';
import { stylesBase, stylesEffects } from './kemet-drawer.styles.js';

export class KemetDrawer extends LitElement {
  static get styles() {
    return [stylesBase, stylesEffects];
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true,
      },
      effect: {
        type: String,
        reflect: true,
      },
      side: {
        type: String,
        reflect: true,
      },
      overlay: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // property defaults
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
      this.makeEvent('opened');
    }

    if (prevProps.get('opened') && this.opened === false) {
      this.makeEvent('closed');
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

  makeEvent(type) {
    this.dispatchEvent(
      new CustomEvent(`kemet-drawer-${type}`, {
        bubbles: true,
        composed: true,
        detail: this,
      }),
    );
  }
}

window.customElements.define('kemet-drawer', KemetDrawer);

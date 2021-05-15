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
    };
  }

  constructor() {
    super();

    // property defaults
    this.opened = undefined;
    this.effect = 'slide';
    this.side = 'left';
  }

  render() {
    return html`
      <section class="off-canvas">
        <nav class="off-canvas__nav">
          <slot name="navigation"></slot>
        </nav>
        <div class="off-canvas__pusher">
          <main class="off-canvas__content">
            <div class="off-canvas__wrapper">
              <slot name="content"></slot>
            </div>
          </main>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    this.addEventListener('click', (event) => {
      if (this.opened && event.target.tagName.toLowerCase() === 'kemet-drawer') {
        this.close();
      }
    });
  }

  updated() {
    if (this.opened === true) {
      this.makeEvent('open');
    }

    if (this.opened === false) {
      this.makeEvent('close');
    }
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
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

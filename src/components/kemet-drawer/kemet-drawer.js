import { LitElement, html } from 'lit';
import { stylesBase, stylesEffects } from './styles.js';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-drawer
 * @summary A component that adds an off-canvas menu with different effects.
 *
 * @prop {boolean} opened - Determines if the drawer is opened or not.
 * @prop {string} effect - The animation effect for opening and closing the drawer. Values include: (slide | reveal | push | scale)
 * @prop {string} side - Allows you to control which side the drawer opens from. Values include: (left | right | top | bottom)
 * @prop {boolean} overlay - Adds a overlay over the content section of the Drawer when opened
 *
 * @slot navigation - The off-screen nav area of your app or site
 * @slot content - The main content area of your app or site.
 *
 * @csspart container
 * @csspart drawer
 * @csspart pusher
 * @csspart content
 * @csspart wrapper
 *
 * @cssproperty --kemet-drawer-width - The width of the drawer. Default: 300px.
 * @cssproperty --kemet-drawer-height - The height of the drawer. Default:  100%.
 * @cssproperty --kemet-drawer-color - The text color of the drawer. Default:  #fafafa.
 * @cssproperty --kemet-drawer-background-color - The background color of the drawer. Default: #202020.
 * @cssproperty --kemet-drawer-overlay-color - The color of the overlay. Default: rgba(0, 0, 0, 0.2).
 *
 * @event kemet-drawer-opened - Fires when the drawer opens.
 * @event kemet-drawer-closed - Fires when the drawer closes.
 *
 */

export default class KemetDrawer extends LitElement {
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
      emitEvent(this, 'kemet-drawer-opened', this);
    }

    if (prevProps.get('opened') && this.opened === false) {
      emitEvent(this, 'kemet-drawer-closed', this);
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

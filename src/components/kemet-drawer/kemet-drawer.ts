import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';
import { TypeEffect, TypeSide } from './types';
import { stylesBase, stylesEffects } from './styles';

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
 * @prop {boolean} overlay - Adds an overlay over the content section of the Drawer when opened
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
 * @cssproperty --kemet-drawer-width - The width of the drawer.
 * @cssproperty --kemet-drawer-height - The height of the drawer.
 * @cssproperty --kemet-drawer-color - The text color of the drawer.
 * @cssproperty --kemet-drawer-background-color - The background color of the drawer.
 * @cssproperty --kemet-drawer-overlay-color - The color of the overlay.
 *
 * @event kemet-drawer-opened - Fires when the drawer opens.
 * @event kemet-drawer-closed - Fires when the drawer closes.
 *
 */

@customElement('kemet-drawer')
export default class KemetDrawer extends LitElement {
  static styles = [stylesBase, stylesEffects];

  @property({ type: Boolean, reflect: true })
  opened: boolean = undefined;

  @property({ type: String, reflect: true })
  effect: TypeEffect = 'slide';

  @property({ type: String, reflect: true })
  side: TypeSide = 'left';

  @property({ type: Boolean, reflect: true })
  overlay: boolean = false;

  firstUpdated() {
    this.addEventListener('click', (event) => {
      const targetElement = event.target as HTMLElement;
      if (this.opened && targetElement.tagName.toLowerCase() === 'kemet-drawer') {
        this.opened = false;
      }
    });
  }

  updated(prevProps: Map<string, never>) {
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
          <div class="off-canvas__content" part="content">
            <div class="off-canvas__wrapper" part="wrapper">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-drawer': KemetDrawer
  }
}

import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stylesBase, stylesEffects } from './styles';
import { emitEvent } from '../../utilities/misc/events';
import { TypeEffect } from './types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-modal
 * @summary A dialog that has many built in effects and flexible styles.
 *
 * @prop {boolean} opened
 * @prop {string} effect
 * @prop {boolean} closeOnClick
 * @prop {string} breakpoint
 * @prop {boolean} mobile
 *
 * @csspart content - The main contents of the modal.
 * @csspart overlay - The surrounding scrim of the modal.
 *
 * @cssproperty --kemet-modal-content-min-width - The minimum width of the content.
 * @cssproperty --kemet-modal-content-max-width - The maximum width of the content.
 * @cssproperty --kemet-modal-content-background-color - The background color of the content.
 * @cssproperty --kemet-modal-content-mobile-min-width - The min with of the mobile content.
 * @cssproperty --kemet-modal-content-mobile-min-height - The min height of the mobile content.
 *
 * @event kemet-modal-opened - Fires when the modal opens
 * @event kemet-modal-closed - Fires when the modal closes
 *
 */

@customElement('kemet-modal')
export default class KemetModal extends LitElement {
  static styles = [stylesBase, stylesEffects];

  @property({ type: Boolean, reflect: true })
  opened: boolean = false;

  @property({ type: String, reflect: true })
  effect: TypeEffect;

  @property({ type: Boolean, attribute: 'close-on-click' })
  closeOnClick: boolean = false;

  @property({ type: String })
  breakpoint: string = '600px';

  @property({ type: Boolean, reflect: true })
  mobile: boolean;

  @state()
  focusableSelector: string;

  @state()
  focusableElements: any;

  constructor() {
    super();

    // bindings
    this.addEventListener('kemet-modal-close-pressed', () => { this.opened = false; });
  }

  firstUpdated() {
    // standard properties
    /** @internal */
    this.focusableSelector = 'body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
    this.focusableElements = this.querySelectorAll(this.focusableSelector);

    // events
    this.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.opened = false;
      }
    });

    this.addEventListener('click', (event) => {
      const targetElement = event.target as HTMLElement;
      if (this.opened && this.closeOnClick && targetElement.tagName.toLowerCase() === 'kemet-modal') {
        this.opened = false;
      }
    });

    window.addEventListener('resize', () => {
      this.isMobile();
    });

    this.focusableElements.forEach((element) => {
      element.addEventListener('keydown', event => this.handleFocusableDown(event));
    });
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      setTimeout(() => {
        this.focusableElements[0]?.focus();
      }, 100);

      emitEvent(this, 'kemet-modal-opened', this);
    }

    if (prevProps.get('opened') && this.opened === false) {
      emitEvent(this, 'kemet-modal-closed', this);
    }

    this.isMobile();
  }

  render() {
    return html`
      <div class="content" part="content">
        <slot></slot>
      </div>
      <div class="overlay" part="overlay"></div>
    `;
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.mobile = mediaQuery.matches;
  }

  handleFocusableDown(event) {
    const firstFocusable = this.focusableElements[0];
    const lastFocusable = this.focusableElements[this.focusableElements.length - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-modal': KemetModal
  }
}

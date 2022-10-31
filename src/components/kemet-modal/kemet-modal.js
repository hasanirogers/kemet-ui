import { html, LitElement } from 'lit';
import { stylesBase, stylesEffects } from './styles.js';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-modal
 * @summary A dialog that has many built in effects and flexible styles.
 *
 * @csspart content - The main contents of the modal.
 * @csspart overlay - The surrounding scrim of the modal.
 *
 * @cssproperty --kemet-modal-content-min-width - The minimum width of the content. Default: 0.
 * @cssproperty --kemet-modal-content-max-width - The maximum width of the content. Default: none.
 * @cssproperty --kemet-modal-content-background-color - The background color of the content. Default: --kemet-color-white.
 * @cssproperty --kemet-modal-content-mobile-min-width - The min with of the mobile content. Default: 100%.
 * @cssproperty --kemet-modal-content-mobile-min-height - The min height of the mobile content. Default: 80vh.
 *
 * @event kemet-modal-opened - Fires when the modal opens
 * @event kemet-modal-closed - Fires when the modal closes
 *
 */

export default class KemetModal extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesEffects,
    ];
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
      closeOnClick: {
        type: Boolean,
        attribute: 'close-on-click',
      },
      breakpoint: {
        type: String,
      },
      mobile: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.opened = false;
    this.closeOnClick = false;
    this.breakpoint = '600px';

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
      if (this.opened && this.closeOnClick && event.target.tagName.toLowerCase() === 'kemet-modal') {
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-modal') || customElements.define('kemet-modal', KemetModal);

import { html, LitElement } from 'lit';
import { stylesBase, stylesEffects } from './kemet-modal.styles.js';

export class KemetModal extends LitElement {
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
        this.focusableElements[0].focus();
      }, 100);

      /**
       * Fires when the modal opens
       */
      this.dispatchEvent(
        new CustomEvent('kemet-modal-opened', {
          bubbles: true,
          composed: true,
          detail: this,
        }),
      );
    }

    if (prevProps.get('opened') && this.opened === false) {
      /**
       * Fires when the modal closes
       */
      this.dispatchEvent(
        new CustomEvent('kemet-modal-closed', {
          bubbles: true,
          composed: true,
          detail: this,
        }),
      );
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

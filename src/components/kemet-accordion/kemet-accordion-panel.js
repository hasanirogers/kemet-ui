import { html, css, LitElement } from 'lit';
import '../kemet-icon/kemet-icon.js';

export default class KemetAccordionPanel extends LitElement {
  static get styles() {
    return [
      css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: block;
          padding: 1.5rem 1rem;
          border-bottom: 1px solid var(--kemet-color-primary);
        }

        .trigger {
          cursor: pointer;
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr auto;
          width: 100%;
          text-align: left;
          padding: 0;
          border: none;
          background: none;
        }

        .body {
          overflow: hidden;
          transition: all var(--kemet-accordion-panel-transition-speed, 300ms) ease;
        }

        ::slotted([slot='body']) {
          padding: 1rem 0;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Determines the opened state of the panel
       */
      opened: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Sets the max height of the panel's body
       */
      maxHeight: {
        type: String,
        attribute: 'max-height',
      },
      /**
       * Uniquely identifies a panel for accessibility purposes
       */
      slug: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.opened = undefined;
    this.maxHeight = '0px';
    this.slug = 'panel';
  }

  firstUpdated() {
    this.focusableSelector = 'body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
    this.bodyElement = this.querySelector('[slot="body"]');
    this.bodyElementFirst = this.bodyElement.querySelector(':first-child');
    this.bodyElementLast = this.bodyElement.querySelector(':last-child');

    if (this.bodyElementFirst) this.bodyElementFirst.style.marginTop = 0;
    if (this.bodyELementLast) this.bodyElementLast.style.marginBottom = 0;
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      this.maxHeight = `${this.bodyElement.offsetHeight}px`;

      /**
       * Fires when a panel is opened
       */
      this.dispatchEvent(
        new CustomEvent('kemet-accordion-panel-opened', {
          bubbles: true,
          composed: true,
          detail: this,
        }),
      );
    }

    if (prevProps.get('opened') && this.opened === false) {
      this.maxHeight = '0px';

      /**
       * Fires when a panel is closed
       */
      this.dispatchEvent(
        new CustomEvent('kemet-accordion-panel-closed', {
          bubbles: true,
          composed: true,
          detail: this,
        }),
      );
    }

    this.a11y();
    this.focusableBodyElements();
  }

  render() {
    return html`
      <button
        class="trigger"
        part="trigger"
        @click=${() => this.toggle()}
        @keydown=${event => this.handleKeyDown(event)}
      >
        <slot name="trigger"></slot>
        <slot name="icon"></slot>
      </button>
      <section class="body" part="body" style="max-height:${this.maxHeight};">
        <slot name="body"></slot>
      </section>
    `;
  }

  toggle() {
    this.opened = !this.opened;
  }

  focusableBodyElements() {
    const focusableElements = this.bodyElement.querySelectorAll(this.focusableSelector);

    if (this.opened) {
      focusableElements.forEach((element) => {
        element.removeAttribute('tabindex');
      });
    } else {
      focusableElements.forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    }
  }

  a11y() {
    const trigger = this.shadowRoot.querySelector('.trigger');
    const body = this.shadowRoot.querySelector('.body');

    trigger.setAttribute('id', `${this.slug}-button`);
    trigger.setAttribute('aria-controls', `${this.slug}-content`);

    body.setAttribute('id', `${this.slug}-content`);
    body.setAttribute('aria-labelledby', `${this.slug}-button`);
    body.setAttribute('aria-hidden', `${!this.opened}`);
  }

  handleKeyDown(event) {
    if (event.key === 'Space' || event.key === 'Enter') {
      this.toggle();
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-accordion-panel') || customElements.define('kemet-accordion-panel', KemetAccordionPanel);

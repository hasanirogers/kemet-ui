import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';
import '../kemet-icon/kemet-icon.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-accordion-panel
 * @summary A blade for an accordion.
 *
 * @prop {boolean} opened - Determines the opened state of the panel
 * @prop {string} maxHeight - Sets the max height of the panel's body
 * @prop {string} slug - Uniquely identifies a panel for accessibility purposes
 *
 * @slot trigger - The trigger button that opens and closes the panel.
 * @slot body - The body content of the panel.
 * @slot icon - The icon for the panel.
 *
 * @cssproperty --kemet-accordion-panel-transition-speed - The speed of the opening and closing effect. Default: 0.3s.
 *
 * @csspart trigger - Contains the trigger for the panel.
 * @csspart body - Contains the body for the panel.
 *
 * @event kemet-accordion-panel-opened - Fires when a panel is opened
 * @event kemet-accordion-panel-closed - Fires when a panel is closed
 *
 */

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
      opened: {
        type: Boolean,
        reflect: true,
      },
      maxHeight: {
        type: String,
        attribute: 'max-height',
      },
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
    /** @internal */
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
      emitEvent(this, 'kemet-accordion-panel-opened', this);
    }

    if (prevProps.get('opened') && this.opened === false) {
      this.maxHeight = '0px';
      emitEvent(this, 'kemet-accordion-panel-closed', this);
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

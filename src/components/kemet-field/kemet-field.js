import { html, css, LitElement } from 'lit';

export default class KemetField extends LitElement {
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
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          position: relative;
          display: block;
        }

        label span {
          color: inherit;
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 0.8rem;
        }

        :host([status='error']) kemet-icon {
          color: var(--kemet-color-error);
        }

        :host([status='success']) kemet-icon {
          color: var(--kemet-color-success);
        }

        :host([status='warning']) kemet-icon {
          color: var(--kemet-color-warning);
        }

        .message {
          font-size: 0.9rem;
          line-height: 1;
          display: block;
          margin-top: 0.8rem;
        }

        :host([status='error']) .message {
          color: var(--kemet-color-error);
        }

        :host([status='success']) .message {
          color: var(--kemet-color-success);
        }

        :host([status='warning']) .message {
          color: var(--kemet-color-warning);
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Uniquely identifies the control. Use the same slug for slotted sub components.
       */
      slug: {
        type: String,
      },
      /**
       * The label text
       */
      label: {
        type: String,
      },
      /**
       * The validation message for error or success
       */
      message: {
        type: String,
      },
      /**
       * Determines if the containing input is focused
       */
      focused: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The validation status of standard, error, or success
       */
      status: {
        type: String,
        reflect: true,
      },
      /**
       * Is true when the containing input has a value
       */
      filled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The length of the containing input
       */
      length: {
        type: Number,
      },
      /**
       * Determines the disabled state of the control
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The icon while in an error or warning state
       */
      errorIcon: {
        type: String,
        attribute: 'error-icon',
      },
      /**
       * The icon while in an success state
       */
      successIcon: {
        type: String,
        attribute: 'success-icon',
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.status = 'standard';
    this.errorIcon = 'exclamation-triangle-fill';
    this.successIcon = 'check-lg';

    // listeners
    this.addEventListener('kemet-input-focused', event => this.handleFocused(event));
    this.addEventListener('kemet-input-status', event => this.handleStatus(event));
    this.addEventListener('kemet-input-input', event => this.handleInput(event));
    this.addEventListener('kemet-count-status', event => this.handleStatus(event));
    this.addEventListener('kemet-combo-selection', event => this.handleSelection(event));
  }

  firstUpdated() {
    this.slotInput = this.querySelector('[slot="input"]');
    this.slotCount = this.querySelector('[slot="count"]');
    this.slotCombo = this.querySelector('[slot="combo"]');

    if (this.slotInput.value) {
      this.length = this.slotInput.value.length;
    } else {
      this.length = 0;
    }
  }

  render() {
    return html`
      <label for="${this.slug}" id="${this.slug}-label" part="label">
        <span>${this.label}${this.makeStatusIcon()}</span>
        <slot name="input"></slot>
      </label>
      ${this.makeStatusMessage()}
    `;
  }

  makeStatusIcon() {
    if (this.status === 'error' || this.status === 'warning') {
      return html`<kemet-icon icon="${this.errorIcon}" size="16"></kemet-icon>`;
    }

    if (this.status === 'success') {
      return html`<kemet-icon icon="${this.successIcon}" size="16"></kemet-icon>`;
    }

    return null;
  }

  makeStatusMessage() {
    if (this.status !== 'standard') {
      return html`<span class="message" part="message">${this.message}</span>`;
    }

    return null;
  }

  handleFocused(event) {
    this.focused = event.detail;

    if (!this.focused && this.slotCombo && this.slotCombo.options.length < 1) {
      this.slotCombo.show = false;
    }
  }

  handleStatus(event) {
    this.status = event.detail.status;
  }

  handleInput(event) {
    /**
     * Fires when input fires on the input slot
     */
    this.dispatchEvent(
      new CustomEvent('kemet-field-input', {
        bubbles: false,
        detail: event.detail.length,
      }),
    );

    if (event.detail === '') {
      this.filled = false;
    } else {
      this.filled = true;
    }
  }

  handleSelection(event) {
    this.slotInput.setAttribute('aria-activedescendant', event.detail);
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-field') || customElements.define('kemet-field', KemetField);

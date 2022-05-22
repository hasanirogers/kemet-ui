import { html, css, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { FormSubmitController } from '../../utilities/controllers/forms.js';

export default class KemetTextarea extends LitElement {
  static get styles() {
    return [
      css`
        textarea {
          display: block;
          width: 100%;
          padding: var(--kemet-textarea-padding, 1rem);
          border: var(--kemet-textarea-border, 1px solid var(--kemet-color-primary));
          appearance: none;
          box-sizing: border-box;
        }

        :host([status='error']) textarea {
          border: var(--kemet-textarea-border-color-error, 1px solid var(--kemet-color-error));
        }

        :host([status='success']) textarea {
          border: var(--kemet-textarea-border-color-success, 1px solid var(--kemet-color-success));
        }

        :host([status='warning']) textarea {
          border: var(--kemet-textarea-border-color-warning, 1px solid var(--kemet-color-warning));
        }

        :host([disabled]) textarea {
          opacity: 0.5;
        }

        :host([icon-left]) textarea {
          padding-left: var(--kemet-textarea-icon-left-padding, 3rem);
        }

        :host([icon-right]) textarea {
          padding-right: var(--kemet-textarea-icon-right-padding, 3rem);
        }

        :host([rounded]) textarea {
          border-radius: var(--kemet-textarea-border-radius-rounded, var(--kemet-border-radius));
        }

        :host([filled]) textarea {
          border: var(--kemet-textarea-border-filled, none);
          color: var(--kemet-textarea-color-filled, var(--kemet-color-white));
          background-color: var(--kemet-textarea-background-color-filled, var(--kemet-color-primary));
        }

        :host([filled]) textarea::placeholder {
          color: var(--kemet-textarea-color-filled, var(--kemet-color-white));
        }

        :host([status='error'][filled]) textarea {
          background-color: var(--kemet-textarea-background-color-error, var(--kemet-color-error));
        }

        :host([status='success'][filled]) textarea {
          background-color: var(--kemet-textarea-background-color-success, var(--kemet-color-success));
        }

        :host([status='warning'][filled]) textarea {
          background-color: var(--kemet-textarea-background-color-warning, var(--kemet-color-warning));
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Used for the id of the input
       */
      slug: {
        type: String,
      },
      /**
       * The name of the input
       */
      name: {
        type: String,
      },
      /**
       * The placeholder attribute
       */
      placeholder: {
        type: String,
      },
      /**
       * The minlength attribute
       */
      minlength: {
        type: String,
      },
      /**
       * The maxlength attribute
       */
      maxlength: {
        type: String,
      },
      /**
       * The input mode attribute
       */
      inputmode: {
        type: String,
      },
      /**
       * The autofocus attribute
       */
      autofocus: {
        type: Boolean,
      },
      /**
       * The disable attribute
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The readonly attribute
       */
      readonly: {
        type: Boolean,
      },
      /**
       * The required attribute
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The input's value
       */
      value: {
        type: String,
      },
      /**
       * States whether or not the input is invalid
       */
      invalid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The status of the input
       */
      status: {
        type: String,
        reflect: true,
      },
      /**
       * The rows of the textarea
       */
      rows: {
        type: Number,
      },
      /**
       * Activates validation on blur
       */
      validateOnBlur: {
        type: Boolean,
        attribute: 'validate-on-blur',
      },
      /**
       * Displays a filled textarea
       */
      filled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Displays a rounded corners
       */
      rounded: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.slug = 'textarea';
    this.name = 'textarea';
    this.value = '';
    this.status = 'standard';
    this.rows = 4;

    /**
     * Used only for form reactive controller
     */
    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    // elements
    this.form = this.closest('form');
    this.control = this.closest('kemet-control');
    this.textarea = this.shadowRoot.querySelector('textarea');
  }

  render() {
    return html`
      <textarea
        part="textarea"
        id=${this.slug}
        name=${this.name}
        .value=${live(this.value)}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        placeholder=${ifDefined(this.placeholder)}
        rows=${ifDefined(this.rows)}
        minlength=${ifDefined(this.minlength)}
        maxlength=${ifDefined(this.maxlength)}
        autocorrect=${ifDefined(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${ifDefined(this.spellcheck)}
        inputmode=${ifDefined(this.inputmode)}
        @change=${this.handleChange}
        @input=${this.handleInput}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @invalid=${this.handleInvalid}
      ></textarea>
    `;
  }

  /**
   * Handles when the textarea receives focus
   * @private
   */
  handleFocus() {
    this.hasFocus = true;

    /**
     * Fires when the input receives and loses focus
     */
    this.dispatchEvent(
      new CustomEvent('kemet-input-focused', {
        bubbles: true,
        composed: true,
        detail: true,
      }),
    );
  }

  /**
   * Handles when the textarea loses focus
   * @private
   */
  handleBlur() {
    this.hasFocus = false;

    /**
     * Fires when the input receives and loses focus
     */
    this.dispatchEvent(
      new CustomEvent('kemet-input-focused', {
        bubbles: true,
        composed: true,
        detail: false,
      }),
    );

    if (this.validateOnBlur && this.form && !this.form.noValidate) {
      this.textarea.checkValidity();
      this.validity = this.textarea.validity;
    }
  }

  /**
   * Handles when the textarea changes value
   * @private
   */
  handleChange() {
    this.value = this.textarea.value;

    if (this.textarea.checkValidity() && this.checkLimitValidity()) {
      this.invalid = false;
      this.status = 'standard';
      this.validity = this.textarea.validity;

      /**
       * Fires when there's a change in status
       */
      this.dispatchEvent(
        new CustomEvent('kemet-input-status', {
          bubbles: true,
          composed: true,
          detail: {
            status: 'standard',
            validity: this.textarea.validity,
            element: this,
          },
        }),
      );
    }
  }

  /**
   * Handles when the textarea receives input
   * @private
   */
  handleInput() {
    this.value = this.textarea.value;

    /**
     * Fires when the input receives input
     */
    this.dispatchEvent(
      new CustomEvent('kemet-input-input', {
        bubbles: true,
        composed: true,
        detail: this.value,
      }),
    );
  }

  /**
   * Handles when the textarea has an error
   * @private
   */
  handleInvalid() {
    this.validity = this.textarea.validity;

    if (this.validateOnBlur) {
      this.invalid = true;
      this.status = 'error';

      /**
       * Fires when there's a change in status
       */
      this.dispatchEvent(
        new CustomEvent('kemet-input-status', {
          bubbles: true,
          composed: true,
          detail: {
            status: 'error',
            validity: this.textarea.validity,
            element: this,
          },
        }),
      );
    }
  }

  /**
   * Checks the validity of the character limit for the count component
   * @private
   * @returns {boolean}
   */
  checkLimitValidity() {
    if (this.control) {
      const count = this.control.querySelector('kemet-count');
      if (count) {
        return this.value.length < count.limit;
      }
    }

    return true;
  }

  /**
   * Checks the validity of the standard input
   * @public
   * @returns {boolean}
   */
  checkValidity() {
    return this.textarea.checkValidity();
  }

  /**
   * Focuses the standard input
   * @public
   */
  focus() {
    return this.textarea.focus();
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-textarea') || customElements.define('kemet-textarea', KemetTextarea);

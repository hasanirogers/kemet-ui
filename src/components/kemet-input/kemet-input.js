import { html, css, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { FormSubmitController } from '../../utilities/controllers/forms.js';

export default class KemetInput extends LitElement {
  static get styles() {
    return [
      css`
        input {
          display: block;
          width: 100%;
          height: var(--kemet-input-height, 50px);
          padding: var(--kemet-input-padding, 0.5rem 1rem);
          border: var(--kemet-input-border, 1px solid var(--kemet-color-primary));
          appearance: none;
          box-sizing: border-box;
        }

        input[type='color'] {
          min-width: 10rem;
        }

        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          display: none;
        }

        :host([status='error']) input {
          border: var(--kemet-input-border-color-error, 1px solid var(--kemet-color-error));
        }

        :host([status='success']) input {
          border: var(--kemet-input-border-color-success, 1px solid var(--kemet-color-success));
        }

        :host([status='warning']) input {
          border: var(--kemet-input-border-color-warning, 1px solid var(--kemet-color-warning));
        }

        :host([disabled]) input {
          opacity: 0.5;
        }

        :host([icon-left]) input {
          padding-left: var(--kemet-input-icon-left-padding, 3rem);
        }

        :host([icon-right]) input {
          padding-right: var(--kemet-input-icon-right-padding, 3rem);
        }

        :host([rounded]) input {
          border-radius: var(--kemet-input-border-radius-rounded, var(--kemet-border-radius));
        }

        :host([filled]) input {
          border: var(--kemet-input-border-filled, none);
          color: var(--kemet-input-color-filled, var(--kemet-color-white));
          background-color: var(--kemet-input-background-color-filled, var(--kemet-color-primary));
        }

        :host([filled]) kemet-icon,
        :host([filled]) input::placeholder {
          color: var(--kemet-input-color-filled, var(--kemet-color-white));
        }

        :host([status='error'][filled]) input {
          background-color: var(--kemet-input-background-color-error, var(--kemet-color-error));
        }

        :host([status='success'][filled]) input {
          background-color: var(--kemet-input-background-color-success, var(--kemet-color-success));
        }

        :host([status='warning'][filled]) input {
          background-color: var(--kemet-input-background-color-warning, var(--kemet-color-warning));
        }

        kemet-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        kemet-icon.left {
          left: 3rem;
        }

        kemet-icon.right {
          right: 3rem;
        }

        kemet-icon.eye,
        kemet-icon.search {
          cursor: pointer;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Used for the id of the input. Should match the slug used in a control if applicable.
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
       * The min attribute
       */
      min: {
        type: String,
      },
      /**
       * The max attribute
       */
      max: {
        type: String,
      },
      /**
       * The step attribute
       */
      step: {
        type: String,
      },
      /**
       * The autocomplete attribute
       */
      autocomplete: {
        type: String,
      },
      /**
       * The pattern attribute
       */
      pattern: {
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
       * The type of input
       */
      type: {
        type: String,
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
       * Activates validation on blur
       */
      validateOnBlur: {
        type: Boolean,
        attribute: 'validate-on-blur',
      },
      /**
       * Aria Autocomplete
       */
      ariaAutoComplete: {
        type: String,
        attribute: 'aria-autocomplete',
      },
      /**
       * Aria Controls
       */
      ariaControls: {
        type: String,
        attribute: 'aria-controls',
      },
      /**
       * Aria Active Descendant
       */
      ariaActiveDescendant: {
        type: String,
        attribute: 'aria-activedescendant',
      },
      /**
       * Displays rounded corners
       */
      rounded: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Displays a filled input box
       */
      filled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Custom Icon to the right of the input
       */
      iconRight: {
        type: String,
        reflect: true,
        attribute: 'icon-right',
      },
      /**
       * Custom Icon to the left of the input
       */
      iconLeft: {
        type: String,
        reflect: true,
        attribute: 'icon-left',
      },
      /**
       * Size of the icons
       */
      iconSize: {
        type: Number,
      },
      /**
       * The HTML5 validity object.
       */
      validity: {
        type: Object,
      },
      /**
       * Manages password visibility
       */
      isPasswordVisible: {
        type: Boolean,
      },
      /**
       * Input Type of keypress handled through handleInput(e)
       */
      inputType: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.name = 'input';
    this.type = 'text';
    this.value = '';
    this.status = 'standard';
    this.iconSize = 16;
    this.validateOnBlur = false;
    this.isPasswordVisible = false;

    /**
     * Used only for form reactive controller
     */
    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    // elements
    this.input = this.shadowRoot.querySelector('input');
    this.control = this.closest('kemet-control');
    this.form = this.closest('form');
    this.slug = this.control ? this.control.slug : 'input';
  }

  render() {
    return html`
      <div>
        ${this.makeIconLeft()}
        <input
          part="input"
          id=${this.slug}
          name=${this.name}
          placeholder=${ifDefined(this.placeholder)}
          minlength=${ifDefined(this.minlength)}
          maxlength=${ifDefined(this.maxlength)}
          min=${ifDefined(this.min)}
          max=${ifDefined(this.max)}
          step=${ifDefined(this.step)}
          autocomplete=${ifDefined(this.autocomplete)}
          aria-autocomplete=${ifDefined(this.ariaAutoComplete)}
          aria-controls=${ifDefined(this.ariaControls)}
          aria-activedescendant=${ifDefined(this.ariaActiveDescendant)}
          pattern=${ifDefined(this.pattern)}
          inputmode=${ifDefined(this.inputmode)}
          aria-invalid=${this.invalid ? 'true' : 'false'}
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .type="${this.type === 'password' && this.isPasswordVisible ? 'text' : this.type}"
          .value=${live(this.value)}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
        ${this.makeIconRight()} ${this.makeIconClear()} ${this.makeVisibilityToggle()}
      </div>
    `;
  }

  /**
   * Makes the right icon
   * @private
   * @returns {templateResult} A right icon
   */
  makeIconRight() {
    if (this.iconRight) {
      return html`
        <kemet-icon class="right" icon="${this.iconRight}" size="${this.iconSize ? this.iconSize : 16}"></kemet-icon>
      `;
    }

    return null;
  }

  /**
   * Makes the left icon
   * @private
   * @returns {templateResult} A left icon
   */
  makeIconLeft() {
    if (this.iconLeft) {
      return html`
        <kemet-icon class="left" icon="${this.iconLeft}" size="${this.iconSize ? this.iconSize : 16}"></kemet-icon>
      `;
    }

    return null;
  }

  /**
   * Makes a clear icon for search.
   * @private
   * @returns {templateResult} A search icon
   */
  makeIconClear() {
    if (this.type === 'search' && this.value !== '') {
      return html`
        <kemet-icon class="search right" icon="x-lg" size="${this.iconSize}" @click=${() => this.handleClear()}></kemet-icon>
      `;
    }

    return null;
  }

  /**
   * Makes a password visibility toggle button
   * @returns {templateResult} A mask or unmask icon
   */
  makeVisibilityToggle() {
    if (this.type === 'password') {
      return html`<kemet-icon
        class="eye right"
        icon="${this.setPasswordIcon()}"
        @click=${() => this.togglePasswordVisibility()}
      ></kemet-icon>`;
    }

    return null;
  }

  setPasswordIcon() {
    if (this.isPasswordVisible) {
      return 'eye';
    }

    return 'eye-slash';
  }

  /**
   * Handles when the input receives focus
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
   * Handles when the input loses focus
   * @private
   */
  handleBlur() {
    if (this.validateOnBlur && this.form && !this.form.noValidate) {
      this.input.checkValidity();
      this.validity = this.input.validity;
    }

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
  }

  /**
   * Handles when the input changes value
   * @private
   */
  handleChange() {
    this.value = this.input.value;

    if (this.input.checkValidity() && this.status !== 'success') {
      this.invalid = false;
      this.status = 'standard';
      this.validity = this.input.validity;

      /**
       * Fires when there's a change in status.
       * This event includes an object that reports:
       * 1) the status. 2) HTML5 validity object. 3) the component element.
       * Use the validity object to support custom validation messages.
       */
      this.dispatchEvent(
        new CustomEvent('kemet-input-status', {
          bubbles: true,
          composed: true,
          detail: {
            status: 'standard',
            validity: this.input.validity,
            element: this,
          },
        }),
      );
    }
  }

  /**
   * Handles when the input receives input
   * @private
   */
  handleInput(e) {
    this.inputType = e.inputType;
    this.value = this.input.value;

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
   * Handles when the input has an error
   * @private
   */
  handleInvalid() {
    this.validity = this.input.validity;

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
            validity: this.input.validity,
            element: this,
          },
        }),
      );
    }
  }

  handleStatus(event) {
    this.status = event.detail.status;
  }

  /**
   * Toggles password visibility
   * @private
   */
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  /**
   * Handles the clear button for search
   * @private
   */
  handleClear() {
    this.value = '';

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
   * Checks the validity of the character limit for the count component
   * @private
   * @returns {boolean}
   */
  // checkLimitValidity() {
  //   if (this.control) {
  //     const count = this.control.querySelector('kemet-count');
  //     if (count) {
  //       return this.value.length < count.limit;
  //     }
  //   }

  //   return true;
  // }

  /**
   * Checks the validity of the password for the password component
   * @private
   * @returns {boolean}
   */
  // checkPasswordValidity() {
  //   if (this.control) {
  //     const password = this.control.querySelector('kemet-password');
  //     if (password) {
  //       return password.status !== 'error';
  //     }
  //   }

  //   return true;
  // }

  /**
   * Checks the validity of the standard input
   * @public
   * @returns {boolean}
   */
  checkValidity() {
    return this.input.checkValidity();
  }

  /**
   * Focuses the standard input
   * @public
   */
  focus() {
    this.input.focus();
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-input') || customElements.define('kemet-input', KemetInput);

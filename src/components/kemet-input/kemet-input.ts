import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { FormSubmitController } from '../../utilities/controllers/forms';
import { emitEvent } from '../../utilities/misc/events';
import { KemetFieldInterface } from '../kemet-field/types';
import { stylesBase } from './styles';
import { TypeAriaAutoComplete, TypeAutoComplete, TypeStatus } from './types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-input
 * @summary An enhanced input element.
 *
 * @prop {string} slug - Used for the id of the input. Should match the slug used in a control if applicable.
 * @prop {string} name - The name of the input
 * @prop {string} placeholder - The placeholder attribute
 * @prop {string} minlength - The minlength attribute
 * @prop {string} maxlength - The maxlength attribute
 * @prop {string} min - The min attribute
 * @prop {string} max - The max attribute
 * @prop {string} step - The step attribute
 * @prop {string} autocomplete - The autocomplete attribute
 * @prop {string} pattern - The pattern attribute
 * @prop {string} inputmode - The input mode attribute
 * @prop {boolean} autofocus - The autofocus attribute
 * @prop {boolean} disabled - The disable attribute
 * @prop {boolean} readonly - The readonly attribute
 * @prop {boolean} required - The required attribute
 * @prop {string} type - The type of input
 * @prop {string} value - The input's value
 * @prop {boolean} invalid - States whether or not the input is invalid
 * @prop {string} status - The status of the input
 * @prop {boolean} validateOnBlur - Activates validation on blur
 * @prop {string} ariaAutoComplete - Aria Autocomplete
 * @prop {string} ariaControls - Aria Controls
 * @prop {string} ariaActiveDescendant - Aria Active Descendant
 * @prop {boolean} rounded - Displays rounded corners
 * @prop {boolean} filled - Displays a filled input box
 * @prop {string} iconRight - Custom Icon to the right of the input
 * @prop {string} iconLeft - Custom Icon to the left of the input
 * @prop {number} iconSize - Size of the icons
 * @prop {object} validity - The HTML5 validity object.
 * @prop {boolean} isPasswordVisible - Manages password visibility
 * @prop {string} inputType - Input Type of keypress handled through handleInput(e)
 * @prop {boolean} focused - Determines if the input is focused
 *
 * @csspart input
 *
 * @cssproperty --kemet-input-height - The height of the input. Default: 50px.
 * @cssproperty -kemet-input-padding - The padding on the input. Default: 0.5rem 1rem.
 * @cssproperty -kemet-input-border - The border of the input. Default: 1px solid var(--kemet-color-primary).
 * @cssproperty -kemet-input-border-color-error -  The border of the error state. Default: 1px solid var(--kemet-color-error).
 * @cssproperty -kemet-input-border-color-success - The border of the success state. Default: 1px solid var(--kemet-color-success).
 * @cssproperty -kemet-input-border-color-warning - The border of the warning state. Default: 1px solid var(--kemet-color-warning) |
 * @cssproperty -kemet-input-icon-left-padding - The icon-left padding. Default: 3rem.
 * @cssproperty -kemet-input-icon-right-padding - The icon-right padding. Default: 3rem.
 * @cssproperty -kemet-input-border-radius-rounded - The border radius on rounded. Default: var(--kemet-border-radius).
 * @cssproperty -kemet-input-border-filled - The border on filled. Default: none.
 * @cssproperty -kemet-input-color-filled - The color on filled. Default: var(--kemet-color-white).
 * @cssproperty -kemet-input-background-color-filled - The background-color on filled. Default: var(--kemet-color-primary).
 * @cssproperty -kemet-input-background-color-error - The error state background color. Default: var(--kemet-color-error).
 * @cssproperty -kemet-input-background-color-success - The success state background color. Default: var(--kemet-color-success).
 * @cssproperty -kemet-input-background-color-warning - The warning state background color. Default: var(--kemet-color-warning).
 *
 * @event kemet-input-focused - Fires when the input receives and loses focus
 * @event kemet-input-status Fires when there's a change in status. This event includes an object that reports: 1) the status. 2) HTML5 validity object. 3) the component element.
 * Use the validity object to support custom validation messages.
 * @event kemet-input-input - Fires when the input receives input
 *
 */

@customElement('kemet-input')
export default class KemetInput extends LitElement {
  /** @internal */
  formSubmitController: FormSubmitController;

  static styles = [stylesBase];

  @property({ type: String })
  slug: string;

  @property({ type: String })
  name: string = 'input';

  @property({ type: String })
  placeholder: string;

  @property({ type: Number })
  minlength: number;

  @property({ type: Number })
  maxlength: number;

  @property({ type: String })
  min: string;

  @property({ type: String })
  max: string;

  @property({ type: Number })
  step: number;

  @property({ type: String })
  autocomplete: TypeAutoComplete;

  @property({ type: String })
  pattern: string;

  @property({ type: String })
  inputmode: string;

  @property({ type: Boolean })
  autofocus: boolean;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ type: Boolean })
  readonly: boolean;

  @property({ type: Boolean, reflect: true })
  required: boolean;

  @property({ type: String })
  type: string = 'text';

  @property({ type: String, reflect: true })
  value: string = '';

  @property({ type: Boolean, reflect: true })
  invalid: boolean;

  @property({ type: String, reflect: true })
  status: TypeStatus = 'standard';

  @property({ type: Boolean, attribute: 'validate-on-blur' })
  validateOnBlur: boolean = false;

  @property({ type: String, attribute: 'aria-autocomplete' })
  ariaAutoComplete: TypeAriaAutoComplete;

  @property({ type: String, attribute: 'aria-controls' })
  ariaControls: string;

  @property({ type: String, attribute: 'aria-activedescendant' })
  ariaActiveDescendant: string;

  @property({ type: Boolean, reflect: true })
  rounded: boolean;

  @property({ type: Boolean, reflect: true })
  filled: boolean;

  @property({ type: String, reflect: true, attribute: 'icon-right' })
  iconRight: string;

  @property({ type: String, reflect: true, attribute: 'icon-left' })
  iconLeft: string;

  @property({ type: Number })
  iconSize: number = 20;

  @property({ type: Object })
  validity: object;

  @property({ type: Boolean })
  isPasswordVisible: boolean = false;;

  @property({ type: String })
  inputType: string;

  @property({ type: Boolean, reflect: true })
  focused: boolean = false;

  @state()
  field: KemetFieldInterface;

  @state()
  form: HTMLFormElement;

  @state()
  input: HTMLInputElement;

  constructor() {
    super();

    /** @internal */
    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    // elements
    this.input = this.shadowRoot.querySelector('input');
    this.field = this.closest('kemet-field');
    this.form = this.closest('form');
    this.slug = this.field ? this.field.slug : 'input';

    if (this.field) {
      this.field.addEventListener('fmc-password-status', event => this.handleStatus(event));
    }
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
        <kemet-icon class="right" icon="${this.iconRight}" size="${this.iconSize ? this.iconSize : 20}"></kemet-icon>
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
    this.focused = true;
    emitEvent(this, 'kemet-input-focused', true);
  }

  /**
   * Handles when the input loses focus
   * @private
   */
  handleBlur() {
    if (this.validateOnBlur && this.form && !this.form.noValidate) {
      this.input?.checkValidity();
      this.validity = this.input?.validity;
    }

    this.focused = false;
    emitEvent(this, 'kemet-input-focused', false);
  }

  /**
   * Handles when the input changes value
   * @private
   */
  handleChange() {
    this.value = this.input.value;

    if (this.input.checkValidity() && this.checkLimitValidity() && this.status !== 'success') {
      this.invalid = false;
      this.status = 'standard';
      this.validity = this.input.validity;

      emitEvent(this, 'kemet-input-status', {
        status: 'standard',
        validity: this.input.validity,
        element: this,
      });
    }
  }

  /**
   * Handles when the input receives input
   * @private
   */
  handleInput() {
    this.value = this.input.value;
    emitEvent(this, 'kemet-input-input', this.value);
  }

  /**
   * Handles when the input has an error
   * @private
   */
  handleInvalid() {
    this.validity = this.input?.validity;

    if (this.validateOnBlur) {
      this.invalid = true;
      this.status = 'error';

      emitEvent(this, 'kemet-input-status', {
        status: 'error',
        validity: this.input?.validity,
        element: this,
      });
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
    emitEvent(this, 'kemet-input-input', this.value);
  }

  /**
   * Checks the validity of the character limit for the count component
   * @private
   * @returns {boolean}
   */
  checkLimitValidity() {
    if (this.field) {
      const count = this.field.querySelector('kemet-count');
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
    return this.input?.checkValidity();
  }

  /**
   * Focuses the standard input
   * @public
   */
  focus() {
    this.input?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-input': KemetInput
  }
}

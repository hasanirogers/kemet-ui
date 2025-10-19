import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { FormSubmitController } from '../utilities/controllers/forms';
import { emitEvent } from '../utilities/misc/events';
import KemetField from '../elements/field';
import KemetCount from './count';
import { stylesBase } from '../styles/elements/input';
import { EnumStatuses, TypeStatus } from '../utilities/misc/constants';

export const ariaAutoComplete = ['inline', 'list', 'both', 'none'] as const;
export enum EnumAriaAutoComplete {
  Inline = 'inline',
  List = 'list',
  Both = 'both',
  None = 'none'
}
export type TypeAriaAutoComplete = EnumAriaAutoComplete;

export const autoComplete = ['on', 'off', 'additional-name', 'address-level1', 'address-level2', 'address-level3', 'address-level4', 'address-line1', 'address-line2', 'address-line3', 'bday', 'bday-year', 'bday-day', 'bday-month', 'billing', 'cc-additional-name'] as const;
export enum EnumAutoComplete {
  On = 'on',
  Off = 'off',
  AdditionalName = 'additional-name',
  AddressLevel1 = 'address-level1',
  AddressLevel2 = 'address-level2',
  AddressLevel3 = 'address-level3',
  AddressLevel4 = 'address-level4',
  AddressLine1 = 'address-line1',
  AddressLine2 = 'address-line2',
  AddressLine3 = 'address-line3',
  Bday = 'bday',
  BdayYear = 'bday-year',
  BdayDay = 'bday-day',
  BdayMonth = 'bday-month',
  Billing = 'billing',
  CcAdditionalName = 'cc-additional-name'
}
export type TypeAutoComplete = EnumAutoComplete;



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
 * @prop {TypeAutoComplete} autocomplete - The autocomplete attribute
 * @prop {string} pattern - The pattern attribute
 * @prop {string} inputmode - The input mode attribute
 * @prop {boolean} autofocus - The autofocus attribute
 * @prop {boolean} disabled - The disable attribute
 * @prop {boolean} readonly - The readonly attribute
 * @prop {boolean} required - The required attribute
 * @prop {string} type - The type of input
 * @prop {string} value - The input's value
 * @prop {boolean} invalid - States whether the input is invalid
 * @prop {string} status - The status of the input
 * @prop {boolean} validateOnBlur - Activates validation on blur
 * @prop {TypeAriaAutoComplete} ariaAutoComplete - Aria Autocomplete
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
 * @cssproperty --kemet-input-height - The height of the input.
 * @cssproperty --kemet-input-padding - The padding on the input.
 * @cssproperty --kemet-input-border - The border of the input.
 * @cssproperty --kemet-input-border-color-error -  The border of the error state.
 * @cssproperty --kemet-input-border-color-success - The border of the success state.
 * @cssproperty --kemet-input-border-color-warning - The border of the warning state.
 * @cssproperty --kemet-input-icon-left-padding - The icon-left padding.
 * @cssproperty --kemet-input-icon-right-padding - The icon-right padding.
 * @cssproperty --kemet-input-border-radius-rounded - The border radius on rounded.
 * @cssproperty --kemet-input-border-filled - The border on filled.
 * @cssproperty --kemet-input-color-filled - The color on filled.
 * @cssproperty --kemet-input-background-color-filled - The background-color on filled.
 * @cssproperty --kemet-input-background-color-error - The error state background color.
 * @cssproperty --kemet-input-background-color-success - The success state background color.
 * @cssproperty --kemet-input-background-color-warning - The warning state background color.
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
  status: TypeStatus = EnumStatuses.Standard;

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

  @property({ type: Boolean, reflect: true, attribute: 'icon-right' })
  iconRight: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'icon-left' })
  iconLeft: boolean;

  @property({ type: Object })
  validity: object;

  @property({ type: Boolean })
  isPasswordVisible: boolean = false;

  @property({ type: String })
  inputType: string;

  @property({ type: Boolean, reflect: true })
  focused: boolean = false;

  @state()
  field: KemetField;

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
      this.field.addEventListener('kemet-password-status', (event: CustomEvent) => this.handleStatus(event));
    }
  }

  render() {
    return html`
      <div>
        <slot name="left" @slotchange=${this.handleLeftChange}></slot>
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
        <slot name="right" @slotchange=${this.handleRightChange}></slot>
        ${this.makeIconClear()} ${this.makeVisibilityToggle()}
      </div>
    `;
  }

  handleLeftChange() {
    const left = this.querySelector('[slot="left"]');
    if (left) this.iconLeft = true;
  }

  handleRightChange() {
    const right = this.querySelector('[slot="right"]');
    if (right) this.iconRight = true;
  }

  makeIconClear() {
    if (this.type === 'search' && this.value !== '') {
      return html`
        <kemet-icon-bootstrap class="search right" icon="x-lg" @click=${() => this.handleClear()}></kemet-icon-bootstrap>
      `;
    }

    return null;
  }

  makeVisibilityToggle() {
    if (this.type === 'password') {
      this.iconRight = true;
      return html`<kemet-icon-bootstrap
        class="eye right"
        icon="${this.isPasswordVisible ? 'eye' : 'eye-slash'}"
        @click=${() => this.togglePasswordVisibility()}
      ></kemet-icon-bootstrap>`;
    }

    return null;
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
    if (this.validateOnBlur && this.form && !this.form?.noValidate) {
      this.input?.reportValidity();
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
      this.status = EnumStatuses.Standard;
      this.validity = this.input.validity;

      emitEvent(this, 'kemet-input-status', {
        status: EnumStatuses.Standard,
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
      this.status = EnumStatuses.Error;

      emitEvent(this, 'kemet-input-status', {
        status: EnumStatuses.Error,
        validity: this.input?.validity,
        element: this,
      });
    }
  }

  handleStatus(event: CustomEvent) {
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
   * @public
   * @returns {boolean}
   */
  checkLimitValidity(): boolean {
    if (this.field) {
      const count = this.field.querySelector('kemet-count') as KemetCount;
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
  checkValidity(): boolean {
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

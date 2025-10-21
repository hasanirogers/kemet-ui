import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { FormSubmitController } from '../utilities/form-controller';
import KemetField from './field';
import { EnumStatuses, TypeStatus } from '../utilities/constants';
import { stylesTextarea } from '../styles/elements/textarea';


/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-textarea
 * @summary An enhanced textarea element.
 *
 * @prop {string} slug
 * @prop {string}  name
 * @prop {string}  placeholder
 * @prop {number}  minlength
 * @prop {number}  maxlength
 * @prop {string}  inputmode
 * @prop {boolean}  disabled
 * @prop {boolean}  readonly
 * @prop {boolean}  required
 * @prop {string}  value
 * @prop {boolean}  invalid
 * @prop {TypeStatus}  status
 * @prop {boolean}  validateOnBlur
 * @prop {boolean}  rounded
 * @prop {boolean}  filled
 * @prop {number}  rows
 * @prop {boolean} autocorrect
 *
 *
 * @csspart textarea
 *
 * @cssproperty --kemet-textarea-padding - The padding on the textarea.
 * @cssproperty --kemet-textarea-border - The border of the textarea.
 * @cssproperty --kemet-textarea-border-color-error - The border of the error state.
 * @cssproperty --kemet-textarea-border-color-success - The border of the success state.
 * @cssproperty --kemet-textarea-border-color-warning - The border of the warning state.
 * @cssproperty --kemet-textarea-border-radius-rounded - The border radius on rounded.
 * @cssproperty --kemet-textarea-border-filled - The border on filled.
 * @cssproperty --kemet-textarea-color-filled - The color on filled.
 * @cssproperty --kemet-textarea-background-color-filled - The background-color on filled.
 * @cssproperty --kemet-textarea-background-color-error - The error state background color.
 * @cssproperty --kemet-textarea-background-color-success - The success state background color.
 * @cssproperty --kemet-textarea-background-color-warning - The warning state background color.
 *
 */

@customElement('kemet-textarea')
export default class KemetTextarea extends LitElement {
  formSubmitController: FormSubmitController;

  static styles = [stylesTextarea];

  @property({ type: String })
  slug: string = 'textarea';

  @property({ type: String })
  name: string = 'textarea';

  @property({ type: String })
  placeholder: string;

  @property({ type: Number })
  minlength: number;

  @property({ type: Number })
  maxlength: number;

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
  value: string = '';

  @property({ type: Boolean, reflect: true })
  invalid: boolean;

  @property({ type: String, reflect: true })
  status: TypeStatus = EnumStatuses.Standard;

  @property({ type: Number })
  rows: number = 4;

  @property({ type: Boolean, attribute: 'validate-on-blur' })
  validateOnBlur: boolean;

  @property({ type: Boolean, reflect: true })
  filled: boolean;

  @property({ type: Boolean, reflect: true })
  rounded: boolean;

  @property({ type: Boolean })
  autocorrect: boolean;

  @state()
  form: HTMLFormElement;

  @state()
  control: KemetField;

  @state()
  textarea: HTMLTextAreaElement;

  @state()
  hasFocus: boolean;

  @state()
  validity: ValidityState;

  constructor() {
    super();

    /** @internal */
    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    // elements
    this.form = this.closest('form');
    this.control = this.closest('kemet-field');
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
      this.status = EnumStatuses.Standard;
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
      this.status = EnumStatuses.Error;

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
  checkLimitValidity(): boolean {
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
  checkValidity(): boolean {
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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-textarea': KemetTextarea
  }
}

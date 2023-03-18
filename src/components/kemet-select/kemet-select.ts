import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FormSubmitController } from '../../utilities/controllers/forms';
import { emitEvent } from '../../utilities/misc/events';
import { KemetFieldInterface } from '../kemet-field/types';
import { stylesSelect } from './styles';
import { KemetOptionInterface } from './types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-select
 * @summary An enhanced select element.
 *
 * @prop {string} slug - A string the uniquely identifies the select
 * @prop {string} name - The name of the select
 * @prop {string} value - The value of the select
 * @prop {array} options - The options the select contains
 * @prop {string} status - The status of the select
 * @prop {boolean} required - Determines whether or not the field is required
 * @prop {boolean} disabled - Determines whether or not the field is disabled
 * @prop {boolean} multiple - Support of multiple choice selections
 * @prop {string} icon - The dropdown icon
 * @prop {number} iconSize - The dropdown icon size
 * @prop {boolean} filled - Displays a filled select
 * @prop {boolean} rounded - Displays rounded corners
 *
 * @csspart select
 *
 * @cssproperty --kemet-select-padding - The padding on the textarea. Default: 1rem.
 * @cssproperty --kemet-select-border - The border of the textarea. Default: 1px solid var(--kemet-color-background).
 * @cssproperty --kemet-select-border-color-error - The border of the error state. Default: 1px solid var(--kemet-color-error).
 * @cssproperty --kemet-select-border-color-success - The border of the success state. Default: 1px solid var(--kemet-color-success).
 * @cssproperty --kemet-select-border-color-warning - The border of the warning state. Default: 1px solid var(--kemet-color-warning).
 * @cssproperty --kemet-select-border-radius-rounded - The border radius on rounded. Default: var(--kemet-border-radius).
 * @cssproperty --kemet-select-border-filled - The border on filled. Default: none.
 * @cssproperty --kemet-select-color-filled - The color on filled. Default: var(--kemet-color-white).
 * @cssproperty --kemet-select-background-color-filled - The background-color on filled. Default: var(--kemet-color-primary).
 * @cssproperty --kemet-select-background-color-error - The error state background color. Default: var(--kemet-color-error).
 * @cssproperty --kemet-select-background-color-success - The success state background color. Default: var(--kemet-color-success).
 * @cssproperty --kemet-select-background-color-warning - The warning state background color. Default: var(--kemet-color-warning).
 * @cssproperty --kemet-select-icon-right - The space on the right of the icon. Default: 1rem.
 *
 * @event kemet-input-focused - Fires when the input receives and loses focus
 * @event kemet-input-status - Fires when there's a change in status
 *
 */

@customElement('kemet-select')
export default class KemetSelect extends LitElement {
  formSubmitController: FormSubmitController;

  static styles = [stylesSelect];

  @property({ type: String })
  slug: string;

  @property({ type: String })
  name: string = 'select';

  @property({ type: String })
  value: string;

  @property({ type: Array })
  options: any[];

  @property({ type: String, reflect: true })
  status: string;

  @property({ type: Boolean, reflect: true })
  required: boolean;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ type: Boolean })
  multiple: boolean;

  @property({ type: String })
  icon: string = 'chevron-down';

  @property({ type: Number, attribute: 'icon-size' })
  iconSize: number = 16;

  @property({ type: Boolean, reflect: true })
  filled: boolean;

  @property({ type: Boolean, reflect: true })
  rounded: boolean;

  @state()
  invalid: boolean;

  @state()
  control: KemetFieldInterface;

  @state()
  select: HTMLSelectElement;

  @state()
  selectedOption: HTMLOptionElement;

  @state()
  optionElements: any;

  @state()
  hasFocus: boolean;

  constructor() {
    super();

    /** @internal */
    this.formSubmitController = new FormSubmitController(this);

    /** @internal */
    this.control = this.closest('kemet-field');
  }

  firstUpdated() {
    this.select = this.shadowRoot.querySelector('select');
    this.selectedOption = this.querySelector('[selected]');
    this.value = this.selectedOption ? this.selectedOption.value : '';
  }

  render() {
    return html`
      <select
        part="select"
        id=${this.slug}
        name=${this.name}
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?multiple=${this.multiple}
        @change=${this.handleChange}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @invalid=${this.handleInvalid}
      >
        ${this.makeOptions()}
      </select>
      ${this.makeIcon()}
      <slot @slotchange=${() => this.makeOptions()}></slot>
    `;
  }

  /**
   * Generates the option elements
   * @private
   * @returns {TemplateResult} An option element
   */
  makeOptions() {
    this.options = [];
    this.optionElements = this.querySelectorAll('kemet-option');

    this.optionElements.forEach((option) => {
      // if (index === 0) this.value = option.value;
      // this.value = option.selected ? option.value : this.value;
      this.options = this.options.concat({
        label: option.label,
        value: option.value,
        disabled: option.disabled,
        selected: option.selected,
      });
    });

    return this.options.map(
      option => html`<option value=${option.value} ?disabled=${option.disabled} ?selected=${option.selected}>
          ${option.label}
        </option>`,
    );
  }

  /**
   * Generates an dropdown icon
   * @private
   */
  makeIcon() {
    if (this.icon || this.icon !== '') {
      return html`<kemet-icon icon=${this.icon} size=${this.iconSize}></kemet-icon>`;
    }

    return null;
  }

  /**
   * Handles when the input receives focus
   * @private
   */
  handleFocus() {
    this.hasFocus = true;
    emitEvent(this, 'kemet-input-focused', true);
  }

  /**
   * Handles when the input loses focus
   * @private
   */
  handleBlur() {
    this.hasFocus = false;
    emitEvent(this, 'kemet-input-focused', false);

    this.select.checkValidity();

    if (!this.select.checkValidity()) {
      this.invalid = true;
      this.status = 'error';
      this.control.status = 'error';

      emitEvent(this, 'kemet-input-status', {
        status: 'error',
        validity: this.select.validity,
        element: this,
      });
    }
  }

  /**
   * Handles when the input changes value
   * @private
   */
  handleChange() {
    this.value = this.select.value;

    if (this.select.checkValidity()) {
      this.invalid = false;
      this.status = 'standard';

      emitEvent(this, 'kemet-input-status', {
        status: 'standard',
        validity: this.select.validity,
        element: this,
      });
    }
  }

  /**
   * Handles when the input has an error
   * @private
   */
  handleInvalid() {
    this.invalid = true;
    this.status = 'error';

    emitEvent(this, 'kemet-input-status', {
      status: 'error',
      validity: this.select.validity,
      element: this,
    });
  }

  /**
   * Checks the validity of the standard select
   * @public
   * @returns {boolean}
   */
  checkValidity() {
    this.select.checkValidity();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-select': KemetSelect
  }
}

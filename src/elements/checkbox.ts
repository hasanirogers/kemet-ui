import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { FormSubmitController } from '../utilities/form-controller';
import { emitEvent } from '../utilities/events';
import { stylesBase } from '../styles/elements/checkbox';
import { TypeStatus, EnumStatuses } from '../utilities/constants';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-checkbox
 * @summary An enhanced checkbox.
 *
 * @prop {string} label - Label text for the checkbox
 * @prop {boolean} checked - Determines if the checkbox is selected
 * @prop {boolean} indeterminate - An indeterminate selection status
 * @prop {string} name - Name of the checkbox
 * @prop {string} value - Value of the checkbox
 * @prop {boolean} disabled - Determines if a checkbox is disabled
 * @prop {boolean} required - Determines if a checkbox is required
 * @prop {boolean} focused - Is true when the checkbox is focused
 * @prop {boolean} rounded - Gives the checkbox rounded edges
 * @prop {boolean} filled - Fills the checkbox with color
 * @prop {TypeStatus} status - The status of the checkbox
 * @prop {string} message - Message associated with checkbox status
 *
 * @csspart label - The label element.
 * @csspart text - The label's text.
 * @csspart mark - The icon of the check mark.
 *
 * @cssproperty --kemet-checkbox-size - The width and height of the checkbox.
 * @cssproperty --kemet-checkbox-color - The color of the checkbox mark.
 * @cssproperty --kemet-checkbox-border - The border of the checkbox.
 * @cssproperty --kemet-checkbox-border-radius - The border radius of the checkbox.
 * @cssproperty --kemet-checkbox-filled-color - The filled color of the checkbox mark.
 * @cssproperty --kemet-checkbox-filled-background-color - The filled background color.
 *
 * @event kemet-checkbox-change - Fires when the state of the checkbox changes
 * @event kemet-checkbox-focused - Fires when the checkbox loses or receives focus
 *
 */

@customElement('kemet-checkbox')
export default class KemetCheckbox extends LitElement {
  /** @internal */
  formSubmitController: FormSubmitController;

  static styles = [stylesBase];

  @property({ type: String })
  label: string = '';

  @property({ type: Boolean, reflect: true })
  checked: boolean;

  @property({ type: Boolean, reflect: true })
  indeterminate: boolean;

  @property({ type: String })
  name: string = 'checkbox';

  @property({ type: Boolean })
  value: boolean;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  required: boolean = false;

  @property({ type: Boolean, reflect: true })
  focused: boolean;

  @property({ type: Boolean, reflect: true })
  rounded: boolean = false;

  @property({ type: Boolean, reflect: true })
  filled: boolean = false;

  @property({ type: String, reflect: true })
  status: TypeStatus = EnumStatuses.Standard;

  @property({ type: String })
  message: string;

  @query('input')
  input: HTMLInputElement;

  constructor() {
    super();

    /** @internal */
    this.formSubmitController = new FormSubmitController(this);
  }

  render() {
    return html`
      <label part="label">
        <input
          type="checkbox"
          name=${ifDefined(this.name)}
          .value=${this.value}
          .indeterminate=${live(this.indeterminate)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${() => this.handleClick()}
          @blur=${() => this.handleBlur()}
          @focus=${() => this.handleFocus()}
          @change=${() => this.handleChange()}
        />
        <button part="checkbox" aria-label=${this.label}>
          ${this.makeCheckMark()}
        </button>
        <span part="text">${this.label}</span>
      </label>
      ${this.makeMessage()}
    `;
  }

  click() {
    this.input.click();
  }

  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    emitEvent(this, 'kemet-checkbox-change', this);
  }

  handleBlur() {
    this.focused = false;
    emitEvent(this, 'kemet-checkbox-focused', false);
  }

  handleFocus() {
    this.focused = true;
    emitEvent(this, 'kemet-checkbox-focused', true);
  }

  handleChange() {
    this.value = this.checked;

    if (this.input.checkValidity()) {
      this.status = EnumStatuses.Standard;
    }
  }

  makeMessage() {
    if (this.status === EnumStatuses.Error || this.status === EnumStatuses.Warning) {
      return html`<span part="message">${this.message}</span>`;
    }

    return null;
  }

  makeCheckMark() {
    if (this.checked) {
      return html`
        <span part="mark">
          <svg viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g stroke="currentColor" stroke-width="2">
                <g transform="translate(3.428571, 3.428571)">
                  <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                  <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      `;
    }

    if (!this.checked && this.indeterminate) {
      return html`
        <span part="mark">
          <svg viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g stroke="currentColor" stroke-width="2">
                <g transform="translate(2.285714, 6.857143)">
                  <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      `;
    }

    return null;
  }

  checkValidity() {
    return this.input.checkValidity();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-checkbox': KemetCheckbox
  }
}

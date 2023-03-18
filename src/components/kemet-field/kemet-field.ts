import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';
import { KemetComboInterface } from '../kemet-combo/types';
import { KemetInputInterface } from '../kemet-input/types';
import { KemetTextareaInterface } from '../kemet-textarea/types';
import { stylesBase } from './styles';
import { TypeStatus } from './types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-field
 * @summary Used in combination with Input, Select, and Textarea, to make a Field.
 *
 * @prop {string} slug - Uniquely identifies the control. Use the same slug for slotted sub components.
 * @prop {string} label - The label text
 * @prop {string} message - The validation message for error or success
 * @prop {boolean} focused - Determines if the containing input is focused
 * @prop {string} status - The validation status of standard, error, or success
 * @prop {boolean} filled - Is true when the containing input has a value
 * @prop {number} length - The length of the containing input
 * @prop {boolean} disabled - Determines the disabled state of the control
 * @prop {string} errorIcon - The icon while in an error or warning state
 * @prop {string} successIcon - The icon while in an success state
 *
 * @slot component - Allows sub components of the field to display.
 *
 * @csspart label - The label of the field.
 * @csspart message - The validation message of the field.
 * @csspart text - The text in the label.
 *
 * @event kemet-field-input - Fires when input fires on the input slot
 *
 */

@customElement('kemet-field')
export default class KemetField extends LitElement {
  static styles = [stylesBase];

  @property({ type: String })
  slug: string;

  @property({ type: String })
  label: string;

  @property({ type: String })
  message: string;

  @property({ type: Boolean, reflect: true })
  focused: boolean;

  @property({ type: String, reflect: true })
  status: TypeStatus = 'standard';

  @property({ type: Boolean, reflect: true })
  filled: boolean;

  @property({ type: Number })
  length: number;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ type: String, attribute: 'error-icon' })
  errorIcon: string = 'exclamation-triangle-fill';

  @property({ type: String, attribute: 'success-icon' })
  successIcon: string = 'check-lg';

  @state()
  slotInput: KemetInputInterface | KemetTextareaInterface;

  @state()
  slotCombo: KemetComboInterface;

  constructor() {
    super();

    // listeners
    this.addEventListener('kemet-input-focused', event => this.handleFocused(event));
    this.addEventListener('kemet-input-status', event => this.handleStatus(event));
    this.addEventListener('kemet-input-input', event => this.handleInput(event));
    this.addEventListener('kemet-count-status', event => this.handleStatus(event));
    this.addEventListener('kemet-combo-selection', event => this.handleSelection(event));
  }

  firstUpdated() {
    this.slotInput = this.querySelector('[slot="input"]');
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
        <span part="text">${this.label}${this.makeStatusIcon()}</span>
        <slot name="input"></slot>
      </label>
      ${this.makeStatusMessage()}
      <slot name="component"></slot>
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
    emitEvent(this, 'kemet-field-input', event.detail.length);

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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-field': KemetField
  }
}

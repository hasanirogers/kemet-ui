import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stylesBase } from '../styles/elements/field';

import KemetCombo from './combo';
import KemetInput from './input';
import KemetTextarea from './textarea';
import { EnumStatuses, TypeStatus } from '../utilities/constants';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-field
 * @summary Used in combination with Input, Select, and Textarea, to make a Field.
 *
 * @prop {string} slug - Uniquely identifies the control. Use the same slug for slotted subcomponents.
 * @prop {string} label - The label text
 * @prop {string} message - The validation message for error or success
 * @prop {boolean} focused - Determines if the containing input is focused
 * @prop {TypeStatus} status - The validation status of standard, error, or success
 * @prop {boolean} filled - Is true when the containing input has a value
 * @prop {number} length - The length of the containing input
 * @prop {boolean} disabled - Determines the disabled state of the control
 * @prop {string} errorIcon - The icon while in an error or warning state
 * @prop {string} successIcon - The icon while in a success state
 *
 * @slot component - Allows subcomponents of the field to display.
 *
 * @csspart label - The label of the field.
 * @csspart message - The validation message of the field.
 * @csspart text - The text in the label.
 *
 * @event kemet-input - Fires when input fires on the input slot
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
  status: TypeStatus = EnumStatuses.Standard;

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
  slotInput: KemetInput | KemetTextarea;

  @state()
  slotCombo: KemetCombo;

  firstUpdated() {
    this.slotInput = this.querySelector('[slot="input"]');
    this.slotCombo = this.querySelector('[slot="combo"]');

    this.slotInput.addEventListener('kemet-focus', (event: CustomEvent) => this.handleFocused(event));
    this.slotInput.addEventListener('kemet-status-change', (event: CustomEvent) => this.handleStatus(event));
    this.slotInput.addEventListener('kemet-input', (event: CustomEvent) => this.handleInput(event));
    this.slotCombo?.addEventListener('kemet-selection', (event: CustomEvent) => this.handleSelection(event));

    if (this.slotInput.value) {
      this.length = this.slotInput.value.length;
    } else {
      this.length = 0;
    }
  }

  render() {
    return html`
      <label for="${this.slug}" id="${this.slug}-label" part="label">
        <span part="text">${this.label}</span>
        <slot name="input"></slot>
      </label>
      ${this.makeStatusMessage()}
      <slot name="component"></slot>
    `;
  }

  makeStatusMessage() {
    if (this.status !== 'standard') {
      return html`<span class="message" part="message">${this.message}</span>`;
    }

    return null;
  }

  handleFocused(event: CustomEvent) {
    this.focused = event.detail;

    if (!this.focused && this.slotCombo && this.slotCombo.options.length < 1) {
      this.slotCombo.show = false;
    }
  }

  handleStatus(event: CustomEvent) {
    this.status = event.detail.status;
  }

  handleInput(event: CustomEvent) {
    this.length = event.detail.value.length ?? 0;
    this.filled = event.detail.value !== '';
  }

  handleSelection(event: CustomEvent) {
    console.log(event.detail);
    this.slotInput.setAttribute('aria-activedescendant', event.detail);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-field': KemetField
  }
}

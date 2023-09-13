import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emitEvent } from '../../utilities/misc/events';
import { stylesRadio } from './styles';
import { KemetRadioInterface } from './types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-radio
 * @summary An enhanced radio button.
 *
 * @prop {string} label - The text next to the radio button
 * @prop {boolean} checked - Determines whether or not the button is checked
 * @prop {string} name - The name of the field
 * @prop {string} value - The value of the radio button
 * @prop {boolean} disabled - Determines if the button should be disabled
 * @prop {boolean} focused - Is true when the button is focused on
 * @prop {boolean} filled - Displayed the button as a filled button
 *
 * @csspart label - The label that contains the radio button.
 * @csspart button - The radio button.
 * @csspart text - The text next to the radio button.
 * @csspart dot - The circle that fills the radio button.
 *
 * @cssproperty --kemet-radio-size - The size of the radio button.
 * @cssproperty --kemet-radio-border - The outer border of the radio button.
 * @cssproperty --kemet-radio-dot-color - The color of the radio button's dot.
 * @cssproperty --kemet-radio-dot-border-width - The border width of the radio button's dot.
 * @cssproperty --kemet-radio-dot-border-color - The border color of the radio button's dot.
 * @cssproperty --kemet-radio-dot-color-filled - The filled color of the radio button.
 * @cssproperty --kemet-radio-dot-ring-color - The ring color of the radio button's dot.
 *
 * @event kemet-radio-focused -  Fires when the checkbox loses or receives focus
 * @event kemet-radio-focused - Fires when the checkbox loses or receives focus
 *
 */

@customElement('kemet-radio')
export default class KemetRadio extends LitElement {
  static styles = [stylesRadio];

  @property({ type: String })
  label: string = '';

  @property({ type: Boolean, reflect: true })
  checked: boolean;

  @property({ type: String })
  name: string;

  @property({ type: String })
  value: string;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  focused: boolean;

  @property({ type: Boolean, reflect: true })
  filled: boolean;

  @state()
  input: HTMLInputElement;

  firstUpdated() {
    const radiosElement = this.closest('kemet-radios') as KemetRadioInterface;

    this.name = radiosElement.name || 'radio-button';
    this.input = this.shadowRoot.querySelector('input');
    this.setAttribute('role', 'radio');

    if (this.checked) {
      this.setAttribute('aria-checked', 'true');
    } else {
      this.setAttribute('aria-checked', 'false');
    }
  }

  render() {
    return html`
      <label part="label">
        <input
          type="radio"
          name=${ifDefined(this.name)}
          .value=${this.value}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          @blur=${() => this.handleBlur()}
          @focus=${() => this.handleFocus()}
        />
        <button part="button" aria-label=${this.label}>${this.makeDot()}</button>
        <span part="text">${this.label}</span>
      </label>
    `;
  }

  click() {
    this.input.click();
  }

  blur() {
    this.input.blur();
  }

  focus() {
    this.input.focus();
  }

  handleBlur() {
    this.focused = false;
    emitEvent(this, 'kemet-radio-focused', false);
  }

  handleFocus() {
    this.focused = true;
    emitEvent(this, 'kemet-radio-focused', true);
  }

  makeDot() {
    if (this.checked) {
      return html`
        <span part="dot"></span>
      `;
    }

    return null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-radio': KemetRadio
  }
}

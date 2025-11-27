import { html, LitElement } from 'lit';
import {
 customElement, property, queryAll, state
} from 'lit/decorators.js';
import { stylesBase } from '../styles/elements/otp-input';
import { EnumKeyCodes } from '../utilities/constants';
import { emitEvent } from '../utilities/events';


/**
 * @since 4.1.0
 * @status stable
 *
 * @tagname kemet-otp-input
 * @summary An input element that accepts multiple items from a combo.
 *
 * @prop {number} digits - The number of inputs.
 * @prop {string} pattern - The pattern to match against for stripping characters
 * @prop {string} value - All digits entered by the user combined in one string.
 *
 * @csspart input - The input elements.
 *
 * @cssproperty --kemet-otp-input-color - The text color of the otp inputs.
 * @cssproperty --kemet-otp-input-min-width - The minimum width of the otp inputs.
 * @cssproperty --kemet-otp-input-font-size - The font size of the otp inputs.
 * @cssproperty --kemet-otp-input-border - The border of the otp inputs.
 * @cssproperty --kemet-otp-input-border-radius - The border radius of the otp inputs.
 *
 * @event kemet-completed - Fires when otp is filled out completely
 *
 */

@customElement('kemet-otp-input')
export default class KemetOtpInput extends LitElement {
  static styles = [stylesBase];

  @property({ type: Number })
  digits: number = 6;

  @property({ type: String, reflect: true })
  value: string = '';

  @property()
  pattern: string;

  @state()
  autoFocus: boolean = true;

  @state()
  values: string[] = [];

  @state()
  lastInput: string;

  @state()
  completed: boolean = false;

  @queryAll('input')
  inputElements: NodeListOf<HTMLInputElement>;

  updated() {
    this.determineCompleted();
  }

  render() {
    return this.makeInputs();
  }

  determineCompleted() {
    const hasBlankValues = this.values.includes('');
    if (this.values.length === this.digits && !hasBlankValues && !this.completed) {
      emitEvent(this, 'kemet-completed', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      });
      this.completed = true;
    }
  }

  makeInputs() {
    return Array.from(
      { length: this.digits },
      (_, index) => html`
        <label>
          <span>Enter digit ${index + 1}</span>
          <input
            part="input"
            id="${index}"
            maxlength="1"
            @input=${this.handleInput}
            @keydown=${this.handleKeyDown}
            @paste=${this.handlePaste}
          />
        </label>
      `
    );
  }

  eatCharacters(inputValue: string) {
    const regex = new RegExp(this.pattern);
    return inputValue.replace(regex, '');
  }

  handleInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const currentIndex = parseInt(input.getAttribute('id'));
    const nextInput = this.inputElements[currentIndex + 1];

    if (this.pattern) {
      input.value = this.eatCharacters(input.value);
    }

    this.values[currentIndex] = input.value;
    this.value = this.values.join('');
    this.lastInput = input.value;

    const fullDigits = this.values.length === this.digits && !!input.value;

    if (!fullDigits) {
      this.completed = false;
    }

    if (nextInput && this.autoFocus && !!input.value) {
      nextInput.focus();
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    this.autoFocus = event.key !== EnumKeyCodes.BACKSPACE;
  }

  handlePaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasteData = event.clipboardData?.getData('text') ?? '';

    // Trim and limit to number of digits
    const charactersString = this.eatCharacters(pasteData.trim().slice(0, this.digits).split('').join(''));
    const charactersArray = charactersString.split('');

    // Fill the inputs and values array one by one
    charactersArray.forEach((character, index) => {
      const input = this.inputElements[index];
      if (input && !!character) {
        input.value = character;
        this.values[index] = character;
      }
    });

    const lastFilled = this.inputElements[charactersArray.length - 1];
    lastFilled?.focus();
    this.value = this.values.join('');
    this.determineCompleted();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-otp-input': KemetOtpInput
  }
}

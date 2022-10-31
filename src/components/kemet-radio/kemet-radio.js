import { html, css, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emitEvent } from '../../utilities/misc/events.js';

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
 * @cssproperty --kemet-radio-size - The size of the radio button. Default: 18px.
 * @cssproperty --kemet-radio-border - The outer border of the radio button. Default: 1px solid var(--kemet-color-primary).
 * @cssproperty --kemet-radio-dot-color - The color of the radio button's dot. Default: var(--kemet-color-primary).
 * @cssproperty --kemet-radio-dot-border-width - The border width of the radio button's dot. Default: 3px.
 * @cssproperty --kemet-radio-dot-border-color - The border color of the radio button's dot. Default: var(--kemet-color-white).
 * @cssproperty --kemet-radio-dot-color-filled - The filled color of the radio button. Default: var(--kemet-color-white).
 *
 * @event kemet-radio-focused -  Fires when the checkbox loses or receives focus
 * @event kemet-radio-focused - Fires when the checkbox loses or receives focus
 *
 */

export default class KemetRadio extends LitElement {
  static get styles() {
    return [
      css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: inline-block;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          cursor: pointer;
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
          margin-right: 0.5rem;
        }

        input {
          cursor: pointer;
          margin: 0;
          padding: 0;
          width: var(--kemet-radio-size, 18px);
          height: var(--kemet-radio-size, 18px);
          position: absolute;
          opacity: 0;
        }

        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--kemet-radio-size, 18px);
          height: var(--kemet-radio-size, 18px);
          padding: 0;
          border-radius: 50%;
          background: none;
          border: var(--kemet-radio-border, 1px solid var(--kemet-color-primary));
        }

        [part='dot'] {
          display: inline-flex;
          border-radius: 50%;
          width: var(--kemet-radio-size, 18px);
          height: var(--kemet-radio-size, 18px);
          background: var(--kemet-radio-dot-color, var(--kemet-color-primary));
          border: var(--kemet-radio-border, 1px solid var(--kemet-color-primary));
          box-shadow: inset 0px 0px 0px var(--kemet-radio-dot-border-width, 3px) var(--kemet-radio-dot-border-color, var(--kemet-color-white));
        }

        :host([filled]) [part='dot'] {
          background: var(--kemet-radio-dot-color-filled, var(--kemet-color-white));
          box-shadow: inset 0px 0px 0px var(--kemet-radio-dot-border-width, 4px) var(--kemet-radio-dot-border-color, var(--kemet-color-primary));
        }
      `,
    ];
  }

  static get properties() {
    return {
      label: {
        type: String,
      },
      checked: {
        type: Boolean,
        reflect: true,
      },
      name: {
        type: String,
      },
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
      focused: {
        type: Boolean,
        reflect: true,
      },
      filled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.label = '';
    this.name = this.closest('kemet-radios').name || 'radio-button';
    this.disabled = false;
  }

  firstUpdated() {
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-radio') || customElements.define('kemet-radio', KemetRadio);

import { html, css, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { FormSubmitController } from '../../utilities/controllers/forms.js';

class KemetRadio extends LitElement {
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
      /**
       * The text next to the radio button
       */
      label: {
        type: String,
      },
      /**
       * Determines whether or not the button is checked
       */
      checked: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The name of the field
       */
      name: {
        type: String,
      },
      /**
       * The value of the radio button
       */
      value: {
        type: String,
      },
      /**
       * Determines if the button should be disabled
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Is true when the button is focused on
       */
      focused: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Displayed the button as a filled button
       */
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
    this.name = 'radio-button';
    this.disabled = false;

    /**
     * Used only for form reactive controller
     */
    this.formSubmitController = new FormSubmitController(this);
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
        <button part="button">${this.makeDot()}</button>
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

    /**
     * Fires when the checkbox loses or receives focus
     */
    this.dispatchEvent(
      new CustomEvent('kemet-radio-focused', {
        bubbles: true,
        composed: true,
        detail: false,
      }),
    );
  }

  handleFocus() {
    this.focused = true;

    /**
     * Fires when the checkbox loses or receives focus
     */
    this.dispatchEvent(
      new CustomEvent('kemet-radio-focused', {
        bubbles: true,
        composed: true,
        detail: true,
      }),
    );
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

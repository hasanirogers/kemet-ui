import { html, css, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { FormSubmitController } from '../../utilities/controllers/forms.js';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-checkbox
 * @summary An enhanced checkbox.
 *
 * @csspart label - The label element.
 * @csspart text - The the label's text.
 * @csspart mark - The icon of the check mark.
 *
 * @cssproperty --kemet-checkbox-size - The width and height of the checkbox. Default: 18px.
 * @cssproperty --kemet-checkbox-color - The color of the checkbox's mark. Default: var(--kemet-color-primary).
 * @cssproperty --kemet-checkbox-border - The border of the checkbox. Default: 1px solid var(--kemet-color-primary).
 * @cssproperty --kemet-checkbox-border-radius - The border radius of the checkbox. Default: 4px.
 * @cssproperty --kemet-checkbox-filled-color - The filled color of the checkbox's mark. Default: var(--kemet-color-white).
 * @cssproperty --kemet-checkbox-filled-background-color - The filled background color. Default: var(--kemet-color-primary).
 *
 * @event kemet-checkbox-change - Fires when the state of the checkbox changes
 * @event kemet-checkbox-focused - Fires when the checkbox loses or receives focus
 *
 */

export default class KemetCheckbox extends LitElement {
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
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        input {
          cursor: pointer;
          margin: 0;
          padding: 0;
          width: var(--kemet-checkbox-size, 18px);
          height: var(--kemet-checkbox-size, 18px);
          position: absolute;
          opacity: 0;
        }

        button {
          margin: 0;
          border: none;
          background: none;
        }

        [part='checkbox'] {
          color: var(--kemet-checkbox-color, var(--kemet-color-primary));
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--kemet-checkbox-size, 18px);
          height: var(--kemet-checkbox-size, 18px);
          border: var(--kemet-checkbox-border, 1px solid var(--kemet-color-primary));
        }

        :host([rounded]) [part='checkbox'] {
          border-radius: var(--kemet-checkbox-border-radius, 4px);
        }

        :host([filled][checked]) [part='checkbox'],
        :host([filled][indeterminate]) [part='checkbox'] {
          border: none;
          background-color: var(--kemet-checkbox-filled-background-color, var(--kemet-color-primary));
        }

        [part='mark'] {
          display: flex;
          width: calc(var(--kemet-checkbox-size, 18px) - 4px);
          height: calc(var(--kemet-checkbox-size, 18px) - 4px);
        }

        :host([filled][checked]) [part='mark'],
        :host([filled][indeterminate]) [part='mark'] {
          color: var(--kemet-checkbox-filled-color, var(--kemet-color-white));
        }

        [part='message'] {
          display: block;
          margin-top: 0.5rem;
        }

        :host([status='error']) [part='message'] {
          color: var(--kemet-color-error);
        }

        :host([status='warning']) [part='message'] {
          color: var(--kemet-color-error);
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
      indeterminate: {
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
      required: {
        type: Boolean,
        reflect: true,
      },
      focused: {
        type: Boolean,
        reflect: true,
      },
      rounded: {
        type: Boolean,
        reflect: true,
      },
      filled: {
        type: Boolean,
        reflect: true,
      },
      status: {
        type: String,
        reflect: true,
      },
      message: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.label = '';
    this.name = 'checkbox';
    this.disabled = false;
    this.required = false;
    this.rounded = false;
    this.filled = false;
    this.status = 'standard';

    /** @internal */
    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    this.input = this.shadowRoot.querySelector('input');
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
      this.status = 'standard';
    }
  }

  makeMessage() {
    if (this.status === 'error' || this.status === 'warning') {
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-checkbox') || customElements.define('kemet-checkbox', KemetCheckbox);

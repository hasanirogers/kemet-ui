import { html, css, LitElement } from 'lit';
import { FormSubmitController } from '../../utilities/controllers/forms.js';

export default class KemetToggle extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --kemet-toggle-width: 3.5rem;
          --kemet-toggle-height: 2rem;
          --kemet-toggle-handle-diameter: 1.6rem;
          --kemet-toggle-handle-margin: calc((var(--kemet-toggle-height) - var(--kemet-toggle-handle-diameter)) / 2);

          display: flex;
          align-items: center;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: inherit;
          color: inherit;
        }

        :host([disabled]) label {
          cursor: not-allowed;
        }

        input {
          display: none;
        }

        [part='control'] {
          position: relative;
          display: inline-flex;
          margin: 0;
          width: var(--kemet-toggle-width);
          height: var(--kemet-toggle-height);
        }

        [part='control'] > span {
          transition: 300ms ease-in-out;
        }

        [part='track'] {
          width: var(--kemet-toggle-width);
          height: var(--kemet-toggle-height);
          border: var(--kemet-toggle-track-border, none);
          border-radius: var(--kemet-toggle-height);
          background-color: var(--kemet-toggle-track-color, var(--kemet-color-white));
          box-shadow: var(--kemet-toggle-track-shadow, inset 0 0.4rem 0.7rem 0 rgba(47, 47, 47, 0.35), inset 0 -0.2rem 0.4rem 0 var(--kemet-color-gray1));
        }

        :host([squared]) [part='track'] {
          border-radius: 0;
        }

        [part='handle'] {
          position: absolute;
          top: var(--kemet-toggle-handle-margin);
          left: var(--kemet-toggle-handle-margin);
          width: var(--kemet-toggle-handle-diameter);
          height: var(--kemet-toggle-handle-diameter);
          transform: translateX(0);
          border: var(--kemet-toggle-handle-border, none);
          border-radius: var(--kemet-toggle-handle-diameter);
          background-color: var(--kemet-toggle-handle-color, var(--kemet-color-primary));
          box-shadow: var(--kemet-toggle-handle-shadow, 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2));
        }

        :host([squared]) [part='handle'] {
          border-radius: 0;
        }

        :host([checked]) [part='handle'] {
          transform: translateX(calc(var(--kemet-toggle-width) - var(--kemet-toggle-handle-diameter) - var(--kemet-toggle-handle-margin) * 2));
        }

        .option {
          font-size: 90%;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * The name on the input field
       */
      name: {
        type: String,
      },
      /**
       * Determines whether or not the toggle is checked
       */
      checked: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Determines whether or not the toggle is disabled
       */
      disabled: {
        type: Boolean,
      },
      /**
       * A description of the toggle's purpose
       */
      label: {
        type: String,
      },
      /**
       * Determines whether or not to show text options
       */
      show: {
        type: Boolean,
      },
      /**
       * Displays the toggle as squared instead of rounded
       */
      squared: {
        type: Boolean,
      },
      /**
       * The checked option text
       */
      optionChecked: {
        type: String,
        attribute: 'option-checked',
      },
      /**
       * The unchecked option text
       */
      optionUnchecked: {
        type: String,
        attribute: 'option-unchecked',
      },
    };
  }

  constructor() {
    super();

    this.name = 'toggle-switch';
    this.disabled = false;
    this.checked = false;
    this.show = false;
    this.squared = false;
    this.label = '';
    this.optionChecked = 'on';
    this.optionUnchecked = 'off';
    this.value = this.checked ? this.optionChecked : this.optionUnchecked;

    /**
     * Used only for form reactive controller
     */
    this.formSubmitController = new FormSubmitController(this);
  }

  render() {
    return html`
      <label part="label">
        ${this.makeUncheckedOption()}
        <span part="control">
          <span part="track"></span>
          <span part="handle"></span>
        </span>
        <input
          role="switch"
          type="checkbox"
          name="${this.name}"
          aria-label="${this.label}"
          aria-checked=${this.checked ? 'true' : 'false'}
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          @change=${this.handleChange}
        />
        ${this.makeCheckedOption()}
        <span part="text">${this.label}</span>
      </label>
    `;
  }

  handleChange() {
    this.checked = !this.checked;
    this.value = this.checked ? this.optionChecked : this.optionUnchecked;

    /**
     * Fires when the toggle changes state
     */
    this.dispatchEvent(
      new CustomEvent('kemet-toggle-change', {
        bubbles: true,
        composed: true,
        detail: true,
      }),
    );
  }

  makeUncheckedOption() {
    if (this.show) {
      return html`<span class="option" part="unchecked">${this.optionUnchecked}</span>`;
    }

    return null;
  }

  makeCheckedOption() {
    if (this.show) {
      return html`<span class="option" part="checked">${this.optionChecked}</span>`;
    }

    return null;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-toggle') || customElements.define('kemet-toggle', KemetToggle);

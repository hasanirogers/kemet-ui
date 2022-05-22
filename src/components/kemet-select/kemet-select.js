import { html, css, LitElement } from 'lit';
import { FormSubmitController } from '../../utilities/controllers/forms.js';

export default class KemetSelect extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: relative;
        }

        select {
          display: block;
          width: 100%;
          padding: var(--kemet-select-padding, 1rem);
          border: var(--kemet-select-border, 1px solid var(--kemet-color-primary));
          appearance: none;
          box-sizing: border-box;
          background-color: transparent;
        }

        :host([status='error']) select {
          border: var(--kemet-select-border-color-error, 1px solid var(--kemet-color-error));
        }

        :host([status='success']) select {
          border: var(--kemet-select-border-color-success, 1px solid var(--kemet-color-success));
        }

        :host([status='warning']) select {
          border: var(--kemet-select-border-color-warning, 1px solid var(--kemet-color-warning));
        }

        :host([disabled]) select {
          opacity: 0.5;
        }

        :host([rounded]) select {
          border-radius: var(--kemet-select-border-radius-rounded, var(--kemet-border-radius));
        }

        :host([filled]) select {
          border: var(--kemet-select-border-filled, none);
          color: var(--kemet-select-color-filled, var(--kemet-color-white));
          background-color: var(--kemet-select-background-color-filled, var(--kemet-color-primary));
        }

        :host([filled]) kemet-icon {
          color: var(--kemet-select-color-filled, var(--kemet-color-white));
        }

        :host([status='error'][filled]) select {
          background-color: var(--kemet-select-background-color-error, var(--kemet-color-error));
        }

        :host([status='success'][filled]) select {
          background-color: var(--kemet-select-background-color-success, var(--kemet-color-success));
        }

        :host([status='warning'][filled]) select {
          background-color: var(--kemet-select-background-color-warning, var(--kemet-color-warning));
        }

        kemet-icon {
          position: absolute;
          right: var(--kemet-select-icon-right, 1rem);
          top: 50%;
          transform: translateY(-50%);
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * A string the uniquely identifies the select
       */
      slug: {
        type: String,
      },
      /**
       * The name of the select
       */
      name: {
        type: String,
      },
      /**
       * The value of the select
       */
      value: {
        type: String,
      },
      /**
       * The options the select contains
       */
      options: {
        type: Array,
      },
      /**
       * The status of the select
       */
      status: {
        type: String,
        reflect: true,
      },
      /**
       * Determines whether or not the field is required
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Determines whether or not the field is disabled
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Support of multiple choice selections
       */
      multiple: {
        type: Boolean,
      },
      /**
       * The dropdown icon
       */
      icon: {
        type: String,
      },
      /**
       * The dropdown icon size
       */
      iconSize: {
        type: Number,
        attribute: 'icon-size',
      },
      /**
       * Displays a filled select
       */
      filled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Displays rounded corners
       */
      rounded: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.name = 'select';
    this.icon = 'chevron-down';
    this.iconSize = 16;

    /**
     * Used only for form reactive controller
     */
    this.formSubmitController = new FormSubmitController(this);

    // elements
    this.control = this.closest('kemet-control');
  }

  firstUpdated() {
    // elements
    this.select = this.shadowRoot.querySelector('select');
    this.selectedOption = this.querySelector('[selected]');

    this.value = this.selecltedOption ? this.selectedOption.value : '';
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

    /**
     * Fires when the input receives and loses focus
     */
    this.dispatchEvent(
      new CustomEvent('kemet-input-focused', {
        bubbles: true,
        composed: true,
        detail: true,
      }),
    );
  }

  /**
   * Handles when the input loses focus
   * @private
   */
  handleBlur() {
    this.hasFocus = false;

    /**
     * Fires when the input receives and loses focus
     */
    this.dispatchEvent(
      new CustomEvent('kemet-input-focused', {
        bubbles: true,
        composed: true,
        detail: false,
      }),
    );

    this.select.checkValidity();

    if (!this.select.checkValidity()) {
      this.invalid = true;
      this.status = 'error';
      this.control.status = 'error';

      this.dispatchEvent(
        new CustomEvent('kemet-input-status', {
          bubbles: true,
          composed: true,
          detail: {
            status: 'error',
            validity: this.select.validity,
            element: this,
          },
        }),
      );
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

      /**
       * Fires when there's a change in status
       */
      this.dispatchEvent(
        new CustomEvent('kemet-input-status', {
          bubbles: true,
          composed: true,
          detail: {
            status: 'standard',
            validity: this.select.validity,
            element: this,
          },
        }),
      );
    }
  }

  /**
   * Handles when the input has an error
   * @private
   */
  handleInvalid() {
    this.invalid = true;
    this.status = 'error';

    /**
     * Fires when there's a change in status
     */
    this.dispatchEvent(
      new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'error',
          validity: this.select.validity,
          element: this,
        },
      }),
    );
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-select') || customElements.define('kemet-select', KemetSelect);

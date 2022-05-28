import { html, css, LitElement } from 'lit';
import { FormSubmitController } from '../../utilities/controllers/forms.js';

export default class KemetRadios extends LitElement {
  static get styles() {
    return [
      css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: block;
        }

        fieldset {
          border: 0;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 0.5rem;
        }

        legend {
          margin-bottom: 1rem;
        }

        :host([axis='vertical']) fieldset {
          flex-direction: column;
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
      /**
       * The legend text for the fieldset
       */
      legend: {
        type: String,
      },
      /**
       * The direction of the button's layout
       */
      axis: {
        type: String,
        reflect: true,
      },
      /**
       * The value of the selected radio button
       */
      value: {
        type: String,
      },
      /**
       * The name of the radio button set
       */
      name: {
        type: String,
      },
      /**
       * The status of the radio button set
       */
      status: {
        type: String,
        reflect: true,
      },
      /**
       * Validation message for the user
       */
      message: {
        type: String,
      },
      /**
       * Determines whether or not the radio button set is required
       */
      required: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.legend = '';
    this.axis = 'horizontal';
    this.name = 'radios';
    this.status = 'standard';

    /**
     * Used only for form reactive controller
     */
    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    this.radios = this.querySelectorAll('kemet-radio');
    this.setAttribute('role', 'radiogroup');
  }

  render() {
    return html`
      <fieldset part="fieldset">
        ${this.legend !== '' ? html`<legend part="legend">${this.legend}</legend>` : null}
        <slot @click=${event => this.handleClick(event)} @keydown=${event => this.handleKeyDown(event)} @slotchange=${() => this.handleSlotChange()}></slot>
      </fieldset>
      ${this.makeMessage()}
    `;
  }

  handleClick(event) {
    const { target } = event;

    this.radios.forEach((radio) => {
      radio.checked = false;
      radio.tabIndex = radio === target ? 0 : -1;
      radio.setAttribute('aria-checked', 'false');
    });

    if (!target.disabled) {
      target.checked = true;
      target.setAttribute('aria-checked', 'true');
      this.value = target.value;
      this.status = 'standard';

      /**
       * Fires when the state of the checkbox changes
       */
      this.dispatchEvent(
        new CustomEvent('kemet-radios-change', {
          bubbles: true,
          composed: true,
          detail: target,
        }),
      );
    }
  }

  handleKeyDown(event) {
    const radios = Array.from(this.radios);
    const arrowKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    const forwardKeys = ['ArrowRight', 'ArrowDown'];
    const shift = forwardKeys.includes(event.key) ? 1 : -1;
    const checkedIndex = radios.findIndex(radio => radio.checked) ?? radios[0];

    let index = checkedIndex + shift;

    if (arrowKeys.includes(event.key)) {
      if (index < 0) {
        index = radios.length - 1;
      }

      if (index > radios.length - 1) {
        index = 0;
      }

      this.radios.forEach((radio) => {
        radio.checked = false;
        radio.tabIndex = -1;
      });

      this.radios[index].focus();
      this.radios[index].checked = true;
      this.radios[index].tabIndex = 0;
    }
  }

  handleSlotChange() {
    const radios = Array.from(this.radios);
    const checkedRadio = radios.find(radio => radio.checked);

    this.radios.forEach((radio) => {
      radio.tabIndex = -1;
      radio.input.tabIndex = -1;
    });

    if (checkedRadio) {
      checkedRadio.tabIndex = 0;
    }
  }

  makeMessage() {
    if (this.status === 'error' || this.status === 'warning') {
      return html`<span part="message">${this.message}</span>`;
    }

    return null;
  }

  checkValidity() {
    if (this.required) {
      return !!this.value;
    }

    return true;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-radios') || customElements.define('kemet-radios', KemetRadios);

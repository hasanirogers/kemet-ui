import { html, css, LitElement } from 'lit';

class KemetRadios extends LitElement {
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
    };
  }

  constructor() {
    super();

    // managed properties
    this.legend = '';
    this.axis = 'horizontal';
  }

  firstUpdated() {
    this.radios = this.querySelectorAll('kemet-radio');
    this.setAttribute('role', 'radiogroup');
  }

  render() {
    return html`
      <fieldset part="fieldset">
        <legend part="legend">${this.legend}</legend>
        <slot @click=${event => this.handleClick(event)} @keydown=${event => this.handleKeyDown(event)} @slotchange=${() => this.handleSlotChange()}></slot>
      </fieldset>
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
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-radios') || customElements.define('kemet-radios', KemetRadios);

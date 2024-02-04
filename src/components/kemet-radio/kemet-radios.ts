import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FormSubmitController } from '../../utilities/controllers/forms';
import { emitEvent } from '../../utilities/misc/events';
import { stylesRadios } from './styles';
import { TypeAxis, TypeStatus } from './types';

import type KemetRadio from './kemet-radio';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-radios
 * @summary A group of radio buttons.
 *
 * @prop {string} legend - The legend text for the fieldset
 * @prop {string} axis - The direction of the button's layout
 * @prop {string} value - The value of the selected radio button
 * @prop {string} name - The name of the radio button set
 * @prop {string} status - The status of the radio button set
 * @prop {string} message - Validation message for the user
 * @prop {boolean} required - Determines whether the radio button set is required
 *
 * @csspart fieldset - The fieldset element.
 * @csspart legend - The legend element.
 *
 * @event kemet-radios-change - Fires when the state of the checkbox changes
 *
 */

@customElement('kemet-radios')
export default class KemetRadios extends LitElement {
  formSubmitController: FormSubmitController;

  static styles = [stylesRadios];

  @property({ type: String })
  legend: string = '';

  @property({ type: String, reflect: true })
  axis: TypeAxis = 'horizontal';

  @property({ type: String })
  value: string;

  @property({ type: String })
  name: string = 'radios';

  @property({ type: String, reflect: true })
  status: TypeStatus = 'standard';

  @property({ type: String })
  message: string;

  @property({ type: Boolean })
  required: boolean;

  @state()
  radios: NodeListOf<KemetRadio>;

  constructor() {
    super();

    /** @internal */
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
        <slot @click=${(event: MouseEvent) => this.handleClick(event)} @keydown=${(event: KeyboardEvent) => this.handleKeyDown(event)} @slotchange=${() => this.handleSlotChange()}></slot>
      </fieldset>
      ${this.makeMessage()}
    `;
  }

  handleClick(event: MouseEvent) {
    const target = event.target as KemetRadio;

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

      emitEvent(this, 'kemet-radios-change', target);
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    const radios = Array.from(this.radios);
    const arrowKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    const forwardKeys = ['ArrowRight', 'ArrowDown'];
    const shift: number = forwardKeys.includes(event.key) ? 1 : -1;
    const checkedIndex: number | KemetRadio = radios.findIndex((radio: KemetRadio) => radio.checked) ?? radios[0];

    let index: number;

    if (typeof checkedIndex === 'number') {
      index = checkedIndex + shift;
    } else {
      index = shift;
    }

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
    const checkedRadio = radios.find((radio: KemetRadio) => radio.checked) as KemetRadio;

    this.radios.forEach((radio: KemetRadio) => {
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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-radios': KemetRadios
  }
}

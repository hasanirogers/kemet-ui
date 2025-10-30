import { html, LitElement } from 'lit';
import {
 customElement, property, query, state,
} from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { stylesBase } from '../styles/elements/multi-input';
import { emitEvent } from '../utilities/events';
import { EnumKeyCodes as EnumKeys, EnumStatuses, TypeRoundedSizes, TypeStatus } from '../utilities/constants';
import KemetField from './field';
import KemetCombo from './combo';

export interface InterfaceSelections {
  element: HTMLUListElement;
  text: string;
  id: string;
}

/**
 * @since 3.1.0
 * @status stable
 *
 * @tagname kemet-multi-input
 * @summary An input element that accepts multiple items from a combo.
 *
 * @prop {string} slug - Used for the id of the input. Should match the slug used in a control if applicable.
 * @prop {string} name - The name of the input
 * @prop {string} placeholder - The placeholder attribute
 * @prop {boolean} disabled - The disable attribute
 * @prop {boolean} required - The required attribute
 * @prop {string} value - The input's value
 * @prop {boolean} invalid - States whether the input is invalid
 * @prop {string} status - The status of the input
 * @prop {boolean} validateOnBlur - Activates validation on blur
 * @prop {TypeRoundedSizes} rounded - Displays rounded corners
 * @prop {boolean} filled - Displays a filled input box
 * @prop {ValidityState} validity - The HTML5 validity object.

 *
 * @csspart input
 *
 * @cssproperty --kemet-input-height - The height of the input.
 * @cssproperty --kemet-input-padding - The padding on the input.
 * @cssproperty --kemet-input-border - The border of the input.
 * @cssproperty --kemet-input-border-color-error -  The border of the error state.
 * @cssproperty --kemet-input-border-color-success - The border of the success state.
 * @cssproperty --kemet-input-border-color-warning - The border of the warning state.
 * @cssproperty --kemet-input-icon-left-padding - The icon-left padding.
 * @cssproperty --kemet-input-icon-right-padding - The icon-right padding.
 * @cssproperty --kemet-input-border-radius-rounded - The border radius on rounded.
 * @cssproperty --kemet-input-border-filled - The border on filled.
 * @cssproperty --kemet-input-color-filled - The color on filled.
 * @cssproperty --kemet-input-background-color-filled - The background-color on filled.
 * @cssproperty --kemet-input-background-color-error - The error state background color.
 * @cssproperty --kemet-input-background-color-success - The success state background color.
 * @cssproperty --kemet-input-background-color-warning - The warning state background color.
 *
 * @event kemet-input-focused - Fires when the input receives and loses focus
 * @event kemet-input-status Fires when there's a change in status. This event includes an object that reports: 1) the status. 2) HTML5 validity object. 3) the component element.
 * Use the validity object to support custom validation messages.
 * @event kemet-input-input - Fires when the input receives input
 *
 */

@customElement('kemet-multi-input')
export default class KemetMultiInput extends LitElement {
  static styles = [stylesBase];

  @property({ type: String })
  slug: string = 'input';

  @property({ type: String })
  placeholder: string = '';

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: Boolean })
  filled: boolean = false;

  @property({ reflect: true })
  rounded: TypeRoundedSizes;

  @property({ type: String })
  name: string = 'input';

  @property({ reflect: true })
  status: TypeStatus = EnumStatuses.Standard;

  @property({ type: Boolean })
  required: boolean = false;

  @property({ type: Boolean })
  invalid: boolean;

  @property({ type: Boolean, attribute: 'validate-on-blur' })
  validateOnBlur: boolean = false;

  @state()
  value: string = '';

  @state()
  selections: InterfaceSelections[] = [];

  @state()
  paddingLeft: number;

  @state()
  field: KemetField;

  @state()
  combo: KemetCombo;

  @query('[part=chips]')
  chips: { offsetWidth: number; };

  @query('input')
  input: HTMLInputElement;

  firstUpdated() {
    // elements
    this.field = this.closest('kemet-field');
    this.combo = this.field.querySelector('kemet-combo');

    document.addEventListener('click', this.handleComboClose.bind(this));

    if (this.combo) {
      this.combo.addEventListener('kemet-selection', (event: CustomEvent) => this.addComboItem(event));
    }
  }

  updated() {
    if (this.chips) this.calculatePadding();
  }

  render() {
    return html`
      <div>
        <input
          part="input"
          id=${this.slug}
          name=${this.name}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @change=${this.handleChange}
          @invalid=${this.handleInvalid}
          @keydown=${this.handleKeydown}
          .value=${live(this.value)}
        />
         ${this.makeSelections()}
      </div>
    `;
  }

  /**
   * Handles when a selection is made from a combo
   * @private
   * @param event
   */

  addComboItem(event: CustomEvent) {
    this.value = '';
    this.status = EnumStatuses.Standard;
    const isPresent = this.selections.find(selection => selection.id === event.detail.id);
    if (!isPresent) this.selections = [...this.selections, event.detail];
  }

  /**
   * Handles when the input receives input
   * @private
   */
  handleInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    emitEvent(this, 'kemet-input', {
      element: this,
      validity: this.input.validity,
      status: this.status,
      value: (event.target as HTMLInputElement).value
    });
  }

  /**
   * Handles when the input is focused
   */
  handleFocus() {
    emitEvent(this, 'kemet-focus', this);
  }

  handleBlur() {
    emitEvent(this, 'kemet-blur', this);
    if (this.validateOnBlur) {
      this.input.checkValidity();
    }
  }

  handleChange(event: Event) {
    emitEvent(this, 'kemet-change', {
      element: this,
      validity: this.input.validity,
      status: this.status,
      value: (event.target as HTMLInputElement).value
    });
  }

  handleInvalid(event: Event) {
    this.status = EnumStatuses.Error;
    emitEvent(this, 'kemet-invalid', {
      element: this,
      validity: this.input.validity,
      status: this.status,
      value: (event.target as HTMLInputElement).value
    });
  }

  /**
   * Renders the chips from the selections of the combo
   * @private
   */
  makeSelections() {
    const selections = this.selections.map(selection => html`
      <li part="chip">
        <span>${selection.text}</span>
        <button @click=${this.handleRemoveChip}>&times;</button>
      </li>
    `);

    if (this.selections) {
      return html`<ul part="chips">${selections}</ul>`;
    }

    return null;
  }

  /**
   * calculates padding to properly place the cursor of the input
   * @private
   */
  calculatePadding() {
    this.paddingLeft = this.chips.offsetWidth + 16;
  }

  /**
   * handle removing a chip from the selections
   * @private
   */
  handleRemoveChip(event) {
    const text = event.target.closest('[part=chip]').querySelector('span').innerText;
    this.selections = this.selections.filter(selection => selection.text !== text);
  }

  handleComboClose(event: MouseEvent) {
    if (event.target !== this && this.combo) {
      this.combo.show = false;
    }
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === EnumKeys.ESCAPE) {
      this.combo.show = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-multi-input': KemetMultiInput
  }
}

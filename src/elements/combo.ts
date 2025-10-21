import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../utilities/events';
import { stylesBase } from '../styles/elements/combo';
import type KemetField from './field';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-combo
 * @summary Allows the user to select a choice filtered through an Input. May only be used as a component of Field.
 *
 * @prop {string} slug - Uniquely identifies the component. Should match the slug used in a control.
 * @prop {array} options - An array of items listed for the combo box
 * @prop {boolean} show - Controls the display of the combo box
 *
 * @csspart combobox - The combo's container element.
 * @csspart listbox - The list element in the combo.
 *
 * @cssproperty --kemet-combo-width - The width of the combo box.
 * @cssproperty --kemet-combo-margin - The margins on the combo box.
 * @cssproperty --kemet-combo-max-height - The max height of the combo box.
 * @cssproperty --kemet-combo-border - The border of the combo box.
 * @cssproperty --kemet-combo-border-radius - The border radius of the combo box.
 * @cssproperty --kemet-combo-background-color - The background color of the combo box.
 * @cssproperty --kemet-combo-shadow - The shadow of the combo box.
 * @cssproperty --kemet-combo-hover-color - The hover item's text color.
 * @cssproperty --kemet-combo-hover-background-color - The hover item's background color.
 *
 * @event kemet-combo-selection - Fires when a selection has been made
 *
 */

@customElement('kemet-combo')
export default class KemetCombo extends LitElement {
  static styles = [stylesBase];

  @property({ type: String })
  slug: string;

  @property({ type: Array })
  options: string[] = [];

  @property({ type: Boolean, reflect: true })
  show: boolean;

  @state()
  filteredOptions: string[];

  @state()
  field: KemetField;

  @state()
  input: HTMLInputElement;

  firstUpdated() {
    // standard properties
    this.field = this.closest('kemet-field');
    this.input = this.field.querySelector('[slot="input"]');

    // managed properties
    this.slug = this.field.slug || 'slug';

    // events listeners
    this.input.addEventListener('kemet-input-input', this.handleInput.bind(this));
    this.input.addEventListener('kemet-multi-input-focus', this.handleFocus.bind(this));
    this.input.addEventListener('keydown', event => this.handleInputKeyDown(event));
  }

  render() {
    return html`
      <div
        role="combobox"
        part="combobox"
        aria-expanded=${this.show}
        aria-controls="${this.slug}-listbox"
        aria-haspopup="listbox"
        id="${this.slug}-combobox"
        aria-label="${this.field?.label}"
      >
        <ul role="listbox" aria-labelledby="${this.slug}-label" id="${this.slug}-listbox" part="listbox">
          ${this.makeOptions()}
        </ul>
      </div>
    `;
  }

  makeOptions() {
    if (this.input) {
      this.filteredOptions = this.options.filter(
        option => option.toLowerCase().indexOf(this.input.value?.toLowerCase()) !== -1,
      );

      return this.filteredOptions.map(
        (option, index) => html`<li
            id="${this.slug}-option-${index}"
            role="option"
            tabindex="0"
            aria-selected="false"
            @click=${(event: KeyboardEvent) => this.handleSelection(event)}
            @keydown=${(event: KeyboardEvent) => this.handleOptionKeyDown(event)}
          >
            ${option}
          </li>`,
      );
    }

    return null;
  }

  handleInput(event: CustomEvent) {
    this.makeOptions();
    this.show = event.detail.length > 0;
  }

  handleFocus() {
    this.makeOptions();
    this.show = true;
  }

  handleSelection(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    this.input.value = target.innerText;
    this.show = false;

    emitEvent(this, 'kemet-combo-selection', {
      element: target,
      text: target.innerText,
      id: target.getAttribute('id'),
    });
  }

  handleOptionKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;

    if (event.code === 'ArrowDown') {
      const next = target.nextElementSibling as HTMLElement;

      if (next) {
        next.focus();
      } else {
        this.shadowRoot.querySelector('li').focus();
      }
    }

    if (event.code === 'ArrowUp') {
      const previous = target.previousElementSibling as HTMLElement;
      const lastChild = this.shadowRoot.querySelector('li:last-child') as HTMLElement;

      if (previous) {
        previous.focus();
      } else {
        lastChild.focus();
      }
    }

    if (event.code === 'Escape' || event.code === 'Tab') {
      this.show = false;
      this.input.focus();
    }

    if (event.code === 'Enter' || event.code === 'Space') {
      this.handleSelection(event);
    }
  }

  handleInputKeyDown(event: KeyboardEvent) {
    if (event.code === 'ArrowDown') {
      this.shadowRoot.querySelector('li').focus();
    }

    if (event.code === 'Escape') {
      this.show = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-combo': KemetCombo
  }
}

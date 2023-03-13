import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events.js';
import { KemetFieldInterface } from '../kemet-field/types';
import { stylesBase } from './styles';

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
 * @cssproperty --kemet-combo-width - The width of the combo box. Default: calc(100% - 2px).
 * @cssproperty --kemet-combo-margin - The margins on the combo box. Default: 1rem auto.
 * @cssproperty --kemet-combo-max-height - The max height of the combo box. Default: calc(5 * 3rem).
 * @cssproperty --kemet-combo-border - The border of the combo box. Default: 1px solid var(--kemet-color-primary).
 * @cssproperty --kemet-combo-border-radius - The border radius of the combo box. Default: var(--kemet-border-radius).
 * @cssproperty --kemet-combo-background-color - The background color of the combo box. Default: var(--kemet-color-white-to-black).
 * @cssproperty --kemet-combo-shadow - The shadow of the combo box. Default: var(--kemet-elevation-layer5).
 * @cssproperty --kemet-combo-hover-color - The hover item's text color. Default:  var(--kemet-color-white).
 * @cssproperty --kemet-combo-hover-background-color - The hover item's background color. Default: var(--kemet-color-primary).
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
  options: any[] = [];

  @property({ type: Boolean, reflect: true })
  show: boolean;

  @state()
  filteredOptions: any[];

  @state()
  field: KemetFieldInterface;

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

      const options = this.filteredOptions.map(
        (option, index) => html`<li
            id="${this.slug}-option-${index}"
            role="option"
            tabindex="0"
            aria-selected="false"
            @click=${event => this.handleSelection(event)}
            @keydown=${event => this.handleOptionKeyDown(event)}
          >
            ${option}
          </li>`,
      );

      return options;
    }

    return null;
  }

  handleInput(event) {
    this.makeOptions();

    if (event.detail.length > 0) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  handleSelection(event) {
    this.input.value = event.target.innerText;
    this.show = false;

    emitEvent(this, 'kemet-combo-section', {
      element: event.target,
      text: event.target.innerText,
      id: event.target.getAttribute('id'),
    });
  }

  handleOptionKeyDown(event) {
    event.preventDefault();

    if (event.code === 'ArrowDown') {
      const next = event.target.nextElementSibling;

      if (next) {
        next.focus();
      } else {
        this.shadowRoot.querySelector('li').focus();
      }
    }

    if (event.code === 'ArrowUp') {
      const previous = event.target.previousElementSibling;
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

  handleInputKeyDown(event) {
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

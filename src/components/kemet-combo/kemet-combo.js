import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

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

export default class KemetCombo extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          opacity: 0;
          width: var(--kemet-combo-width, calc(100% - 2px));
          margin: var(--kemet-combo-margin, 1rem auto);
          pointer-events: none;
          display: block;
          position: relative;
          transition: opacity 0.3s ease-in-out;
        }

        :host([show]) {
          opacity: 1;
          pointer-events: auto;
        }

        ul {
          width: 100%;
          max-height: var(--kemet-combo-max-height, calc(5 * 3rem));
          position: absolute;
          z-index: 1;
          list-style: none;
          margin: 0;
          padding: 0;
          overflow-y: scroll;
          border: var(--kemet-combo-border, 1px solid var(--kemet-color-background));
          border-radius: var(--kemet-combo-border-radius, var(--kemet-border-radius));
          background-color: var(--kemet-combo-background-color, var(--kemet-color-white-to-black));
          box-shadow: var(--kemet-combo-shadow, var(--kemet-elevation-layer5));
        }
        li {
          line-height: 3rem;
          padding: 0 1.5rem;
          cursor: pointer;
        }
        li:hover,
        li:focus {
          color: var(--kemet-combo-hover-color, var(--kemet-color-white));
          outline: none;
          background-color: var(--kemet-combo-hover-background-color, var(--kemet-color-primary));
        }
      `,
    ];
  }

  static get properties() {
    return {
      slug: {
        type: String,
      },
      options: {
        type: Array,
      },
      /** @internal */
      filteredOptions: {
        type: Array,
      },
      show: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.options = [];
  }

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

      if (previous) {
        previous.focus();
      } else {
        this.shadowRoot.querySelector('li:last-child').focus();
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-combo') || customElements.define('kemet-combo', KemetCombo);

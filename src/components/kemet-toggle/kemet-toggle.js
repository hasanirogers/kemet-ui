import { html, css, LitElement } from 'lit';
import { FormSubmitController } from '../../utilities/controllers/forms.js';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-toggle
 * @summary A toggle switch for forms.
 *
 * @prop {string} name - The name on the input field
 * @prop {boolean} checked - Determines whether or not the toggle is checked
 * @prop {boolean} disabled - Determines whether or not the toggle is disabled
 * @prop {string} label - A description of the toggle's purpose
 * @prop {boolean} show - Determines whether or not to show text options
 * @prop {boolean} squared - Displays the toggle as squared instead of rounded
 * @prop {string} optionChecked - The checked option text
 * @prop {string} optionUnchecked - The unchecked option text
 *
 * @csspart label - The label element.
 * @csspart control - The control element.
 * @csspart text - The label text.
 * @csspart checked - The checked text.
 * @csspart unchecked - The unchecked text.
 *
 * @cssproperty --kemet-toggle-width - The width of the entire toggle. Default: 3.5rem.
 * @cssproperty --kemet-toggle-height - The height of the entire toggle. Default:2rem.
 * @cssproperty --kemet-toggle-handle-diameter - The diameter of the handle. Default: 1.6rem.
 * @cssproperty --kemet-toggle-track-border - The border of the track. Default: none.
 * @cssproperty --kemet-toggle-track-color - The color of the track. Default: var(--kemet-color-white).
 * @cssproperty --kemet-toggle-track-shadow - The shadow on the track. Default: inset 0 0.4rem 0.7rem 0 rgba(47, 47, 47, 0.35), inset 0 -0.2rem 0.4rem 0 var(--kemet-color-gray1).
 * @cssproperty --kemet-toggle-handle-border - The border on the handle. Default: none.
 * @cssproperty --kemet-toggle-handle-color - The color of the handle. Default: var(--kemet-color-primary).
 * @cssproperty --kemet-toggle-handle-shadow - The shadow on the handle. Default: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2).
 *
 * @event kemet-toggle-change - Fires when the toggle changes state
 *
 */

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
      name: {
        type: String,
      },
      checked: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
      },
      label: {
        type: String,
      },
      show: {
        type: Boolean,
      },
      squared: {
        type: Boolean,
      },
      optionChecked: {
        type: String,
        attribute: 'option-checked',
      },
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

    /** @internal */
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
    emitEvent(this, 'kemet-toggle-change', true);
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

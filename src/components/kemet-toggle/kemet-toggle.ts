import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FormSubmitController } from '../../utilities/controllers/forms';
import { emitEvent } from '../../utilities/misc/events';
import { stylesToggle } from './styles';

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
 * @cssproperty --kemet-toggle-width - The width of the entire toggle.
 * @cssproperty --kemet-toggle-height - The height of the entire toggle.
 * @cssproperty --kemet-toggle-handle-diameter - The diameter of the handle.
 * @cssproperty --kemet-toggle-track-border - The border of the track.
 * @cssproperty --kemet-toggle-track-color - The color of the track.
 * @cssproperty --kemet-toggle-track-shadow - The shadow on the track.
 * @cssproperty --kemet-toggle-handle-border - The border on the handle.
 * @cssproperty --kemet-toggle-handle-color - The color of the handle.
 * @cssproperty --kemet-toggle-handle-shadow - The shadow on the handle.
 *
 * @event kemet-toggle-change - Fires when the toggle changes state
 *
 */

@customElement('kemet-toggle')
export default class KemetToggle extends LitElement {
  formSubmitController: FormSubmitController;

  static styles = [stylesToggle];

  @property({ type: String })
  name: string = 'toggle-switch';

  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  label: string = '';

  @property({ type: Boolean })
  show: boolean = false;

  @property({ type: Boolean })
  squared: boolean = false;

  @property({ type: String, attribute: 'option-checked' })
  optionChecked: string = 'on';

  @property({ type: String, attribute: 'option-unchecked' })
  optionUnchecked: string = 'off';

  @state()
  value: string | boolean = this.checked ? this.optionChecked : this.optionUnchecked;

  constructor() {
    super();

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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-toggle': KemetToggle
  }
}

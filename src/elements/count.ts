import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../utilities/events';
import KemetField from '../elements/field';
import KemetInput from '../elements/input';
import KemetTextarea from '../elements/textarea';
import { EnumStatuses, TypeStatus } from '../utilities/constants';

export interface InterfaceKemetStatusChangeEvent {
  status: TypeStatus;
  validity: ValidityState;
  element: KemetField;
}

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-count
 * @summary Maintains a character count for an input field. Is to be used only in the component slot of a Field component.
 *
 * @prop {string} message - The text label shown to users
 * @prop {number} remaining - The number of characters remaining
 * @prop {number} limit - The maximum number of characters allowed
 * @prop {boolean} validateImmediately - Set to true if the field should validate as soon as the character limit is reached
 *
 * @cssproperty --kemet-count-font-size - The font size. Default: 90%.
 *
 * @event kemet-status-change - Fires when there's a change in status.
 *
 */

@customElement('kemet-count')
export default class KemetCount extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        font-size: var(--kemet-count-font-size, 90%);
        margin-top: 0.8rem;
      }
    `,
  ];

  @property({ type: String })
  message: string;

  @property({ type: Number })
  limit: number;

  @property({ type: Boolean, attribute: 'validate-immediately' })
  validateImmediately: boolean;

  @state()
  remaining: number;

  @state()
  field: KemetField;

  @state()
  inputSlot: KemetInput | KemetTextarea;

  @state()
  input: HTMLInputElement;

  @state()
  textarea: HTMLTextAreaElement;

  firstUpdated() {
    this.field = this.closest('kemet-field');
    this.inputSlot = this.field.querySelector('[slot="input"]');
    this.remaining = this.limit - this.field.length;

    this.field.addEventListener('kemet-input', (event: CustomEvent) => {
      this.remaining = this.limit - event.detail.value.length;

      const nativeElement = this.input || this.textarea;

      if (nativeElement) {
        if (this.remaining < 0) {
          if (this.validateImmediately) {
            this.inputSlot.status = EnumStatuses.Error;
            this.inputSlot.invalid = true;

            emitEvent(this, 'kemet-status-change', {
              status: EnumStatuses.Error,
              validity: nativeElement.validity,
              element: this.inputSlot,
            });
          }
        } else {
          this.inputSlot.status = EnumStatuses.Standard;
          nativeElement.checkValidity();

          emitEvent(this, 'kemet-status-change', {
            status: EnumStatuses.Standard,
            validity: nativeElement.validity,
            element: this.inputSlot,
          });
        }
      }
    });

    this.input = this.inputSlot.shadowRoot.querySelector('input');
    this.textarea = this.inputSlot.shadowRoot.querySelector('textarea');
  }

  render() {
    return html`${this.remaining} ${this.message}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-count': KemetCount
  }
}

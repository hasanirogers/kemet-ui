import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';
import { KemetFieldInterface } from '../kemet-field/types';
import { KemetInputInterface } from '../kemet-input/types';
import { KemetTextareaInterface } from '../kemet-textarea/types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-count
 * @summary Maintains a character count for a input field. Is to be used only in the component slot of a Field component.
 *
 * @prop {string} message - The text label shown to users
 * @prop {number} remaining - The number of characters remaining
 * @prop {number} limit - The maximum number of characters allowed
 * @prop {boolean} validateImmediately - Set to true if the field should validate as soon as the character limit is reached
 *
 * @cssproperty --kemet-count-font-size - The font size. Default: 90%.
 *
 * @event kemet-count-status - Fires when there's a change in status.
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
  remaining: number;

  @property({ type: Number })
  limit: number;

  @property({ type: Boolean, attribute: 'validate-immediately' })
  validateImmediately: boolean;

  @state()
  field: KemetFieldInterface;

  @state()
  inputSlot: KemetInputInterface | KemetTextareaInterface;

  @state()
  input: HTMLInputElement;

  @state()
  textarea: HTMLTextAreaElement;

  firstUpdated() {
    this.field = this.closest('kemet-field');
    this.inputSlot = this.field.querySelector('[slot="input"]');

    this.remaining = this.limit - this.field.length;

    this.field.addEventListener('kemet-field-input', (event: CustomEvent) => {
      this.remaining = this.limit - event.detail;

      const nativeElement = this.input || this.textarea;

      if (nativeElement) {
        if (this.remaining < 0) {
          // nativeElement.validity.passedLimit = true;

          if (this.validateImmediately) {
            this.inputSlot.status = 'error';
            this.inputSlot.invalid = true;

            emitEvent(this, 'kemet-count-status', {
              status: 'error',
              validity: nativeElement.validity,
              element: this.inputSlot,
            });
          }
        } else {
          this.inputSlot.status = 'standard';
          nativeElement.checkValidity();

          emitEvent(this, 'kemet-count-status', {
            status: 'standard',
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


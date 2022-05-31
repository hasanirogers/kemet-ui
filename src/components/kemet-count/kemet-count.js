import { html, css, LitElement } from 'lit';

export default class KemetCount extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          font-size: var(--kemet-count-font-size, 90%);
          margin-top: 0.8rem;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * The text label shown to users
       */
      message: {
        type: String,
      },
      /**
       * The number of characters remaining
       */
      remaining: {
        type: Number,
      },
      /**
       * The maximum number of characters allowed
       */
      limit: {
        type: Number,
      },
      /**
       * Set to true if the field should validate as soon as the character limit is reached
       */
      validateImmediately: {
        type: Boolean,
        attribute: 'validate-immediately',
      },
    };
  }

  firstUpdated() {
    this.field = this.closest('kemet-field');
    this.inputSlot = this.field.querySelector('[slot="input"]');

    this.remaining = this.limit - this.field.length;

    this.field.addEventListener('kemet-field-input', (event) => {
      this.remaining = this.limit - event.detail;

      const nativeElement = this.input || this.textarea;

      if (nativeElement) {
        if (this.remaining < 0) {
          nativeElement.validity.passedLimit = true;

          if (this.validateImmediately) {
            this.inputSlot.status = 'error';
            this.inputSlot.invalid = true;

            /**
             * Fires when there's a change in status.
             */
            this.dispatchEvent(
              new CustomEvent('kemet-count-status', {
                bubbles: true,
                composed: true,
                detail: {
                  status: 'error',
                  validity: nativeElement.validity,
                  element: this.inputSlot,
                },
              }),
            );
          }
        } else {
          this.inputSlot.status = 'standard';
          nativeElement.checkValidity();

          /**
           * Fires when there's a change in status.
           */
          this.dispatchEvent(
            new CustomEvent('kemet-count-status', {
              bubbles: true,
              composed: true,
              detail: {
                status: 'standard',
                validity: nativeElement.validity,
                element: this.inputSlot,
              },
            }),
          );
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-count') || customElements.define('kemet-count', KemetCount);

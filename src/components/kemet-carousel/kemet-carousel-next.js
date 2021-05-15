import { html, css, LitElement } from 'lit';

export class KemetCarouselNext extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `,
    ];
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  render() {
    return html`
      <slot @keyup=${() => this.next()} @click=${() => this.next()}></slot>
    `;
  }

  next() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-next', {
        bubbles: true,
        composed: true,
        detail: this,
      }));
    }
  }
}

window.customElements.define('kemet-carousel-next', KemetCarouselNext);

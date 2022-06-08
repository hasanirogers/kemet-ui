import { html, css, LitElement } from 'lit';

export class KemetCarouselFirst extends LitElement {
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
      <span tabindex="0" @keyup=${() => this.first()} @click=${() => this.first()}>
        <slot></slot>
      </span>
    `;
  }

  first() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-first', {
        bubbles: true,
        composed: true,
        detail: this,
      }));
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-first') || customElements.define('kemet-carousel-first', KemetCarouselFirst);

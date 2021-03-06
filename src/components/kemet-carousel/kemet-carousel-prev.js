import { html, css, LitElement } from 'lit';

export class KemetCarouselPrev extends LitElement {
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
      <span tabindex="0" @keyup=${() => this.prev()} @click=${() => this.prev()}>
        <slot></slot>
      </span>
    `;
  }

  prev() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-prev', {
        bubbles: true,
        composed: true,
        detail: this,
      }));
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-prev') || customElements.define('kemet-carousel-prev', KemetCarouselPrev);

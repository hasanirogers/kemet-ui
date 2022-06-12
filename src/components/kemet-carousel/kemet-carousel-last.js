import { html, css, LitElement } from 'lit';

export class KemetCarouselLast extends LitElement {
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
      <span tabindex="0" @keyup=${() => this.last()} @click=${() => this.last()}>
        <slot></slot>
      </span>
    `;
  }

  last() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-last', {
        bubbles: true,
        composed: true,
        detail: this,
      }));
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-last') || customElements.define('kemet-carousel-last', KemetCarouselLast);

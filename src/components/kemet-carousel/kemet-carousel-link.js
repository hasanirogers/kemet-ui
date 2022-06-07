import { html, css, LitElement } from 'lit';

export default class KemetCarouselLink extends LitElement {
  static get properties() {
    return {
      slide: {
        type: Number,
        reflect: true,
      },
      selected: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [
      css`
        :host([selected]) {
          color: var(--kemet-color-primary);
        }

        :host(:not([selected])) {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `,
    ];
  }

  render() {
    return html`
      <span tabindex="0" @keyup=${() => this.changed()} @click=${() => this.changed()}>
        <slot></slot>
      </span>
    `;
  }

  changed() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-link', {
        bubbles: true,
        composed: true,
        detail: this,
      }));
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-link') || customElements.define('kemet-carousel-link', KemetCarouselLink);

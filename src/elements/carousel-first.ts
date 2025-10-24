import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../utilities/events';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-first
 * @summary A link to the first slide in the carousel.
 *
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-first-activated
 *
 */

@customElement('kemet-carousel-first')
export default class KemetCarouselFirst extends LitElement {
  static styles = [
    css`
      button {
        cursor: pointer;
        border: 0;
        background: transparent;
      }

      :host([disabled]) button {
        cursor: not-allowed;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  render() {
    return html`
      <button @keyup=${event => this.handleKeyUp(event)} @click=${() => this.activated()}>
        <slot></slot>
      </button>
    `;
  }

  activated() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-first-activated', this);
    }
  }

  handleKeyUp(event) {
    if (event.code === 'Enter') {
      this.activated();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-first': KemetCarouselFirst
  }
}

import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';

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
 * @event kemet-carousel-first
 *
 */

@customElement('kemet-carousel-first')
export default class KemetCarouselFirst extends LitElement {
  static styles = [
    css`
      :host {
        cursor: pointer;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  render() {
    return html`
      <span tabindex="0" @keyup=${() => this.first()} @click=${() => this.first()}>
        <slot></slot>
      </span>
    `;
  }

  first() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-first', this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-first': KemetCarouselFirst
  }
}

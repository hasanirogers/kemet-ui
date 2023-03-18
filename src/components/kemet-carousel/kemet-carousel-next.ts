import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-next
 * @summary A link to the next slide in the carousel.
 *
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-carousel-next
 *
 */

@customElement('kemet-carousel-next')
export default class KemetCarouselNext extends LitElement {
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
      <span tabindex="0" @keyup=${() => this.next()} @click=${() => this.next()}>
        <slot></slot>
      </span>
    `;
  }

  next() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-next', this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-next': KemetCarouselNext
  }
}

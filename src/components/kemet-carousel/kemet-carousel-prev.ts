import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-prev
 * @summary A link to the previous slide in the carousel.
 *
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-carousel-prev
 *
 */

@customElement('kemet-carousel-prev')
export class KemetCarouselPrev extends LitElement {
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
      <span tabindex="0" @keyup=${() => this.prev()} @click=${() => this.prev()}>
        <slot></slot>
      </span>
    `;
  }

  prev() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-prev', this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-prev': KemetCarouselPrev
  }
}

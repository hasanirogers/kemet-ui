import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-last
 * @summary A link to the last slide in the carousel.
 *
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-carousel-last
 *
 */

@customElement('kemet-carousel-last')
export default class KemetCarouselLast extends LitElement {
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
      <span tabindex="0" @keyup=${() => this.last()} @click=${() => this.last()}>
        <slot></slot>
      </span>
    `;
  }

  last() {
    if (!this.disabled) {
      emitEvent(this, 'kemet-carousel-last', this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-last': KemetCarouselLast
  }
}

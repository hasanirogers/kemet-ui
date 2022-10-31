import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

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

export default class KemetCarouselNext extends LitElement {
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
      disabled: { type: Boolean, reflect: true },
    };
  }

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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-next') || customElements.define('kemet-carousel-next', KemetCarouselNext);

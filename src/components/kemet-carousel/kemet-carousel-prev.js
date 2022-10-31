import { html, css, LitElement } from 'lit';
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
      disabled: { type: Boolean, reflect: true },
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
      emitEvent(this, 'kemet-carousel-prev', this);
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-prev') || customElements.define('kemet-carousel-prev', KemetCarouselPrev);

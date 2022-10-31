import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

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

export class KemetCarouselFirst extends LitElement {
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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-first') || customElements.define('kemet-carousel-first', KemetCarouselFirst);

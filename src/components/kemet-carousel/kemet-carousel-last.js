import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-last
 * @summary A link to the last slide in the carousel..
 *
 * @prop {boolean} disabled - Deactivates the button.
 *
 * @event kemet-carousel-last
 *
 */

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
      disabled: { type: Boolean, reflect: true },
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
      emitEvent(this, 'kemet-carousel-last', this);
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-carousel-last') || customElements.define('kemet-carousel-last', KemetCarouselLast);

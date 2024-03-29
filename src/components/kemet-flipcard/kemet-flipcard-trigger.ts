import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-flipcard-trigger
 * @summary Triggers a flipcard component to flip.
 *
 * @event kemet-flipcard-flipped - Fires when a flipcard is flipped
 */

@customElement('kemet-flipcard-trigger')
export default class KemetFlipcardTrigger extends LitElement {
  static styles = [
    css`
      :host {
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      <slot tabindex="0" @click=${() => this.trigger()} @keypress=${(event: KeyboardEvent) => this.handleKeyup(event)}></slot>
    `;
  }

  trigger() {
    emitEvent(this, 'kemet-flipcard-flipped', this);
  }

  handleKeyup(event: KeyboardEvent) {
    event.preventDefault();

    if (event.key === 'Enter') {
      this.trigger();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-flipcard-trigger': KemetFlipcardTrigger
  }
}

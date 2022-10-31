import { LitElement, html, css } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-flipcard-trigger
 * @summary Triggers a flipcard component to flip.
 *
 * @event kemet-flipcard-flipped - Fires when a flipcard is flipped
 */

export default class KemetFlipcardTrigger extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          cursor: pointer;
        }
      `,
    ];
  }

  firstUpdated() {
    this.keyCodes = {
      ENTER: 13,
      SPACE: 32,
    };
  }

  render() {
    return html`
      <slot tabindex="0" @click=${() => this.trigger()} @keypress=${event => this.handleKeyup(event)}></slot>
    `;
  }

  trigger() {
    emitEvent(this, 'kemet-flipcard-flipped', this);
  }

  handleKeyup(event) {
    event.preventDefault();

    if (event.keyCode === this.keyCodes.ENTER) {
      this.trigger();
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-flipcard-trigger') || customElements.define('kemet-flipcard-trigger', KemetFlipcardTrigger);

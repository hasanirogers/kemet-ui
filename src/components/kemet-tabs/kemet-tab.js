import { LitElement, html, css } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-tab
 * @summary A tab in a set of tabs.
 *
 * @prop {boolean} selected - Is true when the tab is selected
 * @prop {string} link - Links to a panel name
 * @prop {boolean} closable - Determines if the tab can be closed
 *
 * @cssproperty --kemet-tab-padding - The padding of the tab. Default: 1rem.
 * @cssproperty --kemet-tab-color - The color of the selected tab. Default: var(--kemet-color-background).
 *
 * @event kemet-tab-selected - Fires when a tab is selected
 * @event kemet-tab-close - Fires when the tab should close
 *
 */

export default class KemetTab extends LitElement {
  static get styles() {
    return css`
      :host {
        cursor: pointer;
        display: inline-flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        padding: var(--kemet-tab-padding, 1rem);
      }

      :host([selected]) {
        cursor: auto;
        color: var(--kemet-tab-color, var(--kemet-color-background));
      }

      kemet-icon {
        cursor: pointer;
        margin-left: 0.5rem;
      }
    `;
  }

  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflect: true,
      },
      link: {
        type: String,
      },
      closable: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();

    // property defaults
    this.selected = false;
  }

  firstUpdated() {
    this.addEventListener('click', this.select.bind(this));
  }

  updated() {
    this.a11y();
  }

  render() {
    return html`
      <slot></slot>
      ${this.makeCloseable()}
    `;
  }

  select() {
    emitEvent(this, 'kemet-tab-selected', this);
  }

  a11y() {
    this.setAttribute('role', 'tab');

    if (this.selected) {
      this.setAttribute('aria-selected', 'true');
      this.setAttribute('tabindex', '0');
    } else {
      this.setAttribute('aria-selected', 'false');
      this.setAttribute('tabindex', '-1');
    }
  }

  makeCloseable() {
    if (this.closable) {
      return html`<kemet-icon icon="x-lg" @click=${() => this.handleClosable()}></kemet-icon>`;
    }

    return null;
  }

  handleClosable() {
    emitEvent(this, 'kemet-tab-close', this);
  }
}

customElements.define('kemet-tab', KemetTab);

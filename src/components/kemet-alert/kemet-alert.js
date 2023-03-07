import { html, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';
import { stylesBase } from './styles.js';

/**
 * @since 1.4.0
 * @status stable
 *
 * @tagname kemet-alert
 * @summary Calls out important messages and notifications.
 *
 * @prop {boolean} opened - Determines if the alert is opened or not.
 * @prop {boolean} reveal - Fades in the alert when opened.
 * @prop {boolean} closable - Adds a close button to the alert.
 * @prop {string} borderStatus - Adds a border that indicates the status.
 * @prop {boolean} hidden - Hides the element from document flow.
 * @prop {string} overlay - Fixes the alert over content in specified position.
 *
 * @slot default - The contents of the alert.
 *
 * @event kemet-alert-opened - Fires when alert is opened.
 * @event kemet-alert-closed - Fires when alert is closed.
 *
 * @csspart close - Container for the close button.
 *
 * @cssproperty --kemet-alert-padding - The padding on the alert. Default: 1rem.
 * @cssproperty --kemet-alert-border-thickness - The thickness of the border. Default: 4px.
 * @cssproperty --kemet-alert-status-color - The status color. Default: inherit.
 * @cssproperty --kemet-alert-gap - The alert's gap. Default: var(--kemet-alert-padding).
 * @cssproperty --kemet-alert-align-items - The alert's alignment. Default: center.
 * @cssproperty --kemet-alert-border - The border around the alert. Default: 1px solid var(--kemet-color-gray2).
 *
 */

export default class KemetAlert extends LitElement {
  static get styles() {
    return [stylesBase];
  }

  static get properties() {
    return {
      opened: { type: Boolean, reflect: true },
      reveal: { type: Boolean, reflect: true },
      closable: { type: Boolean, reflect: true },
      borderStatus: { type: String, reflect: true, attribute: 'border-status' },
      hidden: { type: Boolean, reflect: true },
      overlay: { type: String, reflect: true },
    };
  }

  shouldUpdate(prevProps) {
    if (prevProps.has('opened') && !prevProps.get('opened')) {
      this.hidden = false;
      this.reveal = true;
    }

    return true;
  }

  firstUpdated() {
    this.handleMotion();
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      emitEvent(this, 'kemet-alert-opened', this);
    } else {
      emitEvent(this, 'kemet-alert-closed', this);
    }
  }

  render() {
    return html`
      <slot name="icon"></slot>
      <div>
        <slot></slot>
      </div>
      <div class="close" part="close">
        ${this.makeCloseBtn()}
      </div>
    `;
  }

  makeCloseBtn() {
    if (this.closable) {
      return html`<kemet-icon icon="x-lg" @click=${() => { this.opened = false; }}></kemet-icon>`;
    }

    return null;
  }

  handleMotion() {
    this.addEventListener('transitionend', () => {
      if (!this.opened) {
        this.hidden = true;
      }
    });

    this.addEventListener('animationend', () => {
      this.reveal = false;
    });
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-alert') || customElements.define('kemet-alert', KemetAlert);
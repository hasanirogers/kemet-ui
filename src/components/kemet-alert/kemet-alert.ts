import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';
import { stylesBase } from './styles';
import { TypeStatus } from './types';

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
 * @cssproperty --kemet-alert-padding - The padding on the alert.
 * @cssproperty --kemet-alert-border-thickness - The thickness of the border.
 * @cssproperty --kemet-alert-status-color - The status color. Default: inherit.
 * @cssproperty --kemet-alert-align-items - The alert's alignment.
 * @cssproperty --kemet-alert-border - The border around the alert.
 *
 */

@customElement('kemet-alert')
export default class KemetAlert extends LitElement {
  static styles = [stylesBase];

  @property({ type: Boolean, reflect: true })
  opened: boolean;

  @property({ type: Boolean, reflect: true })
  reveal: boolean;

  @property({ type: Boolean, reflect: true })
  closable: boolean;

  @property({ type: String, reflect: true })
  status: TypeStatus;

  @property({ type: String, reflect: true, attribute: 'border-status' })
  borderStatus: string;

  @property({ type: Boolean, reflect: true })
  hidden: boolean;

  @property({ type: String, reflect: true })
  overlay: string;

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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-alert': KemetAlert
  }
}

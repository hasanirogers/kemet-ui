import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../utilities/events';
import { stylesBase } from '../styles/elements/alert';
import { EnumStatuses, TypeRoundedSizes, TypeStatus } from '../utilities/constants';

export const overlayPositions = ['fixed', 'top-full', 'bottom-full', 'top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;
export enum EnumOverlayPositions {
  FIXED = 'fixed',
  TOP_FULL = 'top-full',
  BOTTOM_FULL = 'bottom-full',
  TOP_RIGHT = 'top-right',
  TOP_LEFT = 'top-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_LEFT = 'bottom-left'
}
export type TypeOverlayPositions = typeof overlayPositions[number];

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
 * @prop {TypeDirection} borderStatus - Adds a border that indicates the status.
 * @prop {boolean} hidden - Hides the element from document flow.
 * @prop {TypeOverlayPositions} overlay - Fixes the alert over content in specified position.
 * @prop {TypeVariants} variant - The style of the alert.
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
  status: TypeStatus = EnumStatuses.Standard;

  @property({ type: String, reflect: true, attribute: 'border-status' })
  borderStatus: string;

  @property({ type: Boolean, reflect: true })
  hidden: boolean;

  @property({ type: String, reflect: true })
  overlay: string;

  @property({ type: String, reflect: true })
  rounded: TypeRoundedSizes;

  shouldUpdate(prevProps: Map<string, never>) {
    if (prevProps.has('opened') && !prevProps.get('opened')) {
      this.hidden = false;
      this.reveal = true;
    }

    return true;
  }

  firstUpdated() {
    this.handleMotion();
  }

  updated(prevProps: Map<string, never>) {
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
      return html`<kemet-icon-bootstrap icon="x-lg" @click=${() => { this.opened = false; }}></kemet-icon-bootstrap>`;
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

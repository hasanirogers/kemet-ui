import { html, LitElement } from 'lit';
import {
  customElement, property, query, queryAll, state,
} from 'lit/decorators.js';
import { createPopper } from '@popperjs/core/dist/esm';
import { emitEvent } from '../../utilities/misc/events';
import { TypeFireOn, TypePlacement } from './types';
import { stylesPopper } from './styles';
// import { stylesPopperFade, stylesPopperScale, stylesPopperSlide, stylesPopperFall, stylesPopperFlipHorizontal, stylesPopperFlipVertical, stylesPopperSign, stylesPopperSuperScaled } from './styles.effects';

/**
 * @since 2.0.0
 * @status stable
 *
 * @tagname kemet-popper
 * @summary A wrapper component for the popper.js lib.
 *
 * @event kemet-popper-opened - Fires when the popper opens
 * @event kemet-popper-closed - Fires when the popper closes
 *
 * @slot trigger - Controls opening and closing the popover.
 * @slot content - The contents of the popover.
 *
 * @csspart trigger - Contains the trigger for the popover.
 * @csspart content - Contains the content for the popover.
 *
 * @cssproperty --kemet-popper-padding - The padding in the content slot.
 * @cssproperty --kemet-popper-border-color - The border color of the content.
 * @cssproperty --kemet-popper-background-color - The background color of the content.
 *
 * @prop {TypePlacement} placement - The position of the popper over the trigger.
 * @prop {boolean} opened - Determines if the Popper is opened or closed
 * @prop {TypeFireOn} fireOn - Activate the Popper on Click or Hover
 * @prop {string} strategy - Sets the strategy option in Popper's api
 * @prop {number} skidding - Sets an offset to the Popper from the trigger
 * @prop {number} distance - Sets spacing between the Popper and the trigger
 *
 */

@customElement('kemet-popper')
export default class KemetPopper extends LitElement {
  static styles = [stylesPopper];

  @property({ type: String, reflect: true })
  placement: TypePlacement = 'top';

  @property({ type: Boolean, reflect: true })
  opened: boolean;

  @property({ type: String, attribute: 'fire-on' })
  fireOn: TypeFireOn = 'hover';

  @property({ type: String })
  strategy: 'fixed' | 'absolute' = 'fixed';

  @property({ type: Number })
  skidding: number = 0;

  @property({ type: Number })
  distance: number = 0;

  /** @internal */
  @state()
  popperInstance: { setOptions: (arg0: { placement: TypePlacement; strategy: 'fixed' | 'absolute'; modifiers: { name: string; options: { offset: number[]; }; }[]; }) => void; };

  /** @internal */
  @query('#trigger')
  triggerElement: HTMLElement;

  /** @internal */
  @query('#content')
  contentElement: HTMLElement;

  /** @internal */
  @queryAll('body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable], kemet-popper-close')
  focusableElements: NodeListOf<Element>;

  constructor() {
    super();
    this.addEventListener('kemet-popper-close-btn', () => { this.opened = false; });
  }

  firstUpdated() {
    if (this.fireOn === 'click') {
      this.focusableElements.forEach((element) => {
        element.addEventListener('keydown', (event: KeyboardEvent) => this.handleFocusableDown(event));
      });
    }
  }

  updated(prevProps: Map<string, never>) {
    this.refresh();

    if (!prevProps.get('opened') && this.opened === true) {
      emitEvent(this, 'kemet-popper-opened', this);
    }

    if (prevProps.get('opened') && this.opened === false) {
      emitEvent(this, 'kemet-popper-closed', this);
    }
  }

  render() {
    // eslint-disable-next-line lit-a11y/mouse-events-have-key-events
    return html`
      <div
        id="trigger"
        part="trigger"
        tabIndex="0"
        @click=${this.fireOn === 'click' ? (event: MouseEvent) => this.toggle(event) : null}
        @keyup=${this.fireOn === 'click' ? (event: KeyboardEvent) => this.handleKeyUp(event) : null}
        @mouseover=${this.fireOn !== 'click' ? () => { this.opened = true; } : null}
        @focus=${this.fireOn !== 'click' ? () => { this.opened = true; } : null}
        @mouseout=${this.fireOn !== 'click' ? () => { this.opened = false; } : null}
        @blur=${this.fireOn !== 'click' ? () => { this.opened = false; } : null}
      >
        <slot name="trigger"></slot>
      </div>
      <div
        id="content"
        @mouseover=${this.fireOn !== 'click' ? () => { this.opened = true; } : null}
        @mouseout=${this.fireOn !== 'click' ? () => { this.opened = false; } : null}
      >
        <slot name="content" @slotchange=${() => this.makePopper()}></slot>
      </div>
    `;
  }

  refresh() {
    this.popperInstance?.setOptions({
      placement: this.placement,
      strategy: this.strategy,
      modifiers: [
        { name: 'offset', options: { offset: [this.skidding, this.distance] } },
      ],
    });
  }

  makePopper() {
    this.popperInstance = createPopper(this.triggerElement, this.contentElement, {
      placement: this.placement,
      strategy: this.strategy,
      modifiers: [
        { name: 'offset', options: { offset: [this.skidding, this.distance] } },
      ],
    });
  }

  toggle(event: MouseEvent | KeyboardEvent) {
    const target = event.target as HTMLElement;
    const isSlotTrigger = target.getAttribute('slot') === 'trigger';
    const isPartTrigger = target.getAttribute('part') === 'trigger';

    if (isSlotTrigger || isPartTrigger) {
      this.opened = !this.opened;
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    event.preventDefault();

    if (event.key === 'Escape') {
      this.opened = false;
    }

    if (event.key === 'Enter' || event.code === 'Space') {
      this.toggle(event);
    }
  }

  handleFocusableDown(event: KeyboardEvent) {
    const firstFocusable = this.focusableElements[0] as HTMLElement;
    const lastFocusable = this.focusableElements[this.focusableElements.length - 1] as HTMLElement;

    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }
 }

declare global {
  interface HTMLElementTagNameMap {
    'kemet-popper': KemetPopper
  }
}

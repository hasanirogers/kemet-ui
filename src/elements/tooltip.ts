import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { stylesTooltip } from '../styles/elements/tooltip';
import { stylesPopper } from '../styles/elements/popper';
import {
  stylesPopperFade,
  stylesPopperScale,
  stylesPopperSlide,
  stylesPopperFall,
  stylesPopperFlipHorizontal,
  stylesPopperFlipVertical,
  stylesPopperSign,
  stylesPopperSuperScaled,
} from '../styles/elements/popper';
import KemetPopper from '../elements/popper';

/**
 * @since 2.0.0
 * @status stable
 *
 * @tagname kemet-tooltip
 * @summary A tooltip is a Popper component that displays a dynamic arrow pointing to the trigger.
 *
 * @slot trigger - Controls opening and closing the tooltip.
 * @slot content - The contents of the tooltip.
 *
 * @csspart trigger - Contains the trigger for the tooltip.
 * @csspart content - Contains the content for the tooltip.
 *
 * @cssproperty --kemet-tooltip-content-height - The height of the content.
 * @cssproperty --kemet-tooltip-size - The width and height of arrow's container
 * @cssproperty --kemet-tooltip-border-size - The border size of the arrow
 * @cssproperty --kemet-tooltip-rounded-tip - How much rounding the tip of the arrow should be. Zero is pointy
 * @cssproperty --kemet-tooltip-background-color - The background color of the arrow
 * @cssproperty --kemet-tooltip-border-color - The border color of the arrow
 * @cssproperty --kemet-tooltip-placement-offset - The offset of the arrow from the trigger
 *
 */

@customElement('kemet-tooltip')
export default class KemetTooltip extends KemetPopper {
  static styles = [stylesTooltip, stylesPopper, stylesPopperFade, stylesPopperScale, stylesPopperSlide, stylesPopperFall, stylesPopperFlipHorizontal, stylesPopperFlipVertical, stylesPopperSign, stylesPopperSuperScaled];

  render() {
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
        <slot name="content" @slotchange=${() => { this.makePopper(); this.measureContent(); }}></slot>
        <div id="arrow-container" part="arrow-container" data-popper-arrow>
          <div id="arrow" part="arrow"></div>
        </div>
      </div>
    `;
  }

  measureContent() {
    const height = this.contentElement.offsetHeight;
    this.contentElement.style.setProperty('--kemet-tooltip-content-height', `${height}px`);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-tooltip': KemetTooltip
  }
}

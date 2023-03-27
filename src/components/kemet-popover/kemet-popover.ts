import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';
import { keyCodes } from '../../utilities/misc/constants';
import { TypeEffect, TypeFireOn, TypePosition } from './types';
import { stylesPopover } from './styles';
import { tooltip, customTooltip } from './styles.tooltip';
import { fade, scale, slide, fall, flipHorizontal, flipVertical, sign, superScaled } from './styles.effects';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-popover
 * @summary Displays an element in position of a trigger. Also acts as a tooltip.
 *
 * @prop {boolean} opened - Determines whether or not the popover displays.
 * @prop {string} effect - The opening and closing effect of the popover. Is optional. Values include: (fade | scale | slide | fall | flip horizontal | flip vertical | sign | super scaled)
 * @prop {string} position - Determines the placement of the popover. Values include: (top | right | bottom | left)
 * @prop {boolean} tooltip - Adds a built in tooltip to the popover.
 * @prop {boolean} customTooltip - Adds a custom tooltip to the popover. Use the custom-tooltip slot to specify the custom tooltip.
 * @prop {string} fireOn - Controls how the trigger should activate the popover. Values include: (click | hover)
 * @prop {boolean} clickOutside - Allows the popover to be closed by clicking outside of its content.
 * @prop {boolean} smart - Intelligently positions the popover.
 *
 * @slot trigger - Controls opening and closing the popover.
 * @slot content - The contents of the popover.
 * @slot custom-tooltip - Allows you to use an svg, image, custom css, etc for a custom tooltip.
 *
 * @csspart trigger - Contains the trigger for the popover.
 * @csspart content - Contains the content for the popover.
 * @csspart tooltip - Contains the tooltip for the popover.
 * @csspart custom-tooltip - Contains the custom tooltip for the popover.
 *
 * @cssproperty --kemet-popover-width - The width of the popover contents. Default: 100%.
 * @cssproperty --kemet-popover-height - The height of the popover contents. Default: auto.
 * @cssproperty --kemet-popover-color - The text color of the popover's contents. Default: #fafafa.
 * @cssproperty --kemet-popover-background-color - The background color of the popover's contents. Default: #202020.
 * @cssproperty --kemet-popover-gap - The space between the trigger and content. Default: 0px.
 * @cssproperty --kemet-popover-transition-speed - The speed of the opening and closing effect. Default: 0.3s.
 *
 * @event kemet-popover-opened - Fires when the popover opens.
 * @event kemet-popover-closed - Fires when the popover closes.
 *
 */

@customElement('kemet-popover')
export default class KemetPopover extends LitElement {
  static get styles() {
    return [stylesPopover, tooltip, customTooltip, fade, scale, slide, fall, flipHorizontal, flipVertical, sign, superScaled];
  }

  @property({ type: Boolean, reflect: true })
  opened: boolean = false;

  @property({ type: String, reflect: true })
  effect: TypeEffect = null;

  @property({ type: String, reflect: true })
  position: TypePosition = 'top';

  @property({ type: Boolean })
  tooltip: boolean = false;

  @property({ type: Boolean, attribute: 'custom-tooltip' })
  customTooltip: boolean = false;

  @property({ type: String, attribute: 'fire-on' })
  fireOn: TypeFireOn = 'hover';

  @property({ type: Boolean, attribute: 'click-outside' })
  clickOutside: boolean = false;

  @property({ type: Boolean })
  smart: boolean = true;

  @state()
  focusableSelector: string;

  @state()
  focusableElements: any;

  @state()
  contentElement: any;

  constructor() {
    super();
    this.addEventListener('kemet-popover-close-btn', this.close.bind(this));
  }

  firstUpdated() {
    const contentSlot = this.shadowRoot.querySelector('slot[name="content"]') as HTMLSlotElement;

    this.contentElement = contentSlot.assignedNodes({ flatten: true })[0];
    this.focusableSelector = 'body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable], kemet-popover-close';
    this.focusableElements = this.querySelectorAll(this.focusableSelector);

    window.addEventListener('resize', () => {
      this.smartContent();
    });

    if (this.fireOn === 'click') {
      this.focusableElements.forEach((element) => {
        element.addEventListener('keydown', event => this.handleFocusableDown(event));
      });
    }
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      console.log('opened');
      emitEvent(this, 'kemet-popover-opened', this);
    }

    if (prevProps.get('opened') && this.opened === false) {
      console.log(prevProps);
      console.log('closed');
      emitEvent(this, 'kemet-popover-closed', this);
    }

    this.smartContent();
  }

  render() {
    return html`
      <div
        id="trigger"
        part="trigger"
        tabIndex="0"
        @click=${this.fireOn === 'click' ? event => this.toggle(event) : null}
        @keyup=${this.fireOn === 'click' ? event => this.handleKeyUp(event) : null}
        @mouseover=${this.fireOn !== 'click' ? () => this.open() : null}
        @focus=${this.fireOn !== 'click' ? () => this.open() : null}
        @mouseout=${this.fireOn !== 'click' ? () => this.close() : null}
        @blur=${this.fireOn !== 'click' ? () => this.close() : null}>
        <slot name="trigger"></slot>
        <div id="content" part="content">
          <slot name="content"></slot>
          ${this.makeTooltip()}
        </div>
      </div>
      ${this.makeOverlay()}
    `;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  toggle(event) {
    const isSlotTrigger = event.target.getAttribute('slot') === 'trigger';
    const isPartTrigger = event.target.getAttribute('part') === 'trigger';

    if (isSlotTrigger || isPartTrigger) {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    }
  }

  handleKeyUp(event) {
    event.preventDefault();

    if (event.keyCode === keyCodes.ESC) {
      this.close();
    }

    if (event.keyCode === keyCodes.ENTER || event.keyCode === keyCodes.SPACE) {
      this.toggle(event);
    }
  }

  handleFocusableDown(event) {
    const firstFocusable = this.focusableElements[0];
    const lastFocusable = this.focusableElements[this.focusableElements.length - 1];

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

  makeTooltip() {
    if (this.customTooltip) {
      return html`
        <div id="custom-tooltip" part="custom-tooltip">
          <slot name="custom-tooltip"></slot>
        </div>
      `;
    }

    if (this.tooltip) {
      return html`
        <div id="tooltip" part="tooltip">
          <svg width="29px" height="14px" enable-background="new 0 0 29 14" viewBox="0 0 29 14">
            <polygon points="0.15,0 14.5,14.35 28.85,0 "/>
          </svg>
        </div>
      `;
    }

    return null;
  }

  makeOverlay() {
    if (this.clickOutside) {
      return html`
        <div id="overlay" @keyup=${() => this.close()} @click=${() => this.close()}></div>
      `;
    }

    return null;
  }

  smartContent() {
    if (this.smart) {
      // order here is important. to properly detect an offscreen popover,
      // we must remove the direction properties before getting contentRect
      this.contentElement.style.removeProperty('left');
      this.contentElement.style.removeProperty('right');
      this.contentElement.style.removeProperty('top');
      this.contentElement.style.removeProperty('bottom');

      const contentRect = this.contentElement.getBoundingClientRect();

      const padding = 24;
      const isOffScreenLeft = contentRect.left < 0;
      const isOffScreenRight = window.innerWidth - contentRect.right < 0;
      const isOffScreenTop = contentRect.top < 0;
      const isOffScreenBottom = contentRect.bottom > window.innerHeight;

      // adjust positioning
      if (this.position === 'top' && isOffScreenTop) {
        this.setPosition(contentRect);
      }

      if (this.position === 'right' && isOffScreenRight) {
        this.setPosition(contentRect);
      }

      if (this.position === 'bottom' && isOffScreenBottom) {
        this.setPosition(contentRect);
      }

      if (this.position === 'left' && isOffScreenLeft) {
        this.setPosition(contentRect);
      }

      // adjust content
      if (isOffScreenLeft) {
        this.contentElement.style.left = `${Math.abs(contentRect.left - padding)}px`;
      } else {
        this.contentElement.style.removeProperty('left');
      }

      if (isOffScreenRight) {
        this.contentElement.style.right = `${Math.abs(window.innerWidth - contentRect.right - padding)}px`;
      } else {
        this.contentElement.style.removeProperty('right');
      }

      if (isOffScreenTop) {
        this.contentElement.style.top = `${Math.abs(contentRect.top - padding)}px`;
      } else {
        this.contentElement.style.removeProperty('top');
      }

      if (isOffScreenBottom) {
        this.contentElement.style.bottom = `${Math.abs(contentRect.bottom - window.innerHeight - padding)}px`;
      } else {
        this.contentElement.style.removeProperty('bottom');
      }
    }
  }

  setPosition(contentRect) {
    if (contentRect.top > 0) {
      this.position = 'top';
    } else if (contentRect.right < window.innerWidth) {
      this.position = 'right';
    } else if (contentRect.bottom < window.innerHeight) {
      this.position = 'bottom';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-popover': KemetPopover
  }
}

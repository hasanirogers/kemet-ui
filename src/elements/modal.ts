import { html, LitElement } from 'lit';
import {
  customElement, property, query, state,
} from 'lit/decorators.js';
import { stylesBase, stylesEffects } from '../styles/elements/modal';
import { emitEvent } from '../utilities/misc/events';

export const effects = ['fadein-scaleup', 'slide-right', 'slide-bottom', 'newspaper', 'fall', 'side-fall', 'flip-horizontal', 'flip-vertical', 'sign-3d', 'super-scaled', 'slit', 'rotate-bottom', 'rotate-left'] as const;
export enum EnumEffects {
  FadeinScaleup = 'fadein-scaleup',
  SlideRight = 'slide-right',
  SlideBottom = 'slide-bottom',
  Newspaper = 'newspaper',
  Fall = 'fall',
  SideFall = 'side-fall',
  FlipHorizontal = 'flip-horizontal',
  FlipVertical = 'flip-vertical',
  Sign3d = 'sign-3d',
  SuperScaled = 'super-scaled',
  Slit = 'slit',
  RotateBottom = 'rotate-bottom',
  RotateLeft = 'rotate-left'
}
export type TypeEffect = EnumEffects;


/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-modal
 * @summary A dialog that has many built-in effects and flexible styles.
 *
 * @prop {boolean} opened
 * @prop {string} effect
 * @prop {boolean} closeOnClick
 * @prop {string} breakpoint
 * @prop {boolean} mobile
 *
 * @csspart dialog - The main contents of the modal.
 * @csspart overlay - The surrounding scrim of the modal.
 *
 * @cssproperty --kemet-modal-radius - The mount of rounding for rounded corners
 * @cssproperty --kemet-modal-dialog-min-width - The minimum width of the dialog.
 * @cssproperty --kemet-modal-dialog-max-width - The maximum width of the dialog.
 * @cssproperty --kemet-modal-dialog-background-color - The background color of the dialog.
 * @cssproperty --kemet-modal-dialog-mobile-width - The width of the mobile dialog.
 * @cssproperty --kemet-modal-dialog-mobile-margin - The margins of the mobile dialog.
 * @cssproperty --kemet-modal-dialog-mobile-padding - The padding of the mobile dialog.
 * @cssproperty --kemet-modal-overlay-background-color - The color of the backdrop overlay.
 *
 * @event kemet-modal-opened - Fires when the modal opens
 * @event kemet-modal-closed - Fires when the modal closes
 *
 */

@customElement('kemet-modal')
export default class KemetModal extends LitElement {
  static styles = [stylesBase, stylesEffects];

  @property({ type: Boolean, reflect: true })
  opened: boolean = false;

  @property({ type: String, reflect: true })
  effect: TypeEffect;

  @property({ type: Boolean, attribute: 'close-on-click' })
  closeOnClick: boolean = false;

  @property({ type: String })
  breakpoint: string = '600px';

  @property({ type: Boolean, reflect: true })
  mobile: boolean;

  @property({ type: Boolean, reflect: true })
  rounded: boolean;

  /** @internal */
  @query('dialog')
  dialogElement: HTMLDialogElement;

  /** @internal */
  @state()
  focusableSelector: string;

  /** @internal */
  @state()
  focusableElements: NodeListOf<Element>;

  constructor() {
    super();

    // bindings
    this.addEventListener('kemet-modal-close-pressed', () => { this.handleClose(); });
  }

  firstUpdated() {
    // standard properties
    /** @internal */
    this.focusableSelector = 'body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
    this.focusableElements = this.querySelectorAll(this.focusableSelector);

    // events
    this.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.handleClose();
      }
    });

    this.addEventListener('click', (event) => {
      const targetElement = event.target as HTMLElement;
      if (this.opened && this.closeOnClick && targetElement.tagName.toLowerCase() === 'kemet-modal') {
        this.handleClose();
      }
    });

    window.addEventListener('resize', () => {
      this.isMobile();
    });

    this.focusableElements.forEach((element) => {
      element.addEventListener('keydown', (event: KeyboardEvent) => this.handleFocusableDown(event));
    });
  }

  updated(prevProps: Map<string, never>) {
    if (!prevProps.get('opened') && this.opened === true) {
      this.handleOpen();
    }

    if (prevProps.get('opened') && this.opened === false) {
      this.handleClose();
    }

    this.isMobile();
  }

  render() {
    return html`
      <dialog part="dialog" @close=${() => this.handleClose()}>
        <slot></slot>
      </dialog>
      <div class="overlay" part="overlay"></div>
    `;
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.mobile = mediaQuery.matches;
  }

  handleOpen() {
    this.opened = true;
    if (this.dialogElement?.showModal) this.dialogElement.showModal();
    emitEvent(this, 'kemet-modal-opened', this);
  }

  handleClose() {
    this.opened = false;
    if (this.dialogElement?.close) this.dialogElement.close();
    emitEvent(this, 'kemet-modal-closed', this);
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
    'kemet-modal': KemetModal
  }
}

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TypeVariant } from './types';
import { stylesBase } from './styles';
import { FormSubmitController } from '../../utilities/controllers/forms';
import '../kemet-icon/kemet-icon';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-button
 * @summary A versatile button that can be used either to submit a form, trigger an action, or link to content.
 *
 * @prop {boolean} active - Determines if the button is active
 * @prop {boolean} hover - Is true when the button is hovered
 * @prop {boolean} focused - Is true when the button is focused
 * @prop {string} link - The url a button should link too
 * @prop {boolean} outlined - Outline style for a button
 * @prop {boolean} disabled - Determines whether not a button is disabled
 * @prop {string} variant - Controls the type of button. standard | text | circle | rounded | pill
 *
 * @slot left - Allows you to place an icon to the left of the button text.
 * @slot right - Allows you to place an icon to the right of the button text.
 *
 * @csspart button - The button or anchor element.
 *
 * @cssproperty --kemet-button-font-size - The font size.
 * @cssproperty --kemet-button-color - The text color.
 * @cssproperty --kemet-button-width - The width.
 * @cssproperty --kemet-button-height - The height.
 * @cssproperty --kemet-button-border - The border.
 * @cssproperty --kemet-button-border-radius - The border radius.
 * @cssproperty --kemet-button-transition-speed - The transition speed of the hover effect.
 * @cssproperty --kemet-button-background-color - The background color.
 * @cssproperty --kemet-button-hover-brightness - The brightness of the hover effect.
 * @cssproperty --kemet-button-gap - The gap between the button and icons.
 * @cssproperty --kemet-button-padding - The button padding.
 * @cssproperty --kemet-button-hover-decoration - The decoration for a text button's hover.
 * @cssproperty --kemet-button-circle-size - The diameter of a circle button.
 * @cssproperty --kemet-button-rounded-amount - The border radius of the rounded button.
 * @cssproperty --kemet-button-border-width - The width of the outline border.
 * @cssproperty --kemet-button-border-style - The style of the outline border.
 * @cssproperty --kemet-button-border-color - The color of the outline border.
 * @cssproperty --kemet-button-disabled-opacity - The opacity of the disabled state.
 *
 */

@customElement('kemet-button')
export default class KemetButton extends LitElement {
  /** @internal */
  formSubmitController: FormSubmitController;

  static styles = [stylesBase];

  @property({ type: Boolean, reflect: true })
  active: boolean;

  @property({ type: Boolean, reflect: true })
  hover: boolean;

  @property({ type: Boolean, reflect: true })
  focused: boolean;

  @property({ type: String })
  link: string;

  @property({ type: Boolean, reflect: true })
  outlined: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ reflect: true })
  variant: TypeVariant = 'standard';

  constructor() {
    super();

    this.addEventListener('click', this.handleClick.bind(this));
    this.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.addEventListener('mouseout', this.handleMouseOut.bind(this));
    this.addEventListener('blur', this.handleBlur.bind(this));
    this.addEventListener('keyup', event => this.handleKeyUp(event));

    /** @internal */
    this.formSubmitController = new FormSubmitController(this);
  }

  render() {
    if (this.link && !this.disabled) {
      return html`
        <a href=${this.link} class="button" role="button" part="button">
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </a>
      `;
    }

    return html`
      <button class="button" part="button" ?disabled=${this.disabled} aria-disabled=${this.disabled ? 'true' : 'false'}>
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </button>
    `;
  }

  /**
   * Sets hover to true onMouseOver
   * @private
   */
  handleMouseOver() {
    this.hover = true;
  }

  /**
   * Sets hover to false onMouseOut
   * @private
   */
  handleMouseOut() {
    this.hover = false;
  }

  /**
   * Handles click behavior
   * @private
   */
  handleClick() {
    if (!this.disabled) {
      this.hover = false;
      this.active = true;

      setTimeout(() => {
        this.active = false;
      }, 300);

      if (this.shadowRoot.querySelector('button')) {
        this.formSubmitController.submit();
      }
    }
  }

  /**
   * Handles blur
   * @private
   */
  handleBlur() {
    this.focused = false;
    this.active = false;
    this.hover = false;
  }

  /**
   * Handles keyup
   * @private
   * @param {object} event - event object
   */
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this.focused = true;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-button': KemetButton
  }
}

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesBase } from './styles';

/**
 * @since 1.4.0
 * @status stable
 *
 * @tagname kemet-card
 * @summary A highly configurable panel design to display media and information.
 *
 * @prop {boolean} center - Centers the elements in the card.
 *
 * @slot default - The contents of the alert.
 * @slot header - The cards's header.
 * @slot media - A slot for images, videos, or embeds.
 * @slot caption - Text for the media slot.
 * @slot footer - The card's footer.
 *
 *
 * @csspart media - The media area of the card.
 * @csspart body - The main contents of the card.
 *
 * @cssproperty --kemet-card-padding - The space around elements.
 * @cssproperty --kemet-card-border-color - The color of the borders.
 * @cssproperty --kemet-card-color - The color of the text. Default:
 * @cssproperty --kemet-card-max-width - The max width of the card.
 * @cssproperty --kemet-card-border - The border around the card.
 * @cssproperty --kemet-card-border-radius - The border radius of the card.
 * @cssproperty --kemet-card-background-color - The background color.
 * @cssproperty --kemet-card-body-padding - The body spacing.
 * @cssproperty --kemet-card-header-padding - The header spacing.
 * @cssproperty --kemet-card-header-border-bottom - The header border.
 * @cssproperty --kemet-card-caption-color - The caption text color.
 * @cssproperty --kemet-card-caption-padding - The caption spacing.
 * @cssproperty --kemet-card-caption-background-color - The caption background color.
 * @cssproperty --kemet-card-footer-padding - The footer spacing.
 * @cssproperty --kemet-card-footer-border-top - The footer border.
 *
 */

@customElement('kemet-card')
export default class KemetCard extends LitElement {
  static styles = [stylesBase];

  @property({ type: Boolean, reflect: true })
  center: boolean;

  render() {
    return html`
      <slot name="header"></slot>
      <div class="media" part="media">
        <slot name="media"></slot>
        <slot name="caption"></slot>
      </div>
      <div class="body" part="body">
        <slot></slot>
      </div>
      </div>
      <slot name="footer"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-card': KemetCard
  }
}

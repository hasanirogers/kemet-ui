import { html, LitElement } from 'lit';
import { stylesBase } from './styles.js';

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
 * @cssproperty --kemet-card-padding - The space around elements. Default: 1rem.
 * @cssproperty --kemet-card-border-color - The color of the borders. Default: var(--kemet-color-gray4).
 * @cssproperty --kemet-card-color - The color of the text. Default: var(--kemet-color-black).
 * @cssproperty --kemet-card-max-width - The max width of the card. Default: 360px.
 * @cssproperty --kemet-card-border - The border around the card. Default: 1px solid var(--kemet-card-border-color).
 * @cssproperty --kemet-card-border-radius - The border radius of the card. Default: 0.
 * @cssproperty --kemet-card-background-color - The background color. Default: var(--kemet-color-white).
 * @cssproperty --kemet-card-body-padding - The body spacing. Default: var(--kemet-card-padding).
 * @cssproperty --kemet-card-header-padding - The header spacing. Default: var(--kemet-card-padding).
 * @cssproperty --kemet-card-header-border-bottom - The header border. Default: 1px solid var(--kemet-card-border-color).
 * @cssproperty --kemet-card-caption-color - The caption text color. Default: var(--kemet-color-white).
 * @cssproperty --kemet-card-caption-padding - The caption spacing. Default: calc(var(--kemet-card-padding) / 2) var(--kemet-card-padding).
 * @cssproperty --kemet-card-caption-background-color - The caption background color. Default: rgba(0,0,0,0.5).
 * @cssproperty --kemet-card-footer-padding - The footer spacing. Default: var(--kemet-card-padding).
 * @cssproperty --kemet-card-footer-border-top - The footer border. Default: 1px solid var(--kemet-card-border-color).
 *
 */

export default class KemetCard extends LitElement {
  static get styles() {
    return [stylesBase];
  }

  static get properties() {
    return {
      center: { type: Boolean, reflect: true },
    };
  }

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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-card') || customElements.define('kemet-card', KemetCard);

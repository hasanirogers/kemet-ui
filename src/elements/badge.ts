import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stylesBase } from '../styles/elements/badge';
import { EnumRoundedSizes, EnumStatuses, TypeRoundedSizes, TypeStatus } from '../utilities/constants';


/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-badge
 * @summary Badges display the status of information.
 *
 * @prop {TypeStatus} status - The status of the badge
 * @prop {number} circlePadding - Padding on the badge as a circle
 * @prop {TypeRoundedSizes} rounded - Rounds the corners on the badge
 * @prop {boolean} outlined - Outlines the badge
 *
 * @cssproperty --kemet-badge-padding - The padding of the badge. Default: 10px.
 *
 */

@customElement('kemet-badge')
export default class KemetBadge extends LitElement {
  static styles = [stylesBase];

  @property({ reflect: true })
  status: TypeStatus = EnumStatuses.Primary;

  @property({ type: Number, attribute: 'circle-padding' })
  circlePadding: number = 0;

  @property({ type: String, reflect: true })
  rounded: TypeRoundedSizes;

  @property({ type: Boolean, reflect: true })
  outlined: boolean = false;

  @state()
  iconLeft: boolean = false;

  @state()
  iconRight: boolean = false;

  render() {
    return html`
      <slot name="left" @slotchange=${() => this.handleLeftChange()}></slot>
      ${this.iconLeft ? html`&nbsp;` : ''}
      <slot @slotchange=${() => this.handleSlotChange()}></slot>
      ${this.iconRight ? html`&nbsp;` : ''}
      <slot name="right" @slotchange=${() => this.handleRightChange()}></slot>
    `;
  }

  handleSlotChange() {
    if (this.rounded === EnumRoundedSizes.CIRCLE) {
      this.style.height = `${this.offsetWidth + this.circlePadding}px`;
      this.style.width = `${this.offsetWidth + this.circlePadding}px`;
    }
  }

  handleLeftChange() {
    const left = this.querySelector('[slot="left"]');
    if (left) this.iconLeft = true;
  }

  handleRightChange() {
    const right = this.querySelector('[slot="right"]');
    if (right) this.iconRight = true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-badge': KemetBadge
  }
}

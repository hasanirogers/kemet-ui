import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesBase } from './styles';
import { TypeStatus } from './types';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-badge
 * @summary Badges display the status of information.
 *
 * @prop {string} status - The status of the badge
 * @prop {boolean} circle - Displays the badge in a circle
 * @prop {boolean} pill - Rounds the corners on the badge
 * @prop {number} circlePadding - Padding on the badge as a circle
 *
 * @cssproperty --kemet-badge-padding - The padding of the badge. Default: 10px.
 *
 */

@customElement('kemet-badge')
export default class KemetBadge extends LitElement {
  static styles = [stylesBase];

  @property({ reflect: true })
  status: TypeStatus = 'primary';

  @property({ type: Boolean, reflect: true })
  circle: boolean = false;

  @property({ type: Boolean, reflect: true })
  pill: boolean = false;

  @property({ type: Number, attribute: 'circle-padding' })
  circlePadding: number = 0;

  render() {
    return html`<slot @slotchange=${() => this.handleSlotChange()}></slot>`;
  }

  handleSlotChange() {
    if (this.circle) {
      this.style.height = `${this.offsetWidth + this.circlePadding}px`;
      this.style.width = `${this.offsetWidth + this.circlePadding}px`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-badge': KemetBadge
  }
}

import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { KemetCarouselInterface } from './types';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-total
 * @summary Displays the total slide number.
 *
 * @prop {number} total - The total number of slides.
 *
 */

@customElement('kemet-carousel-total')
export default class KemetCarouselTotal extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
    `,
  ];

  @property({ type: Number })
  total: number | undefined;

  @state()
  carousel: KemetCarouselInterface | null;

  firstUpdated() {
    this.carousel = this.closest('kemet-carousel');
  }

  updated() {
    this.total = this.carousel?.total;
  }

  render() {
    return html`${this.total}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-total': KemetCarouselTotal
  }
}

import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { KemetCarouselInterface } from './types';

/**
 *
 * @since 1.1.0
 * @status stable
 *
 * @tagname kemet-carousel-current
 * @summary Displays the active slide number.
 *
 * @prop {number} current - The current slide number.
 *
 */

@customElement('kemet-carousel-current')
export class KemetCarouselCurrent extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
    `,
  ];

  @property({ type: Number })
  current: number;

  @state()
  carousel: KemetCarouselInterface | null;


  firstUpdated() {
    this.carousel = this.closest('kemet-carousel');
  }

  updated() {
    this.current = this.carousel?.index as number + 1;
  }

  render() {
    return html`${this.current}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-carousel-current': KemetCarouselCurrent
  }
}

import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stylesBase } from './styles';
import { TypeFormats } from './types';
import { emitEvent } from '../../utilities/misc/events';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-timer
 * @summary Badges display the status of information.
 *
 * @prop {string} status - The status of the badge
 * @prop {boolean} circle - Displays the badge in a circle
 * @prop {boolean} pill - Rounds the corners on the badge
 * @prop {number} circlePadding - Padding on the badge as a circle
 *
 * @cssproperty --kemet-timer-padding - The padding of the badge. Default: 10px.
 *
 */

@customElement('kemet-timer')
export default class KemetTimer extends LitElement {
  static styles = [stylesBase];

  @property({ type: String })
  format: TypeFormats = 'seconds';

  @property({ type: Number })
  amount: number = 10;

  @state()
  interval;

  firstUpdated() {
    this.initTimer();
  }

  updated(prevProps) {
    const hasFormatOrAmountChanged = prevProps.get('format') || prevProps.get('amount');
    if (hasFormatOrAmountChanged) {
      clearInterval(this.interval);
      this.initTimer();
    }
  }

  render() {
    return html`<slot></slot>`;
  }

  initTimer() {
    switch (this.format) {
      case 'minutes': this.timer(this.amount * 60); return;
      case 'hours': this.timer(this.amount * 60 * 60); return;
      case 'days': this.timer(this.amount * 60 * 60 * 24); return;
      default: this.timer(this.amount);
    }
  }

  timer(seconds: number = 0) {
    const now = Date.now();
    const then = now + seconds * 1000;

    this.interval = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft < 0) {
        clearInterval(this.interval);
        emitEvent(this, 'kemet-timer-completed', true);
        return;
      }

      emitEvent(this, 'kemet-timer-increment', secondsLeft);
    }, 1000);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-timer': KemetTimer
  }
}

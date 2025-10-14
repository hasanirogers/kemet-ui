import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stylesBase } from '../styles/elements/timer';
import { TypeFormats } from '../types/timer';
import { emitEvent } from '../utilities/misc/events';

/**
 * @since 3.1.0
 * @status stable
 *
 * @tagname kemet-timer
 * @summary Counts down from a specified amount of time or date.
 *
 * @prop {string} format - The format of the amount property
 * @prop {number} amount - The amount of time to set the timer
 * @prop {string} expires - Begins a count down to a specified time, accepts a string that matches value given for a Date constructor
 *
 * @event kemet-timer-completed - Fires when the timer reaches 0
 * @event kemet-timer-increment - Fires on tick of the timer
 *
 */

@customElement('kemet-timer')
export default class KemetTimer extends LitElement {
  static styles = [stylesBase];

  @property({ type: String })
  format: TypeFormats = 'seconds';

  @property({ type: Number })
  amount: number = 10;

  @property({ type: String })
  expires: string;

  /** @internal */
  @state()
  interval;

  firstUpdated() {
    if (this.expires) {
      this.countDown();
    } else {
      this.timer(this.getTimeInSeconds(this.amount));
    }

    emitEvent(this, 'kemet-timer-started', true);
    emitEvent(this, 'kemet-timer-increment', this.getTimeInSeconds(this.amount));
  }

  updated(prevProps) {
    const hasFormatOrAmountChanged = prevProps.get('format') || prevProps.get('amount');
    const hasExpiredChanged = prevProps.get('expires');

    if (hasFormatOrAmountChanged) {
      clearInterval(this.interval);
      this.timer(this.getTimeInSeconds(this.amount));
    }

    if (hasExpiredChanged) {
      clearInterval(this.interval);
      this.countDown();
    }
  }

  render() {
    return html`<slot></slot>`;
  }

  getTimeInSeconds(time) {
    switch (this.format) {
      case 'minutes': return time * 60;
      case 'hours': return time * 60 * 60;
      case 'days': return time * 60 * 60 * 24;
      default: return time;
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

  countDown() {
    const expires = new Date(this.expires).getTime();

    this.interval = setInterval(() => {
      const secondsLeft = Math.round((expires - Date.now()) / 1000);

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

import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stylesDisplay } from './styles';
import { TypeFormats } from './types';

/**
 * @since 3.1.0
 * @status stable
 *
 * @tagname kemet-timer-display
 * @summary Displays remaining time
 *
 * @prop {TypeFormats} format - The format to display the remaining time in
 */

@customElement('kemet-timer-display')
export default class KemetTimerDisplay extends LitElement {
  static styles = [stylesDisplay];

  @property({ type: String })
  format: TypeFormats = 'seconds';

  @state()
  displayTime: string = '';

  firstUpdated() {
    this.getTime();
  }

  render() {
    return html`${this.displayTime}`;
  }

  getTime() {
    this.closest('kemet-timer').addEventListener('kemet-timer-increment', (event: CustomEvent) => {
      const secondsLeft = event.detail;
      switch (this.format) {
        case 'seconds':
          this.displayTime = (secondsLeft % 60 < 10 ? `0${secondsLeft % 60}` : secondsLeft % 60).toString();
          break;
        case 'minutes':
          // eslint-disable-next-line no-mixed-operators
          this.displayTime = Math.floor((secondsLeft % 86400) % 3600 / 60).toString();
          break;
        case 'hours':
          this.displayTime = Math.floor((secondsLeft % 86400) / 3600).toString();
          break;
        case 'days':
          this.displayTime = Math.floor(secondsLeft / 86400).toString();
          break;
        default:
          this.displayTime = (secondsLeft % 60 < 10 ? `0${secondsLeft % 60}` : secondsLeft % 60).toString();
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-timer-display': KemetTimerDisplay
  }
}

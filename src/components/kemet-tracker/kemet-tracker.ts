import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 *
 * @since 1.2.0
 * @status stable
 *
 * @prop {number} total - The total number of steps
 * @prop {string} breakpoint - The point at which the tracker goes from mobile to standard
 *
 */

@customElement('kemet-tracker')
export default class KemetTracker extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
      }
    `,
  ];

  @property({ type: Number })
  total: number;

  @property({ type: String })
  breakpoint: string;

  @state()
  steps: any;

  constructor() {
    super();
    this.breakpoint = '767px';
  }

  firstUpdated() {
    // elements
    this.steps = this.querySelectorAll('kemet-tracker-step');

    // methods exe
    this.isMobile();

    // events
    window.addEventListener('resize', () => {
      this.isMobile();
    });
  }

  render() {
    return html`<slot @slotchange=${() => this.handleSlotChange()}></slot>`;
  }

  handleSlotChange() {
    this.total = this.steps.length;

    this.steps.forEach((step, index) => {
      step.step = index + 1;
      if (step.step === this.total) {
        step.last = true;
      }
    });
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);

    this.steps.forEach((step) => {
      step.mobile = mediaQuery.matches;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-tracker': KemetTracker
  }
}

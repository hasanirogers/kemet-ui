import { html, css, LitElement } from 'lit';

/**
 *
 * @since 1.2.0
 * @status stable
 *
 * @prop {number} total - The total number of steps
 * @prop {string} breakpoint - The point at which the tracker goes from mobile to standard
 *
 */

export default class KemetTracker extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
      `,
    ];
  }

  static get properties() {
    return {
      total: { type: Number },
      breakpoint: { type: String },
    };
  }

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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-tracker') || customElements.define('kemet-tracker', KemetTracker);

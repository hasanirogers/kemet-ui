import { html, LitElement } from 'lit';
import { stylesStep } from './styles.js';

/**
 *
 * @since 1.2.0
 * @status stable
 *
 * @tagname kemet-tracker-step
 * @summary A step in the Tracker
 *
 * @prop {number} step - The current step number
 * @prop {boolean} completed - Determines whether or not a step renders as complete
 * @prop {boolean} current - Determines whether or not a step renders as the current step
 * @prop {boolean} last - Is automatically added to the last step
 * @prop {boolean} mobile - Determines if a step should render as mobile
 * @prop {boolean} hideDotContent - Hides the label inside of a dot
 * @prop {number} completedSize - The icon size for the completed check mark
 *
 * @cssproperty --kemet-tracker-step-dot-font-size - The font size. Default: 90%
 * @cssproperty --kemet-tracker-step-dot-color - The text color. Default: var(--kemet-color-primary)
 * @cssproperty --kemet-tracker-step-dot-border - Border around a dot. Default: 1px solid var(--kemet-color-primary)
 * @cssproperty --kemet-tracker-step-dot-size - Width and height of a dot. Default: 50px
 * @cssproperty --kemet-tracker-step-dot-size-mobile - Mobile width and height of a dot. Default: 25px
 * @cssproperty --kemet-tracker-step-dot-gap - Space between a dot and connector line. Default: 4px
 * @cssproperty --kemet-tracker-step-dot-transition - Transition of a dot. Default: all 300ms ease-in-out
 * @cssproperty --kemet-tracker-step-dot-fill-color - Fill color of a dot. Default: transparent
 * @cssproperty --kemet-tracker-step-dot-background-color - Color of the background a dot is on. Default: var(--kemet-color-white)
 * @cssproperty --kemet-tracker-step-current-color - Current dot text color. Default: var(--kemet-color-white)
 * @cssproperty --kemet-tracker-step-current-fill-color - Current dot fill color. Default: var(--kemet-color-primary)
 * @cssproperty --kemet-tracker-step-completed-color - Text color of a completed dot. Default: var(--kemet-color-white)
 * @cssproperty --kemet-tracker-step-completed-fill-color - Background color of a completed dot. Default: var(--kemet-color-success)
 * @cssproperty --kemet-tracker-step-completed-line-color - Completed connector line color. Default: var(--kemet-color-primary)
 * @cssproperty --kemet-tracker-step-completed-line-weight - Completed line weight. Default: 3px
 * @cssproperty --kemet-tracker-step-standard-line-weight - Standard line weight. Default: 1px
 *
 * @csspart dot - The container for the dot.
 * @csspart line - A connector line from dot to dot.
 * @csspart completed-line - A completed connector line.
 *
 */

export default class KemetTrackerStep extends LitElement {
  static get styles() {
    return [stylesStep];
  }

  static get properties() {
    return {
      step: { type: Number },
      completed: { type: Boolean, reflect: true },
      current: { type: Boolean, reflect: true },
      last: { type: Boolean, reflect: true },
      mobile: { type: Boolean, reflect: true },
      hideDotContent: { type: Boolean, reflect: true, attribute: 'hide-dot-content' },
      completedSize: { type: Number },
    };
  }

  constructor() {
    super();
    this.completedSize = 16;
  }

  firstUpdated() {
    this.tracker = this.closest('kemet-tracker');
  }

  render() {
    return html`
      ${this.makeLine()}
      ${this.makeCompletedLine()}
      <div class="dot" part="dot">${this.makeDotContent()}</div>
      ${this.makeSlotContent()}
    `;
  }

  makeLine() {
    if (!this.last) {
      return html`<div class="line" part="line"></div>`;
    }

    return null;
  }

  makeCompletedLine() {
    if (this.completed && !this.last) {
      return html`<div class="line completed" part="completed-line" @animationend=${() => this.handleCompletedLineEnd()}></div>`;
    }

    return null;
  }

  makeDotContent() {
    if (this.completed && !this.mobile && !this.hideDotContent) {
      return html`
        <kemet-icon icon="check2" size=${this.completedSize}></kemet-icon>
      `;
    }

    if (!this.mobile && !this.hideDotContent) {
      return html`
        <span>${this.step}/${this.tracker?.total}</span>
      `;
    }

    return null;
  }

  makeSlotContent() {
    if (!this.mobile) {
      return html`<slot></slot>`;
    }

    return null;
  }

  handleCompletedLineEnd() {
    const currentDot = this.tracker.querySelector('[current]').shadowRoot.querySelector('.dot');

    if (currentDot) {
      currentDot.classList.add('animate');
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-tracker-step') || customElements.define('kemet-tracker-step', KemetTrackerStep);

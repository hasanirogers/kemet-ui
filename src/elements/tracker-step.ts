import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stylesStep } from '../styles/elements/tracker';
import { KemetTrackerInterface } from '../types/tracker';

/**
 *
 * @since 1.2.0
 * @status stable
 *
 * @tagname kemet-tracker-step
 * @summary A step in the Tracker
 *
 * @prop {number} step - The current step number
 * @prop {boolean} completed - Determines whether a step renders as complete
 * @prop {boolean} current - Determines whether a step renders as the current step
 * @prop {boolean} last - Is automatically added to the last step
 * @prop {boolean} mobile - Determines if a step should render as mobile
 * @prop {boolean} hideDotContent - Hides the label inside of a dot
 * @prop {number} completedSize - The icon size for the completed check mark
 *
 * @cssproperty --kemet-tracker-step-dot-font-size - The font size.
 * @cssproperty --kemet-tracker-step-dot-color - The text color.
 * @cssproperty --kemet-tracker-step-dot-border - Border around a dot.
 * @cssproperty --kemet-tracker-step-dot-size - Width and height of a dot.
 * @cssproperty --kemet-tracker-step-dot-size-mobile - Mobile width and height of a dot.
 * @cssproperty --kemet-tracker-step-dot-gap - Space between a dot and connector line.
 * @cssproperty --kemet-tracker-step-dot-transition - Transition of a dot.
 * @cssproperty --kemet-tracker-step-dot-fill-color - Fill color of a dot.
 * @cssproperty --kemet-tracker-step-dot-background-color - Color of the background a dot is on.
 * @cssproperty --kemet-tracker-step-current-color - Current dot text color.
 * @cssproperty --kemet-tracker-step-current-fill-color - Current dot fill color.
 * @cssproperty --kemet-tracker-step-completed-color - Text color of a completed dot.
 * @cssproperty --kemet-tracker-step-completed-fill-color - Background color of a completed dot.
 * @cssproperty --kemet-tracker-step-completed-line-color - Completed connector line color.
 * @cssproperty --kemet-tracker-step-completed-line-weight - Completed line weight.
 * @cssproperty --kemet-tracker-step-standard-line-weight - Standard line weight.
 *
 * @csspart dot - The container for the dot.
 * @csspart line - A connector line from dot to dot.
 * @csspart completed-line - A completed connector line.
 *
 */

@customElement('kemet-tracker-step')
export default class KemetTrackerStep extends LitElement {
  static styles = [stylesStep];

  @property({ type: Number })
  step: number;

  @property({ type: Boolean, reflect: true })
  completed: boolean;

  @property({ type: Boolean, reflect: true })
  current: boolean;

  @property({ type: Boolean, reflect: true })
  last: boolean;

  @property({ type: Boolean, reflect: true })
  mobile: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'hide-dot-content' })
  hideDotContent: boolean;

  @property({ type: Number })
  completedSize: number = 16;

  @state()
  tracker: KemetTrackerInterface;

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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-tracker-step': KemetTrackerStep
  }
}

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesBase } from './styles';

/**
 * @since 1.2.0
 * @status stable
 *
 * @tagname kemet-fab
 * @summary The FAB, or Floating Action Button, performs a primary action on a page.
 *
 * @prop {boolean} expanded - The expanded state of the button.
 * @prop {boolean} outlined - Outline style for a button.
 * @prop {boolean} disabled - Determines whether not a button is disabled.
 * @prop {boolean} pill - Displays the fab with rounded corners.
 * @prop {number} expandPoint - The distance, in pixels, where the fab should automatically expand.
 * @prop {number} collapsePoint - The distance, in pixels, where the fab should automatically collapse.
 *
 * @slot Icon - A slot for an icon to display.
 * @slot default - The text for the FAB.
 *
 * @cssproperty --kemet-fab-size - The width and height of the fab. Default: 50px.
 * @cssproperty --kemet-fab-color - The text color of the fab. Default: var(--kemet-color-white).
 * @cssproperty --kemet-fab-background-color - The bg color of the tab. Default: var(--kemet-color-primary).
 * @cssproperty --kemet-fab-outlined-color - The text color of an outlined fab. Default: var(--kemet-color-primary).
 * @cssproperty --kemet-fab-outlined-border - The border of an outlined fab. Default: 1px solid var(--kemet-color-primary).
 * @cssproperty --kemet-fab-pill-radius - The border radius of a pill fab. Default: 10rem.
 *
 * @csspart button - The button's container.
 * @csspart icon -  The FAB's icon.
 * @csspart text - The text in the FAB.
 *
 */

@customElement('kemet-fab')
export default class KemetFAB extends LitElement {
  static styles = [stylesBase];

  @property({ type: Boolean, reflect: true })
  expanded: boolean = false;

  @property({ type: Boolean, reflect: true })
  outlined: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  pill: boolean;

  @property({ type: Number, attribute: 'expand-point' })
  expandPoint: number;

  @property({ type: Number, attribute: 'collapse-point' })
  collapsePoint: number;

  firstUpdated() {
    // events
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }

  render() {
    return html`
      <button class="button" part="button" ?disabled=${this.disabled} aria-disabled=${this.disabled ? 'true' : 'false'}>
        <span class="icon" part="icon">
          <slot name="icon"></slot>
        </span>
        <span class="text" part="text">
          <slot></slot>
        </span>
      </button>
    `;
  }

  handleMouseOver() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }

  handleMouseOut() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }

  handleScroll() {
    if (window.scrollY > this.expandPoint) {
      this.expanded = true;
    }

    if (window.scrollY < this.expandPoint) {
      this.expanded = false;
    }

    if (window.scrollY > this.collapsePoint) {
      this.expanded = false;
    }

    if (window.scrollY < this.collapsePoint) {
      this.expanded = true;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-fab': KemetFAB
  }
}

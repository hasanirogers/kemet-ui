import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../utilities/events';
import { stylesKemetTab } from '../styles/elements/tabs';
import './icon-bootstrap';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-tab
 * @summary A tab in a set of tabs.
 *
 * @prop {boolean} selected - Is true when the tab is selected
 * @prop {string} link - Links to a panel name
 * @prop {boolean} closable - Determines if the tab can be closed
 *
 * @cssproperty --kemet-tab-padding - The padding of the tab.
 * @cssproperty --kemet-tab-color - The color of the selected tab.
 *
 * @event kemet-selected - Fires when a tab is selected
 * @event kemet-closed - Fires when the tab should close
 *
 */

@customElement('kemet-tab')
export default class KemetTab extends LitElement {
  static styles = [stylesKemetTab];

  @property({ type: Number })
  index: number;

  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  @property({ type: String })
  link: string;

  @property({ type: Boolean })
  closable: boolean;

  firstUpdated() {
    this.addEventListener('click', this.select.bind(this));
  }

  updated() {
    this.a11y();
  }

  render() {
    return html`
      <slot></slot>
      ${this.makeCloseable()}
    `;
  }

  select() {
    emitEvent(this, 'kemet-selected', this);
  }

  a11y() {
    this.setAttribute('role', 'tab');

    if (this.selected) {
      this.setAttribute('aria-selected', 'true');
      this.setAttribute('tabindex', '0');
    } else {
      this.setAttribute('aria-selected', 'false');
      this.setAttribute('tabindex', '-1');
    }
  }

  makeCloseable() {
    if (this.closable) {
      return html`&nbsp;<kemet-icon-bootstrap icon="x-lg" size="16" @click=${() => this.handleClosable()}></kemet-icon-bootstrap>`;
    }

    return null;
  }

  handleClosable() {
    emitEvent(this, 'kemet-closed', this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-tab': KemetTab
  }
}

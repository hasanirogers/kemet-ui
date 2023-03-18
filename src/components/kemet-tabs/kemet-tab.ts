import { LitElement, html } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';
import { customElement, property } from 'lit/decorators.js';
import { stylesKemetTab } from './styles';


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
 * @cssproperty --kemet-tab-padding - The padding of the tab. Default: 1rem.
 * @cssproperty --kemet-tab-color - The color of the selected tab. Default: var(--kemet-color-background).
 *
 * @event kemet-tab-selected - Fires when a tab is selected
 * @event kemet-tab-close - Fires when the tab should close
 *
 */

@customElement('kemet-tab')
export default class KemetTab extends LitElement {
  static styles = [stylesKemetTab];

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
    emitEvent(this, 'kemet-tab-selected', this);
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
      return html`<kemet-icon icon="x-lg" @click=${() => this.handleClosable()}></kemet-icon>`;
    }

    return null;
  }

  handleClosable() {
    emitEvent(this, 'kemet-tab-close', this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-tab': KemetTab
  }
}


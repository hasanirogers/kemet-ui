import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesKemetTabPanel } from './styles';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-tab-panel
 * @summary A panel in a set of tabs.
 *
 * @prop {boolean} selected - Is true when a panel is selected
 * @prop {string} panel - Identifies the panel to be linked by a tab
 *
 * @cssproperty --kemet-tab-panel-fade-speed - The fade speed.
 *
 */

@customElement('kemet-tab-panel')
export default class KemetTabPanel extends LitElement {
  static styles = [stylesKemetTabPanel];

  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  @property({ type: String })
  panel: string;

  updated() {
    this.a11y();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  a11y() {
    this.setAttribute('role', 'tabpanel');

    if (this.selected) {
      this.setAttribute('tabindex', '0');
    } else {
      this.setAttribute('tabindex', '-1');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-tab-panel': KemetTabPanel
  }
}


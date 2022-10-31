import { LitElement, html, css } from 'lit';

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
 * @cssproperty --kemet-tab-panel-fade-speed - The fade speed. Default: 0.5s.
 *
 */

export default class KemetTabPanel extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        flex: 0 0 auto;
      }

      ::slotted(img) {
        max-width: 100%;
      }

      :host(.fade) {
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--kemet-tab-panel-fade-speed, 0.5s) ease;
      }

      :host(.fade[selected]) {
        opacity: 1;
        pointer-events: auto;
      }

      :host(.fade.push) {
        margin-left: -100%;
      }

      :host(.vertical) {
        display: none;
      }

      :host(.vertical[selected]) {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflect: true,
      },
      panel: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

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

customElements.define('kemet-tab-panel', KemetTabPanel);

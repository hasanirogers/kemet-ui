import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-option
 * @summary An option in a select.
 *
 * @prop {string} label - The label of the option
 * @prop {string} value - The value of the options
 * @prop {boolean} disabled - Determines whether to disable the option
 * @prop {boolean} selected - Selects the option if true
 *
 */

@customElement('kemet-option')
export default class KemetOption extends LitElement {
  @property({ type: String })
  label: string;

  @property({ type: String })
  value: string = '';

  @property({ type: Boolean })
  disabled: boolean;

  @property({ type: Boolean })
  selected: boolean;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-option': KemetOption
  }
}

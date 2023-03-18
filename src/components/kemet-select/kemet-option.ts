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
 * @event kemet-input-focused - Fires when the input receives and loses focus
 * @event kemet-input-status - Fires when there's a change in status
 *
 */

@customElement('kemet-option')
export default class KemetOption extends LitElement {
  @property({ type: String })
  label: string;

  @property({ type: String })
  value: string = '';

  @property({ type: Boolean })
  disable: boolean;

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

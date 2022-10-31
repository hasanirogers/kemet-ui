import { html, LitElement } from 'lit';

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

export default class KemetOption extends LitElement {
  static get properties() {
    return {
      label: {
        type: String,
      },
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
      },
      selected: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();

    this.value = '';
  }

  render() {
    return html`<slot></slot>`;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-option') || customElements.define('kemet-option', KemetOption);

import { html, LitElement } from 'lit';

export default class KemetOption extends LitElement {
  static get properties() {
    return {
      /**
       * The label of the option
       */
      label: {
        type: String,
      },
      /**
       * The value of the options
       */
      value: {
        type: String,
      },
      /**
       * Determines whether to disable the option
       */
      disabled: {
        type: Boolean,
      },
      /**
       * Selects the option if true
       */
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

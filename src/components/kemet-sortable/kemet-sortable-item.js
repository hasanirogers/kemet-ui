import { html, css, LitElement } from 'lit';

export default class KemetSortableItem extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          cursor: grab;
          display: block;
          padding: 1rem;
          border: 1px solid var(--kemet-color-primary);
        }

        :host([ghost]) {
          opacity: 0.5;
          border-style: dashed;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /* Automatically set to true when an item is dragged to a new spot */
      ghost: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  firstUpdated() {
    this.draggable = true;
  }

  render() {
    return html`<slot></slot>`;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-sortable-item') || customElements.define('kemet-sortable-item', KemetSortableItem);

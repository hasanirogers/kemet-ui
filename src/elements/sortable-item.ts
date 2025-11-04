import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesSortableItem } from '../styles/elements/sortable';

/**
 * @since 1.3.0
 * @status stable
 *
 * @tagname kemet-sortable-item
 * @summary An item in a sortable list.
 *
 * @prop {boolean} ghost - Automatically set to true when an item is dragged to a new spot.
 */

@customElement('kemet-sortable-item')
export default class KemetSortableItem extends LitElement {
  static styles = [stylesSortableItem];

  @property({ type: Boolean, reflect: true })
  ghost: boolean;

  firstUpdated() {
    this.draggable = true;
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-sortable-item': KemetSortableItem
  }
}

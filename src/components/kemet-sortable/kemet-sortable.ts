import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { polyfill } from 'mobile-drag-drop';
import { emitEvent } from '../../utilities/misc/events.js';
import { stylesSortable } from './styles';
import { KemetSortableItemInterface } from './types';

const getMouseOffset = (event) => {
  const targetRect = event.target.getBoundingClientRect();
  const offset = {
    x: event.pageX - targetRect.left,
    y: event.pageY - targetRect.top,
  };

  return offset;
};

const getElementVerticalCenter = (element) => {
  const rect = element.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
};

/**
 * @since 1.3.0
 * @status stable
 *
 * @tagname kemet-sortable
 * @summary A list that can be sorted by drag and drop.
 *
 * @event kemet-sortable-drag-end - Fires when an item has been moved to a new spot.
 */

@customElement('kemet-sortable')
export default class KemetSortable extends LitElement {
  static styles = [stylesSortable];

  @state()
  sortableItem: KemetSortableItemInterface;

  firstUpdated() {
    polyfill();

    this.addEventListener('dragstart', event => this.handleDragStart(event), false);
    this.addEventListener('dragenter', (event) => { event.preventDefault(); });
  }

  render() {
    return html`<slot></slot>`;
  }

  handleDragStart(event) {
    this.sortableItem = event.target;

    this.addEventListener('dragover', dragOverEvent => this.handleDragOver(dragOverEvent), false);
    this.addEventListener('dragend', dragEndEvent => this.handleDragEnd(dragEndEvent), false);

    setTimeout(() => {
      this.sortableItem.ghost = true;
    }, 0);
  }

  handleDragOver(event) {
    event.preventDefault();

    const { target } = event;

    if (target && target.tagName === 'KEMET-SORTABLE-ITEM') {
      const offset = getMouseOffset(event);
      const middleY = getElementVerticalCenter(event.target);

      if (offset.y > middleY) {
        this.insertBefore(this.sortableItem, target.nextSibling);
      } else {
        this.insertBefore(this.sortableItem, target);
      }
    }
  }

  handleDragEnd(event) {
    event.preventDefault();
    this.sortableItem.ghost = false;

    emitEvent(this, 'kemet-sortable-drag-end', {
      event,
      current: this.sortableItem,
      all: this.querySelectorAll('kemet-sortable-item'),
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-sortable': KemetSortable
  }
}

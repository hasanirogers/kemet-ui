import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { polyfill } from 'mobile-drag-drop';
import { emitEvent } from '../utilities/events';
import { stylesSortable } from '../styles/elements/sortable';
import type KemetSortableItem from './sortable-item';

export interface InterfaceSortableDragDetails {
  event: DragEvent,
  current: KemetSortableItem,
  all: NodeListOf<KemetSortableItem>,
}

const getMouseOffset = (event: DragEvent) => {
  const target = event.target as HTMLElement;
  const targetRect = target.getBoundingClientRect();
  return {
    x: event.pageX - targetRect.left,
    y: event.pageY - targetRect.top,
  };
};

const getElementVerticalCenter = (element: HTMLElement) => {
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
 * @event kemet-drag-start - Fires when an item starts to be moved.
 * @event kemet-drag-over - Fires when an item is moving to a new spot.
 * @event kemet-drag-end - Fires when an item has been moved to a new spot.
 */

@customElement('kemet-sortable')
export default class KemetSortable extends LitElement {
  static styles = [stylesSortable];

  @state()
  sortableItem: KemetSortableItem;

  firstUpdated() {
    polyfill();

    this.addEventListener('dragstart', event => this.handleDragStart(event), false);
    this.addEventListener('dragenter', (event) => { event.preventDefault(); });
  }

  render() {
    return html`<slot></slot>`;
  }

  handleDragStart(event: DragEvent) {
    this.sortableItem = event.target as KemetSortableItem;

    this.addEventListener('dragover', dragOverEvent => this.handleDragOver(dragOverEvent), false);
    this.addEventListener('dragend', dragEndEvent => this.handleDragEnd(dragEndEvent), false);

    setTimeout(() => {
      this.sortableItem.ghost = true;

      emitEvent(this, 'kemet-drag-start', {
        event,
        current: this.sortableItem,
        all: this.querySelectorAll('kemet-sortable-item'),
      });
    }, 0);
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();

    const target = event.target as KemetSortableItem;

    emitEvent(this, 'kemet-drag-over', {
      event,
      current: this.sortableItem,
      all: this.querySelectorAll('kemet-sortable-item'),
    });

    if (target && target.tagName === 'KEMET-SORTABLE-ITEM') {
      const offset = getMouseOffset(event);
      const middleY = getElementVerticalCenter(target);

      if (offset.y > middleY) {
        this.insertBefore(this.sortableItem, target.nextSibling);
      } else {
        this.insertBefore(this.sortableItem, target);
      }
    }
  }

  handleDragEnd(event: DragEvent) {
    event.preventDefault();
    this.sortableItem.ghost = false;

    emitEvent(this, 'kemet-drag-end', {
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

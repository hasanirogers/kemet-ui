import { html, css, LitElement } from 'lit';
import { polyfill } from 'mobile-drag-drop';
import { emitEvent } from '../../utilities/misc/events.js';

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

export default class KemetSortable extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          gap: 1rem;
          flex-direction: column;
        }
      `,
    ];
  }

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

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-sortable') || customElements.define('kemet-sortable', KemetSortable);

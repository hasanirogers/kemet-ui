import { html, css, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-draggable
 * @summary A draggable element with the ability to remember its position.
 *
 * @prop {string} memory - A unique identifier used to store the element's position in local storage.
 * @prop {string} top - The elements top position in pixels.
 * @prop {string} left - The element's left position in pixels.
 * @prop {boolean} measure - If set to true, will measure the width and height of the element's content and apply it to the host element.
 *
 * @event kemet-draggable-start
 * @event kemet-draggable-stop
 *
 */

export default class KemetDraggable extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      #draggable {
        position: absolute;
      }
    `;
  }

  static get properties() {
    return {
      memory: {
        type: String,
      },
      top: {
        type: String,
      },
      left: {
        type: String,
      },
      measure: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();

    // managed properties defaults
    this.top = 'auto';
    this.left = 'auto';
    this.measure = false;
  }

  firstUpdated() {
    // standard properties
    /** @internal */
    this.position1 = 0;
    this.position2 = 0;
    this.position3 = 0;
    this.position4 = 0;
    this.mouseMove = event => this.drag(event);
    this.mouseUp = () => this.stopDrag();
    this.draggableElement = this.shadowRoot.getElementById('draggable');

    const savedPosition = JSON.parse(localStorage.getItem(this.memory));

    if (savedPosition) {
      this.top = savedPosition.top;
      this.left = savedPosition.left;
    }

    if (this.measure) {
      this.measureContent();
    }
  }

  render() {
    return html`
      <div id="draggable" @mousedown=${event => this.startDrag(event)} style="top:${this.top}; left:${this.left}">
        <slot></slot>
      </div>
    `;
  }

  startDrag(event) {
    if (event) {
      event.preventDefault();

      this.position3 = event.clientX;
      this.position4 = event.clientY;
    }

    document.addEventListener('mouseup', this.mouseUp);
    document.addEventListener('mousemove', this.mouseMove);

    emitEvent(this, 'kemet-draggable-start', this);
  }

  drag(event) {
    event.preventDefault();

    this.position1 = this.position3 - event.clientX;
    this.position2 = this.position4 - event.clientY;
    this.position3 = event.clientX;
    this.position4 = event.clientY;

    this.top = `${this.draggableElement.offsetTop - this.position2}px`;
    this.left = `${this.draggableElement.offsetLeft - this.position1}px`;
  }

  stopDrag() {
    document.removeEventListener('mouseup', this.mouseUp);
    document.removeEventListener('mousemove', this.mouseMove);

    if (this.memory) {
      const savedPosition = {
        top: this.top,
        left: this.left,
      };

      localStorage.setItem(this.memory, JSON.stringify(savedPosition));
    }

    emitEvent(this, 'kemet-draggable-stop', this);
  }

  measureContent() {
    this.style.width = `${this.draggableElement.offsetWidth}px`;
    this.style.height = `${this.draggableElement.offsetHeight}px`;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-draggable') || customElements.define('kemet-draggable', KemetDraggable);

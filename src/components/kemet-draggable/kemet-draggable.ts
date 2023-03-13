import { html, css, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
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

@customElement('kemet-draggable')
export default class KemetDraggable extends LitElement {
  static styles = [css`
    :host {
      display: inline-block;
    }

    #draggable {
      position: absolute;
    }
  `];

  @property({ type: String })
  memory: string;

  @property({ type: String })
  top: string = 'auto';

  @property({ type: String })
  left: string = 'auto';

  @property({ type: Boolean })
  measure: boolean = false;

  @state()
  position1: number;

  @state()
  position2: number;

  @state()
  position3: number;

  @state()
  position4: number;

  @state()
  mouseMove: (event) => void;

  @state()
  mouseUp: () => void;

  @query('#draggable')
  draggableElement: HTMLElement;


  firstUpdated() {
    // standard properties
    /** @internal */
    this.position1 = 0;
    this.position2 = 0;
    this.position3 = 0;
    this.position4 = 0;
    this.mouseMove = event => this.drag(event);
    this.mouseUp = () => this.stopDrag();

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

    this.top = `${this.draggableElement?.offsetTop - this.position2}px`;
    this.left = `${this.draggableElement?.offsetLeft - this.position1}px`;
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
    this.style.width = `${this.draggableElement?.offsetWidth}px`;
    this.style.height = `${this.draggableElement?.offsetHeight}px`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-draggable': KemetDraggable
  }
}

import { html, css, LitElement } from 'lit';

export class KemetDraggable extends LitElement {
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

    // js property defaults
    this.position1 = 0;
    this.position2 = 0;
    this.position3 = 0;
    this.position4 = 0;
    this.mouseMove = event => this.drag(event);
    this.mouseUp = () => this.stopDrag();
  }

  firstUpdated() {
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

    this.dispatchEvent(new CustomEvent('kemet-draggable-start', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
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

    this.dispatchEvent(new CustomEvent('kemet-draggable-stop', {
      bubbles: true,
      composed: true,
      detail: this,
    }));
  }

  measureContent() {
    this.style.width = `${this.draggableElement.offsetWidth}px`;
    this.style.height = `${this.draggableElement.offsetHeight}px`;
  }
}

window.customElements.define('kemet-draggable', KemetDraggable);

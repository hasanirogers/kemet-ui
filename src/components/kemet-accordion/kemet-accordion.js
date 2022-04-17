import { html, css, LitElement } from 'lit';

export default class KemetAccordion extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          box-shadow: 0 0.5rem 0.5rem 0 rgb(0 0 0 / 10%);
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * The index value for the most recently opened panel
       */
      currentPanel: {
        type: Number,
      },
      /**
       * Support for closing all inactive panels when one is opened
       */
      togglePanels: {
        type: Boolean,
        attribute: 'toggle-panels',
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.togglePanels = false;
    this.currentPanel = undefined;

    // bindings
    this.addEventListener('kemet-accordion-panel-opened', this.handlePanelOpened.bind(this));
  }

  firstUpdated() {
    this.onKeyDown = event => this.handleKeyDown(event);
  }

  render() {
    return html`<slot @slotchange=${event => this.handleSlotChange(event)}></slot>`;
  }

  handleSlotChange() {
    this.panels = this.querySelectorAll('kemet-accordion-panel');

    this.panels.forEach((panel) => {
      panel.removeEventListener('keydown', this.onKeyDown);
      panel.addEventListener('keydown', this.onKeyDown);
    });
  }

  handlePanelOpened(event) {
    if (this.togglePanels) {
      this.panels.forEach((panel) => {
        if (panel !== event.detail) {
          panel.opened = false;
        }
      });
    }
  }

  navigatePanels(direction) {
    switch (direction) {
      case 'home':
        this.currentPanel = 0;
        break;
      case 'end':
        this.currentPanel = this.panels.length - 1;
        break;
      case 'next':
        this.currentPanel += 1;
        break;
      case 'prev':
        this.currentPanel -= 1;
        break;
      default:
        this.currentPanelFocus = 0;
        break;
    }

    if (this.currentPanel > this.panels.length - 1) this.currentPanel = 0;
    if (this.currentPanel < 0) this.currentPanel = this.panels.length - 1;

    this.panels[this.currentPanel].shadowRoot.querySelector('button').focus();
  }

  handleKeyDown(event) {
    switch (event.key) {
      case 'Enter':
      case 'Space':
        event.preventDefault();
        event.target.click();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        this.navigatePanels('prev');
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        this.navigatePanels('next');
        break;
      case 'End':
        event.preventDefault();
        this.navigatePanels('end');
        break;
      case 'Home':
        event.preventDefault();
        this.navigatePanels('home');
        break;
      default:
        break;
    }
  }

  expandAll() {
    this.panels.forEach((panel) => {
      panel.opened = true;
    });
  }

  collapseAll() {
    this.panels.forEach((panel) => {
      panel.opened = false;
    });
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-accordion') || customElements.define('kemet-accordion', KemetAccordion);

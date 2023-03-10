import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stylesBase } from './styles';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-accordion
 * @summary A component that acts like a standard accordion.
 *
 * @prop {number} currentPanel - The index value for the most recently opened panel
 * @prop {boolean} togglePanels - Support for closing all inactive panels when one is opened
 *
 */

@customElement('kemet-accordion')
export default class KemetAccordion extends LitElement {
  static styles = [stylesBase];

  @property({ type: Number })
  currentPanel: number;

  @property({ type: Boolean, attribute: 'toggle-panels '})
  togglePanels: boolean = false;

  @state()
  panels: any;

  @state()
  onKeyDown: (event: any) => any;

  @state()
  currentPanelFocus: number;

  constructor() {
    super();

    // bindings
    this.addEventListener('kemet-accordion-panel-opened', this.handlePanelOpened.bind(this));
  }

  firstUpdated() {
    this.onKeyDown = event => this.handleKeyDown(event);
  }

  render() {
    return html`<slot @slotchange=${() => this.handleSlotChange()}></slot>`;
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
      this.panels.forEach((panel: any) => {
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

declare global {
  interface HTMLElementTagNameMap {
    'kemet-accordion': KemetAccordion
  }
}

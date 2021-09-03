/* eslint-disable no-case-declarations */
import { LitElement, html, css } from 'lit';

export class KemetTabs extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          overflow: hidden;
        }

        ::slotted([slot='links']) {
          overflow: auto;
        }

        ::slotted([slot='panels']) {
          display: flex;
        }

        :host([panel-effect='slide']) #panels {
          transition: transform var(--kemet-tabs-transition-speed, 0.5s) linear;
        }

        :host([panel-effect='fade']) ::slotted([slot='panels']) {
          flex-flow: row nowrap;
        }
      `,
    ];
  }

  static get properties() {
    return {
      selected: {
        type: String,
        reflect: true,
      },
      selectedIndex: {
        type: Number,
      },
      panelPosition: {
        type: Number,
      },
      panelEffect: {
        type: String,
        reflect: true,
        attribute: 'panel-effect',
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.selectedIndex = 0;
    this.panelPosition = 0;
    this.panelEffect = 'none';

    // standard properties
    this.tabs = [];
    this.panels = [];

    this.keyCodes = {
      ENTER: 13,
      SPACE: 32,
      HOME: 36,
      END: 35,
      RIGHT: 39,
      LEFT: 37,
    };

    this.addEventListener('kemet-tab-selected', this.tabSelectedChange.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    return html`
      <slot name="links"></slot>
      <section id="panels" part="panels" style="transform: translateX(${this.panelPosition}px)">
        <slot name="panels"></slot>
      </section>
    `;
  }

  firstUpdated() {
    this.init();
  }

  updated() {
    this.selectTab();
    this.selectPanel();
    this.determineFade();
  }

  init() {
    const tabs = this.querySelectorAll('kemet-tab');
    const panels = this.querySelectorAll('kemet-tab-panel');
    const index = {
      tabs: 0,
      panels: 0,
    };

    tabs.forEach((tab) => {
      // give each tab an index to select by if link/panel is not used
      tab.index = index.tabs;
      index.tabs += 1;

      // store the list of tabs
      this.tabs = this.tabs.concat(tab);

      // add keyboard support
      tab.addEventListener('keydown', event => this.handleTabKeydown(event));
    });

    panels.forEach((panel) => {
      // give each panel an index to select by if link/panel is not used
      panel.index = index.panels;
      index.panels += 1;

      // store the list of panels
      this.panels = this.panels.concat(panel);
    });

    // default to the first tab/panel selected
    if (this.tabs.length > 0) this.tabs[0].selected = true;
    if (this.panels.length > 0) this.panels[0].selected = true;
  }

  selectTab() {
    // if the user uses the selected attribute select by it
    if (this.selected) {
      this.tabs.forEach((tab) => {
        const tabName = tab.getAttribute('link');

        if (tabName === this.selected) {
          tab.selected = true;
          this.selected = tabName;
        } else {
          tab.selected = false;
        }
      });

      // otherwise select by index
    } else {
      this.tabs.forEach((tab) => {
        if (this.selectedIndex === tab.index) {
          tab.selected = true;
        } else {
          tab.selected = false;
        }
      });
    }
  }

  selectPanel() {
    // if the user uses the selected attribute select by it
    if (this.selected) {
      this.panels.forEach((panel) => {
        const panelName = panel.getAttribute('panel');

        if (this.panelEffect === 'fade' && panel.index !== 0) {
          panel.classList.add('push');
        }

        if (panelName === this.selected) {
          panel.selected = true;
          this.animatePanel(panelName, null);
        } else {
          panel.selected = false;
        }
      });

      // otherwise select by index
    } else {
      this.panels.forEach((panel) => {
        if (this.panelEffect === 'fade' && panel.index !== 0) {
          panel.classList.add('push');
        }

        if (this.selectedIndex === panel.index) {
          panel.selected = true;
          this.animatePanel(null, panel.index);
        } else {
          panel.selected = false;
        }
      });
    }
  }

  dispatchTabChange() {
    const tabChanged = new CustomEvent('kemet-tab-changed', {
      bubbles: true,
      composed: true,
      detail: this.selected,
    });

    this.dispatchEvent(tabChanged);
  }

  tabSelectedChange(event) {
    if (this.selected) {
      // if selected has been set, use the string attribute
      this.selected = event.detail.getAttribute('link');
    } else {
      // otherwise use the generated index
      this.selectedIndex = event.detail.index;
    }

    this.dispatchTabChange();
  }

  determineFade() {
    // const panels = this.querySelectorAll('kemet-tab-panel');

    this.panels.forEach((panel) => {
      // add fade class if panel effect is fade
      if (this.panelEffect === 'fade') panel.classList.add('fade');
    });
  }

  handleResize() {
    if (this.selected) {
      this.animatePanel(this.selected, null);
    } else {
      this.animatePanel(null, this.selectedIndex);
    }
  }

  animatePanel(panelName, panelIndex) {
    if (panelName) {
      const selectedPanel = this.querySelector(`[panel="${panelName}"]`);
      if (selectedPanel) this.panelPosition = selectedPanel.offsetLeft * -1;
    } else {
      this.panelPosition = this.panels[panelIndex].offsetLeft * -1;
    }
  }

  handleTabKeydown(event) {
    if (this.selected) {
      switch (event.keyCode) {
        case this.keyCodes.HOME:
          this.selected = this.tabs[0].getAttribute('link');
          break;
        case this.keyCodes.END:
          this.selected = this.tabs[this.tabs.length - 1].getAttribute('link');
          break;
        case this.keyCodes.RIGHT:
          const nextLinkElement = this.querySelector('kemet-tab[selected]').nextElementSibling;
          const nextLink = nextLinkElement ? nextLinkElement.getAttribute('link') : false;

          if (nextLink) {
            this.selected = nextLink;
          }
          break;
        case this.keyCodes.LEFT:
          const previousLinkElement = this.querySelector('kemet-tab[selected]').previousElementSibling;
          const previousLink = previousLinkElement ? previousLinkElement.getAttribute('link') : false;

          if (previousLink) {
            this.selected = previousLink;
          }
          break;
        default: break;
      }

      this.querySelector(`[link=${this.selected}]`).focus();
    } else {
      switch (event.keyCode) {
        case this.keyCodes.HOME:
          this.selectedIndex = 0;
          break;
        case this.keyCodes.END:
          this.selectedIndex = this.tabs.length - 1;
          break;
        case this.keyCodes.RIGHT:
          if (this.selectedIndex < this.tabs.length - 1) {
            this.selectedIndex += 1;
          } else {
            this.selectedIndex = this.tabs.length - 1;
          }
          break;
        case this.keyCodes.LEFT:
          if (this.selectedIndex < 1) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex -= 1;
          }
          break;
        default: break;
      }

      this.tabs[this.selectedIndex].focus();
    }
  }
}

window.customElements.define('kemet-tabs', KemetTabs);

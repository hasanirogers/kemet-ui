/* eslint-disable no-lonely-if */
/* eslint-disable no-case-declarations */
import { LitElement, html } from 'lit';
import { stylesKemetTabs } from './styles';
import { emitEvent } from '../../utilities/misc/events.js';
import { customElement, property, state } from 'lit/decorators.js';
import { KemetTabInterface, KemetTabPanelInterface, TypePanelEffect, TypePlacement, TypeTabsAlign } from './types';
import KemetTabPanel from './kemet-tab-panel';


/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-tabs
 * @summary A group of tabs and panels.
 *
 * @prop {string} selected - The selected tab by name
 * @prop {number} selectedIndex - The selected tab by index
 * @prop {number} panelPosition - Positions the current panel
 * @prop {string} panelEffect - The transition effect for panels
 * @prop {boolean} swipe - Determines whether or not to enable swipe behavior
 * @prop {string} placement - Places the tabs to the top, right, bottom, or left
 * @prop {boolean} divider - Determines whether or not to show a divider line
 * @prop {string} tabsAlign - Spacing alignment of the tabs
 * @prop {object} ink - An object that contains information about the ink
 * @prop {boolean} hideInk - Determines whether or not to hide the ink
 * @prop {boolean} overflow - Is true when the space of the tabs is larger than it's container
 *
 * @slot tab - Place the tabs here.
 * @slot panel - Place the panels here.
 *
 * @csspart links - The container for the tablist.
 * @csspart tablist - Contains the tabs.
 * @csspart panels - Contains the panels.
 * @csspart ink - The ink element.
 * @csspart divider - The divider element.
 *
 * @cssproperty --kemet-tabs-ink-size - The thickness of the ink. Default: 6px.
 * @cssproperty --kemet-tabs-ink-radius - The radius on the ink. Default:  6px.
 * @cssproperty --kemet-tabs-ink-color - The color of the ink. Default:  var(--kemet-color-background).
 * @cssproperty --kemet-tabs-divider-size - The thickness of the divider. Default: 1px.
 * @cssproperty --kemet-tabs-divider-color - The color of the divider. Default:  var(--kemet-color-gray4).
 * @cssproperty --kemet-tabs-transition-speed - The transition speed of the panels. Default:  0.5s.
 * @cssproperty --kemet-tabs-spacer - The space between tabs and panels. Default:  1rem.
 *
 * @event kemet-tab-changed - Fires when a tab is changed
 *
 */

@customElement('kemet-tabs')
export default class KemetTabs extends LitElement {
  static styles = [stylesKemetTabs];

  @property({ type: String, reflect: true })
  selected: string;

  @property({ type: Number })
  selectedIndex: number = 0;

  @property({ type: Number })
  panelPosition: number = 0;

  @property({ type: String, reflect: true, attribute: 'panel-effect' })
  panelEffect: TypePanelEffect = 'none';

  @property({ type: Boolean })
  swipe: boolean;

  @property({ type: String, reflect: true })
  placement: TypePlacement = 'top';

  @property({ type: Boolean })
  divider: boolean;

  @property({ type: String, reflect: true, attribute: 'tabs-align' })
  tabsAlign: TypeTabsAlign = 'center';

  @property({ type: Object })
  ink: any;

  @property({ type: Boolean, attribute: 'hide-ink' })
  hideInk: boolean = false;

  @property({ type: Boolean, reflect: true })
  overflow: boolean;

  @state()
  tabs: any[];

  @state()
  panels: any[];

  @state()
  xDown: number | null;

  @state()
  yDown: number | null;

  @state()
  links: HTMLElement;


  constructor() {
    super();

    this.addEventListener('kemet-tab-selected', this.tabSelectedChange.bind(this));
    this.addEventListener('kemet-tab-close', this.handleTabClose.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  firstUpdated() {
    // standard properties
    this.tabs = [];
    this.panels = [];
    this.xDown = null;
    this.yDown = null;

    this.links = this.shadowRoot.getElementById('links');
  }

  render() {
    return html`
      ${this.makeLeftArrow()}
      ${this.makeRightArrow()}
      <div id="links" part="links">
        <div part='tablist' role="tablist">
          <slot name="tab" @slotchange=${() => this.handleLinksSlotChange()}></slot>
        </div>
        ${this.makeInk('links')}
      </div>
      ${this.makeInk('host')}
      ${this.makeDivider()}
      <section id="panels" part="panels" style="transform:translateX(${this.panelPosition}px);">
        <div>
          <slot name="panel" @slotchange=${() => this.handlePanelsSlotChange()}></slot>
        </div>
      </section>
    `;
  }

  updated() {
    this.determineFade();
  }

  handleLinksSlotChange() {
    const tabs = this.querySelectorAll('kemet-tab');
    let index = 0;

    tabs.forEach((tab: KemetTabInterface) => {
      // give each tab an index to select by if link/panel is not used
      tab.index = index;
      index += 1;

      // store the list of tabs
      this.tabs = this.tabs.concat(tab);

      // add keyboard support
      tab.addEventListener('keydown', event => this.handleTabKeydown(event));
    });

    // default to the first tab/panel selected
    if (this.tabs.length > 0) this.tabs[0].selected = true;

    setTimeout(() => {
      this.selectTab();
    }, 1);
    this.determineOverflow();
  }

  handlePanelsSlotChange() {
    const panels = this.querySelectorAll('kemet-tab-panel');
    const panelElement = this.shadowRoot.getElementById('panels');
    let index = 0;

    panels.forEach((panel: KemetTabPanelInterface) => {
      // give each panel an index to select by if link/panel is not used
      panel.index = index;
      index += 1;

      // store the list of panels
      this.panels = this.panels.concat(panel);
    });

    // default to the first tab/panel selected
    if (this.panels.length > 0) this.panels[0].selected = true;

    // add swipe support
    if (this.swipe) {
      panelElement.addEventListener('touchstart', event => this.handleTouchStart(event), false);
      panelElement.addEventListener('touchmove', event => this.handleTouchMove(event), false);
    }

    this.selectPanel();
  }

  handleLeftArrow() {
    const selectedElement = this.tabs.find(tab => tab.selected) || this.tabs[0];
    const previousElement = selectedElement.previousElementSibling;
    const selectedIndex = this.tabs.findIndex(tab => tab.selected);

    if (this.selected) {
      this.selected = previousElement ? previousElement.link : selectedElement.link;
    } else {
      this.selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : 0;
    }

    if (previousElement) {
      this.links.scrollLeft = previousElement.offsetLeft - 20;
    }

    this.selectTab();
    this.selectPanel();
  }

  handleRightArrow() {
    const selectedElement = this.tabs.find(tab => tab.selected) || this.tabs[this.tabs.length - 1];
    const nextElement = selectedElement.nextElementSibling;
    const selectedIndex = this.tabs.findIndex(tab => tab.selected);

    if (this.selected) {
      this.selected = nextElement ? nextElement.link : selectedElement.link;
    } else {
      this.selectedIndex = selectedIndex < this.tabs.length - 1
        ? selectedIndex + 1
        : this.tabs.length - 1;
    }

    if (nextElement) {
      this.links.scrollLeft = nextElement.offsetLeft - 20;
    }

    this.selectTab();
    this.selectPanel();
  }

  handleTabClose(event) {
    const tab = event.detail;
    const panel = this.panels[tab.index];

    this.selected = this.tabs[0].link;
    this.selectedIndex = 0;

    panel.remove();
    tab.remove();
  }

  makeInk(location) {
    if (this.hideInk) {
      return null;
    }

    if ((this.placement === 'top' || this.placement === 'bottom') && this.ink && location === 'links') {
      return html`<div part="ink" style="width:${this.ink.width}; transform:translateX(${this.ink.positionX})"></div>`;
    }

    if ((this.placement === 'left' || this.placement === 'right') && this.ink && location === 'host') {
      return html`<div part="ink" style="height:${this.ink.height}; transform:translateY(${this.ink.positionY})"></div>`;
    }

    return null;
  }

  makeDivider() {
    if (this.divider) {
      return html`<div part="divider"></div>`;
    }

    return null;
  }

  makeLeftArrow() {
    if (this.overflow) {
      return html`<kemet-icon icon='chevron-left' size="20" @click=${() => this.handleLeftArrow()}></kemet-icon>`;
    }

    return null;
  }

  makeRightArrow() {
    if (this.overflow) {
      return html`<kemet-icon icon='chevron-right' size="20" @click=${() => this.handleRightArrow()}></kemet-icon>`;
    }

    return null;
  }

  selectTab() {
    const marginLeft = this.links ? parseInt(window.getComputedStyle(this.links).marginLeft.replace('px', ''), 10) : 0;
    const overflowOffset = this.overflow ? marginLeft : 0;

    // if the user uses the selected attribute select by it
    if (this.selected) {
      this.tabs.forEach((tab) => {
        const tabName = tab.getAttribute('link');

        if (tabName === this.selected) {
          tab.selected = true;
          this.selected = tabName;

          this.ink = {
            width: `${tab.offsetWidth}px`,
            height: `${tab.offsetHeight}px`,
            positionX: `${tab.offsetLeft - overflowOffset}px`,
            positionY: `${tab.offsetTop}px`,
          };

          this.links.scrollLeft = tab.offsetLeft - overflowOffset;
        } else {
          tab.selected = false;
        }
      });

      // otherwise select by index
    } else {
      this.tabs.forEach((tab) => {
        if (this.selectedIndex === tab.index) {
          tab.selected = true;

          this.ink = {
            width: `${tab.offsetWidth}px`,
            height: `${tab.offsetHeight}px`,
            positionX: `${tab.offsetLeft - overflowOffset}px`,
            positionY: `${tab.offsetTop}px`,
          };

          this.links.scrollLeft = tab.offsetLeft - overflowOffset;
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

        if (this.placement === 'left' || this.placement === 'right') {
          panel.classList.add('vertical');
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

        if (this.placement === 'left' || this.placement === 'right') {
          panel.classList.add('vertical');
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
    emitEvent(this, 'kemet-tab-changed', this.selected);
  }

  tabSelectedChange(event) {
    if (this.selected) {
      // if selected has been set, use the string attribute
      this.selected = event.detail.getAttribute('link');
    } else {
      // otherwise use the generated index
      this.selectedIndex = event.detail.index;
    }

    this.selectTab();
    this.selectPanel();
    this.dispatchTabChange();
  }

  determineFade() {
    this.panels.forEach((panel) => {
      // add fade class if panel effect is fade
      if (this.panelEffect === 'fade') panel.classList.add('fade');
    });
  }

  determineOverflow() {
    const tabsContainerWidth = this.offsetWidth;
    const tabElements = this.querySelectorAll('kemet-tab');

    let totalTabsWidth = 0;

    tabElements.forEach((tab) => {
      totalTabsWidth += tab.offsetWidth;
    });

    if (totalTabsWidth > tabsContainerWidth && (this.placement === 'top' || this.placement === 'bottom')) {
      this.overflow = true;
    } else {
      this.overflow = false;
    }
  }

  handleResize() {
    if (this.tabs && this.panels) {
      const marginLeft = this.links ? parseInt(window.getComputedStyle(this.links).marginLeft.replace('px', ''), 10) : 0;
      const overflowOffset = this.overflow ? marginLeft : 0;
      const selectedElement = this.tabs.find(tab => tab.selected);

      if (selectedElement) {
        this.ink = {
          width: `${selectedElement.offsetWidth}px`,
          height: `${selectedElement.offsetHeight}px`,
          positionX: `${selectedElement.offsetLeft - overflowOffset}px`,
          positionY: `${selectedElement.offsetTop}px`,
        };
      }

      this.determineOverflow();

      if (this.selected) {
        this.animatePanel(this.selected, null);
      } else {
        this.animatePanel(null, this.selectedIndex);
      }
    }
  }

  animatePanel(panelName, panelIndex) {
    if (panelName) {
      const selectedPanel = this.querySelector(`[panel="${panelName}"]`) as KemetTabPanelInterface;
      if (selectedPanel) this.panelPosition = selectedPanel.offsetLeft * -1;
    } else {
      if (this.panels[panelIndex]) this.panelPosition = this.panels[panelIndex].offsetLeft * -1;
    }
  }

  handleTabKeydown(event) {
    if (this.selected) {
      switch (event.key) {
        case 'Home':
          this.selected = this.tabs[0].getAttribute('link');
          break;
        case 'End':
          this.selected = this.tabs[this.tabs.length - 1].getAttribute('link');
          break;
        case 'ArrowRight':
          const nextLinkElement = this.querySelector('kemet-tab[selected]').nextElementSibling;
          const nextLink = nextLinkElement ? nextLinkElement.getAttribute('link') : false;

          if (nextLink) {
            this.selected = nextLink;
          }
          break;
        case 'ArrowLeft':
          const previousLinkElement = this.querySelector('kemet-tab[selected]').previousElementSibling;
          const previousLink = previousLinkElement ? previousLinkElement.getAttribute('link') : false;

          if (previousLink) {
            this.selected = previousLink;
          }
          break;
        default: break;
      }

      this.tabs.find(tab => tab.link === this.selected).focus();
    } else {
      switch (event.key) {
        case 'Home':
          this.selectedIndex = 0;
          break;
        case 'End':
          this.selectedIndex = this.tabs.length - 1;
          break;
        case 'ArrowRight':
          if (this.selectedIndex < this.tabs.length - 1) {
            this.selectedIndex += 1;
          } else {
            this.selectedIndex = this.tabs.length - 1;
          }
          break;
        case 'ArrowLeft':
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

  handleTouchStart(event) {
    this.xDown = event.touches[0].clientX;
    this.yDown = event.touches[0].clientY;
  }

  handleTouchMove(event) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;
    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    const nextElement = this.querySelector('kemet-tab-panel[selected]')?.nextElementSibling;
    const next = nextElement ? nextElement.getAttribute('panel') : false;
    const previousElement = this.querySelector('kemet-tab-panel[selected]')?.previousElementSibling;
    const previous = previousElement ? previousElement.getAttribute('panel') : false;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        if (this.selected) {
          if (next) this.selected = next;
        } else {
          if (this.selectedIndex < this.tabs.length) this.selectedIndex += 1;
        }
      } else {
        if (this.selected) {
          if (previous) this.selected = previous;
        } else {
          if (this.selectedIndex > 0) this.selectedIndex -= 1;
        }
      }

      this.selectTab();
      this.selectPanel();
    }

    this.xDown = null;
    this.yDown = null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-tabs': KemetTabs
  }
}

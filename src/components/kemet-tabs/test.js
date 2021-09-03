import { html, fixture, expect } from '@open-wc/testing';

import './kemet-tabs.js';
import './kemet-tab.js';
import './kemet-tab-panel.js';

describe('KemetTabs', () => {
  it('can select a panel', async () => {
    const element = await fixture(html`
      <kemet-tabs selected="ffvii"></kemet-tabs>
    `);

    expect(element.selected).to.equal('ffvii');
  });

  it('can populate tabs and panels correctly', async () => {
    const element = await fixture(html`
      <kemet-tabs selected="ffxv">
        <nav slot="links">
          <kemet-tab link="ffvii">Final Fantasy VII</kemet-tab>
          <kemet-tab link="ffxv">Final Fantasy XV</kemet-tab>
          <kemet-tab link="ffx">Final Fantasy X</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel panel="ffvii">Contents</kemet-tab-panel>
          <kemet-tab-panel panel="ffxv">Contents</kemet-tab-panel>
          <kemet-tab-panel panel="ffx">Contents</kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    expect(element.tabs.length).to.equal(3);
    expect(element.panels.length).to.equal(3);
  });

  it('should correctly select a tab', async () => {
    const element = await fixture(html`
      <kemet-tabs selected="ffxv">
        <nav slot="links">
          <kemet-tab link="ffvii">Final Fantasy VII</kemet-tab>
          <kemet-tab link="ffxv">Final Fantasy XV</kemet-tab>
          <kemet-tab link="ffx">Final Fantasy X</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel panel="ffvii">Contents</kemet-tab-panel>
          <kemet-tab-panel panel="ffxv">Contents</kemet-tab-panel>
          <kemet-tab-panel panel="ffx">Contents</kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    element.querySelector('[link="ffvii"').click();

    element.addEventListener('kemet-tab-selected', () => {
      expect(element.selected).to.equal('ffvii');
    });
  });

  it('has a default selectedIndex of 0', async () => {
    const element = await fixture(html`
      <kemet-tabs></kemet-tabs>
    `);

    expect(element.selectedIndex).to.equal(0);
  });

  it('should correctly select a tab by index', async () => {
    const element = await fixture(html`
      <kemet-tabs>
        <nav slot="links">
          <kemet-tab>One</kemet-tab>
          <kemet-tab>Two</kemet-tab>
          <kemet-tab>Three</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel>Panel One</kemet-tab-panel>
          <kemet-tab-panel>Panel Two</kemet-tab-panel>
          <kemet-tab-panel>Panel Three</kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    element.querySelector('kemet-tab:last-child').click();

    element.addEventListener('kemet-tab-selected', () => {
      expect(element.selectedIndex).to.equal(2);
    });
  });

  it('should handle resizing', async () => {
    const element = await fixture(html`
      <kemet-tabs>
        <nav slot="links">
          <kemet-tab>One</kemet-tab>
          <kemet-tab>Two</kemet-tab>
          <kemet-tab>Three</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel>Panel One</kemet-tab-panel>
          <kemet-tab-panel>Panel Two</kemet-tab-panel>
          <kemet-tab-panel>Panel Three</kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    window.resizeTo(800, 600);
    element.handleResize();
    element.selected = 'none';
    element.handleResize();

    expect(element.offsetWidth).to.equal(784);
  });

  it('should add fade class to kemet-tab-panel when panel-effect is fade', async () => {
    const element = await fixture(html`
      <kemet-tabs panel-effect="fade">
        <nav slot="links">
          <kemet-tab>One</kemet-tab>
          <kemet-tab>Two</kemet-tab>
          <kemet-tab>Three</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel>Panel One</kemet-tab-panel>
          <kemet-tab-panel>Panel Two</kemet-tab-panel>
          <kemet-tab-panel>Panel Three</kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    expect(element.querySelector('kemet-tab-panel').classList.contains('fade')).to.equal(true);

    element.selected = 'none';

    expect(element.querySelector('kemet-tab-panel').classList.contains('fade')).to.equal(true);
  });

  it('should select the correct tab given the key', async () => {
    const indexElement = await fixture(html`
      <kemet-tabs>
        <nav slot="links">
          <kemet-tab>One</kemet-tab>
          <kemet-tab>Two</kemet-tab>
          <kemet-tab>Three</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel>Panel One</kemet-tab-panel>
          <kemet-tab-panel>Panel Two</kemet-tab-panel>
          <kemet-tab-panel>Panel Three</kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    const selectedElement = await fixture(html`
      <kemet-tabs selected="one">
        <nav slot="links">
          <kemet-tab link="one">One</kemet-tab>
          <kemet-tab link="two">Two</kemet-tab>
          <kemet-tab link="three">Three</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel panel="one">Panel One</kemet-tab-panel>
          <kemet-tab-panel panel="two">Panel Two</kemet-tab-panel>
          <kemet-tab-panel panel="three">Panel Three</kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    const keyCodes = {
      ENTER: 13,
      SPACE: 32,
      HOME: 36,
      END: 35,
      RIGHT: 39,
      LEFT: 37,
    };

    const keydownHomeEvent = new KeyboardEvent('keydown', { keyCode: keyCodes.HOME });
    const keydownEndEvent = new KeyboardEvent('keydown', { keyCode: keyCodes.END });
    const keydownRightEvent = new KeyboardEvent('keydown', { keyCode: keyCodes.RIGHT });
    const keydownLeftEvent = new KeyboardEvent('keydown', { keyCode: keyCodes.LEFT });
    const keydownSpaceEvent = new KeyboardEvent('keydown', { keyCode: keyCodes.SPACE });

    // end
    indexElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownEndEvent);
    selectedElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownEndEvent);
    expect(indexElement.selectedIndex).to.equal(2);
    expect(selectedElement.selected).to.equal('three');

    // left
    indexElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownLeftEvent);
    selectedElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownLeftEvent);
    expect(indexElement.selectedIndex).to.equal(1);
    expect(selectedElement.selected).to.equal('three');

    // right at last
    indexElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownRightEvent);
    selectedElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownRightEvent);
    expect(indexElement.selectedIndex).to.equal(2);
    expect(selectedElement.selected).to.equal('two');

    // home
    indexElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownHomeEvent);
    selectedElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownHomeEvent);
    expect(indexElement.selectedIndex).to.equal(0);
    expect(selectedElement.selected).to.equal('one');

    // left at first
    indexElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownLeftEvent);
    selectedElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownLeftEvent);
    expect(indexElement.selectedIndex).to.equal(0);
    expect(selectedElement.selected).to.equal('one');

    // right
    indexElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownRightEvent);
    selectedElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownRightEvent);
    expect(indexElement.selectedIndex).to.equal(1);
    expect(selectedElement.selected).to.equal('two');

    // space
    indexElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownSpaceEvent);
    selectedElement.querySelector('kemet-tab[selected]').dispatchEvent(keydownSpaceEvent);
    expect(indexElement.selectedIndex).to.equal(1);
    expect(selectedElement.selected).to.equal('two');
  });

  it('passes the a11y audit', async () => {
    const element = await fixture(html`
      <kemet-tabs></kemet-tabs>
    `);

    await expect(element).shadowDom.to.be.accessible();
  });
});

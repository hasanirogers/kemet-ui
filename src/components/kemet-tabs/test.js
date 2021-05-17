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

  it('passes the a11y audit', async () => {
    const element = await fixture(html`
      <kemet-tabs></kemet-tabs>
    `);

    await expect(element).shadowDom.to.be.accessible();
  });
});

import { html, fixture, expect } from '@open-wc/testing';

import './kemet-accordion.js';
import './kemet-accordion-panel.js';

describe('KemetAccordion', () => {
  it('has the correct default props', async () => {
    const accordion = await fixture(html`
      <kemet-accordion>
        <kemet-accordion-panel>
          <button slot="trigger">Trigger</button>
          <div slot="body">Body</div>
        </kemet-accordion-panel>
      </kemet-accordion>
    `);

    const panel = await fixture(html`
      <kemet-accordion-panel>
        <button slot="trigger">Trigger</button>
        <div slot="body">Body</div>
      </kemet-accordion-panel>
    `);

    expect(accordion.togglePanels).to.equal(false);
    expect(panel.opened).to.equal(undefined);
    expect(panel.maxHeight).to.equal('0px');
  });

  it('allows the user to open the accordion with an attribute', async () => {
    const element = await fixture(html`
      <kemet-accordion-panel opened>
        <button slot="trigger">Trigger</button>
        <div slot="body">Body</div>
      </kemet-accordion-panel>
    `);

    expect(element.opened).to.equal(true);
  });

  it('allows elements in the panel to toggle the accordion', async () => {
    const toggle = (event) => {
      const accordion = event.target.closest('kemet-accordion-panel');
      accordion.toggle();
    };

    const element = await fixture(html`
      <kemet-accordion-panel opened>
        <button slot="trigger">Trigger</button>
        <div slot="body"><button @click=${event => toggle(event)}>Close</button></div>
      </kemet-accordion-panel>
    `);

    element.querySelector('button').click();
    expect(element.opened).to.equal(false);
  });

  it('expands all panels when called', async () => {
    const accordion = await fixture(html`
      <kemet-accordion>
        <kemet-accordion-panel>
          <button slot="trigger">Trigger</button>
          <div slot="body">Body</div>
        </kemet-accordion-panel>
      </kemet-accordion>
    `);

    accordion.expandAll();

    expect(accordion.querySelector('kemet-accordion-panel').opened).to.equal(true);
  });

  it('collapses all panels when called', async () => {
    const accordion = await fixture(html`
      <kemet-accordion>
        <kemet-accordion-panel opened>
          <button slot="trigger">Trigger</button>
          <div slot="body">Body</div>
        </kemet-accordion-panel>
      </kemet-accordion>
    `);

    accordion.collapseAll();

    expect(accordion.querySelector('kemet-accordion-panel').opened).to.equal(false);
  });
});

import { html, fixture, expect } from '@open-wc/testing';

import './kemet-accordion.js';

describe('KemetAccordion', () => {
  it('has the correct default props', async () => {
    const element = await fixture(html`
      <kemet-accordion></kemet-accordion>
    `);

    expect(element.opened).to.equal(undefined);
    expect(element.maxHeight).to.equal('0px');
    expect(element.closeOthers).to.equal(false);
  });

  it('allows the user to open the accordion with an attribute', async () => {
    const element = await fixture(html`
      <kemet-accordion opened></kemet-accordion>
    `);

    expect(element.opened).to.equal(true);
  });

  it('allows elements in the panel to toggle the accordion', async () => {
    const toggle = (event) => {
      const accordion = event.target.closest('kemet-accordion');
      accordion.toggle();
    };

    const element = await fixture(html`
      <kemet-accordion opened>
        <button slot="trigger">Trigger</button>
        <div slot="panel"><button @click=${event => toggle(event)}>Close</button></div>
      </kemet-accordion>
    `);

    element.querySelector('button').click();
    expect(element.opened).to.equal(false);
  });
});

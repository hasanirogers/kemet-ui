import { html, fixture, expect } from '@open-wc/testing';

import './kemet-fab.js';

const template = () => html`
  <kemet-fab>
    <kemet-icon slot="icon" icon="[chose-an-icon]"></kemet-icon>
    FAB
  </kemet-fab>
`;

describe('KemetFAB', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(template());
    await expect(el).shadowDom.to.be.accessible();
  });

  it('has the correct default props', async () => {
    const element = await fixture(template());

    expect(element.outlined).to.equal(false);
    expect(element.disabled).to.equal(false);
    expect(element.expanded).to.equal(false);
  });

  it('handles mouse events', async () => {
    const element = await fixture(template());
    const mouseOverEvent = new MouseEvent('mouseover');
    const mouseOutEvent = new MouseEvent('mouseout');

    element.dispatchEvent(mouseOverEvent);
    expect(element.expanded).to.equal(true);

    element.dispatchEvent(mouseOutEvent);
    expect(element.expanded).to.equal(false);
  });
});

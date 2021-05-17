import { html, fixture, expect } from '@open-wc/testing';

import './kemet-drawer.js';

describe('KemetDrawer', () => {
  it('has the correct defaults', async () => {
    const element = await fixture(html`
      <kemet-drawer></kemet-drawer>
    `);

    expect(element.opened).to.equal(undefined);
    expect(element.effect).to.equal('slide');
    expect(element.side).to.equal('left');
  });

  it('closes the drawer the drawer itself is clicked on', async () => {
    const element = await fixture(html`
      <kemet-drawer opened>
        <div slot="content">
          <p>This is some content.</p>
        </div>
      </kemet-drawer>
    `);

    element.click();
    expect(element.opened).to.equal(false);
  });

  it('can override the effect via attribute', async () => {
    const element = await fixture(html`
      <kemet-drawer effect="slide"></kemet-drawer>
    `);

    expect(element.effect).to.equal('slide');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <kemet-drawer></kemet-drawer>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

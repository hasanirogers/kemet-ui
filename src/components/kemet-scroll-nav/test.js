import { html, fixture, expect } from '@open-wc/testing';

import './kemet-scroll-nav.js';

describe('KemetScrollNav', () => {
  it('has the correct defaults', async () => {
    const element = await fixture(html`<kemet-scroll-nav></kemet-scroll-nav>`);

    expect(element.effect).to.equal('sticky');
    expect(element.transform).to.equal(false);
    expect(element.offset).to.equal(0);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<kemet-scroll-nav></kemet-scroll-nav>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});

import { html, fixture, expect } from '@open-wc/testing';
import './kemet-scroll-link.js';

describe('KemetScrollLink', () => {
  it('has the correct defaults', async () => {
    const element = await fixture(html`
      <kemet-scroll-link></kemet-scroll-link>
    `);

    expect(element.xOffset).to.equal(0);
    expect(element.yOffset).to.equal(0);
    expect(element.element).to.equal(window);
    expect(element.target).to.equal(document.querySelector('body'));
  });

  it('can override the x-offset by attribute', async () => {
    const element = await fixture(html`
      <kemet-scroll-link x-offset="-42"></kemet-scroll-link>
    `);

    expect(element.xOffset).to.equal(-42);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <kemet-scroll-link></kemet-scroll-link>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

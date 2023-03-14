import { html, fixture, expect } from '@open-wc/testing';
import './kemet-modal.ts';

describe('KemetModal', () => {
  it('has the correct default props', async () => {
    const element = await fixture(html`
      <kemet-modal></kemet-modal>
    `);

    expect(element.opened).to.equal(false);
  });

  it('can close the modal on click', async () => {
    const element = await fixture(html`
      <kemet-modal opened close-on-click></kemet-modal>
    `);

    element.click();
    expect(element.opened).to.equal(false);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <kemet-modal></kemet-modal>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

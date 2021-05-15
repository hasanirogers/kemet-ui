import { html, fixture, expect } from '@open-wc/testing';

import './kemet-ratio.js';

describe('KemetRatio', () => {
  it('has the correct defaults', async () => {
    const element = await fixture(html`
      <kemet-ratio></kemet-ratio>
    `);

    expect(element.aspectRatio).to.equal('16:9');
  });

  it('correctly computes changes to the aspect ratio', async () => {
    const element = await fixture(html`
      <kemet-ratio aspect-ratio="4:3">
        <div>Trigger Slot Change</div>
      </kemet-ratio>
    `);

    expect(element.style.paddingTop).to.equal('75%');
  });

  it('passes the a11y audit', async () => {
    const element = await fixture(html`
      <kemet-ratio></kemet-ratio>
    `);

    await expect(element).shadowDom.to.be.accessible();
  });
});

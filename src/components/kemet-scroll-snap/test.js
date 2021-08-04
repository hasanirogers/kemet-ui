import { html, fixture, expect } from '@open-wc/testing';

import './kemet-scroll-snap.js';

describe('KemetScrollSnap', () => {
  it('has the proper default attributes', async () => {
    const element = await fixture(html`
      <kemet-scroll-snap>
        <div slot="slides">
          <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
          <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
          <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
        </div>
        <div slot="pagination">
          <kemet-scroll-snap-paginator></kemet-scroll-snap-paginator>
        </div>
      </kemet-scroll-snap>
    `);

    expect(element.axis).to.equal('horizontal');
    expect(element.pagination).to.equal('bottom');
  });

  it('sets the vertical html attribute while axis is vertical', async () => {
    const element = await fixture(html`
      <kemet-scroll-snap axis="vertical"></kemet-scroll-snap>
    `);

    const htmlElement = document.querySelector('html');

    element.setVerticalAttribute();
    expect(htmlElement.getAttribute('kemet-scroll-snap-axis')).to.equal('vertical');
  });

  it('successfully populates slide data when slides are present', async () => {
    const element = await fixture(html`
      <kemet-scroll-snap>
        <div slot="slides">
          <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
          <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
          <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
        </div>
      </kemet-scroll-snap>
    `);

    element.makeSlides();

    expect(element.slides[0].id).to.equal(0);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <kemet-scroll-snap></kemet-scroll-snap>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

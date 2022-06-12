import { html, fixture, expect } from '@open-wc/testing';

import './kemet-carousel.js';
import './kemet-carousel-link.js';
import './kemet-carousel-first.js';
import './kemet-carousel-last.js';
import './kemet-carousel-next.js';
import './kemet-carousel-prev.js';
import './kemet-carousel-slide.js';
import './kemet-carousel-current.js';
import './kemet-carousel-total.js';

const template = () => html`
  <kemet-carousel>
    <kemet-carousel-prev slot="prev"></kemet-carousel-prev>
    <kemet-carousel-slide slot="slides">
      Slide 1
      <div slot="information"></div>
    </kemet-carousel-slide>
    <kemet-carousel-slide slot="slides">
      Slide 2
      <div slot="information"></div>
    </kemet-carousel-slide>
    <kemet-carousel-slide slot="slides">
      Slide 3
      <div slot="information"></div>
    </kemet-carousel-slide>
    <kemet-carousel-next slot="next"></kemet-carousel-next>

    <kemet-carousel-first slot="toolbar"></kemet-carousel-first>
    <kemet-carousel-prev slot="toolbar"></kemet-carousel-prev>
    <kemet-carousel-link slide="0" slot="toolbar">1</kemet-carousel-link>
    <kemet-carousel-link slide="1" slot="toolbar">2</kemet-carousel-link>
    <kemet-carousel-link slide="2" slot="toolbar">3</kemet-carousel-link>
    <kemet-carousel-next slot="toolbar"></kemet-carousel-next>
    <kemet-carousel-last slot="toolbar"></kemet-carousel-last>
  </kemet-carousel>
`;

describe('KemetCarousel', () => {
  it('passes the a11y audit', async () => {
    const element = await fixture(template());
    await expect(element).shadowDom.to.be.accessible();
  });

  it('has the correct default props', async () => {
    const element = await fixture(template());

    expect(element.index).to.equal(0);
    expect(element.total).to.equal(3);
    expect(element.inner).to.equal(false);
    expect(element.arrows).to.equal(true);
  });

  it('navigates to the correct slide', async () => {
    const element = await fixture(template());
    const next = element.querySelector('kemet-carousel-next').shadowRoot.querySelector('span');
    const prev = element.querySelector('kemet-carousel-prev').shadowRoot.querySelector('span');
    const last = element.querySelector('kemet-carousel-last').shadowRoot.querySelector('span');
    const first = element.querySelector('kemet-carousel-first').shadowRoot.querySelector('span');

    next.click();
    expect(element.index).to.equal(1);

    prev.click();
    expect(element.index).to.equal(0);

    last.click();
    expect(element.index).to.equal(2);

    first.click();
    expect(element.index).to.equal(0);
  });
});

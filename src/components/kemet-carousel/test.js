import {
  html, fixture, expect, oneEvent,
} from '@open-wc/testing';

import './kemet-carousel.js';
import './kemet-carousel-link.js';
import './kemet-carousel-prev.js';
import './kemet-carousel-next.js';
import './kemet-carousel-slide.js';

describe('KemetCarousel', () => {
  it('has the proper defaults', async () => {
    const element = await fixture(html`
      <kemet-carousel></kemet-carousel>
    `);

    expect(element.index).to.equal(0);
    expect(element.slideshow).to.equal(0);
    expect(element.pagination).to.equal('bottom');
  });

  it('goes to the next slide when called', async () => {
    const element = await fixture(html`
      <kemet-carousel>
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    element.handleNext();
    expect(element.index).to.equal(1);
  });

  it('goes to the first slide while on the last slide with next', async () => {
    const element = await fixture(html`
      <kemet-carousel>
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    element.index = 2;
    element.handleNext();
    expect(element.index).to.equal(0);
  });

  it('goes to the last slide while on the first slide with prev', async () => {
    const element = await fixture(html`
      <kemet-carousel>
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    element.handlePrev();
    expect(element.index).to.equal(2);
  });

  it('goes to the prev slide when called', async () => {
    const element = await fixture(html`
      <kemet-carousel>
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    element.index = 2;
    element.handlePrev();
    expect(element.index).to.equal(1);
  });

  it('can start a slideshow', async () => {
    const element = await fixture(html`
      <kemet-carousel slideshow="3">
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    setTimeout(() => {
      expect(element.index).to.equal(1);
    }, 3001);
  });

  it('will go to the right slide given a hash in the url', async () => {
    window.location.hash = '#2';

    const element = await fixture(html`
      <kemet-carousel use-hash>
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    expect(element.index).to.equal('2');
  });

  it('adjust index given an invalid one', async () => {
    const element = await fixture(html`
      <kemet-carousel>
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    element.updateIndex(9999);
    expect(element.index).to.equal(0);

    element.updateIndex(-1);
    expect(element.index).to.equal(0);
  });

  it('handle pagination links correctly', async () => {
    const element = await fixture(html`
      <kemet-carousel>
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
        <div slot="pagination">
          <kemet-carousel-prev>Prev</kemet-carousel-prev>
          <kemet-carousel-link slide="0">1</kemet-carousel-link>
          <kemet-carousel-link slide="1">2</kemet-carousel-link>
          <kemet-carousel-link slide="2">3</kemet-carousel-link>
          <kemet-carousel-next>Next</kemet-carousel-next>
        </div>
      </kemet-carousel>
    `);

    element.querySelector('[slide="1"]').click();

    element.addEventListener('kemet-carousel-change-start', () => {
      expect(element.index).to.equal(1);
    });
  });

  it('should test the handleLink method', async () => {
    const element = await fixture(html`
      <kemet-carousel slideshow="1">
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    const listener = oneEvent(element, 'kemet-carousel-change-start');
    const event = await listener;
    const { detail } = event;

    element.handleLink(event);
    expect(detail).to.equal(element);
  });

  it('fires change-finished correctly', async () => {
    const element = await fixture(html`
      <kemet-carousel slideshow="1">
        <div slot="slides">
          <kemet-carousel-slide>Slide One</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
          <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
        </div>
      </kemet-carousel>
    `);

    const listener = oneEvent(element, 'kemet-carousel-change-finished');
    const { detail } = await listener;
    expect(detail).to.equal(element);
  });

  it('fire prev correctly', async () => {
    const element = await fixture(html`
      <kemet-carousel-prev>Prev</kemet-carousel-prev>
    `);

    const listener = oneEvent(element, 'kemet-carousel-prev');
    element.prev();
    const { detail } = await listener;
    expect(detail).to.equal(element);
  });

  it('fire next correctly', async () => {
    const element = await fixture(html`
      <kemet-carousel-next>Prev</kemet-carousel-next>
    `);

    const listener = oneEvent(element, 'kemet-carousel-next');
    element.next();
    const { detail } = await listener;
    expect(detail).to.equal(element);
  });

  it('fire link correctly', async () => {
    const element = await fixture(html`
      <kemet-carousel-link>Prev</kemet-carousel-link>
    `);

    const listener = oneEvent(element, 'kemet-carousel-link');
    element.changed();
    const { detail } = await listener;
    expect(detail).to.equal(element);
  });

  // it('has a default title "Hey there" and counter 5', async () => {
  //   const el = await fixture(html`
  //     <kemet-carousel></kemet-carousel>
  //   `);

  //   expect(el.title).to.equal('Hey there');
  //   expect(el.counter).to.equal(5);
  // });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture(html`
  //     <kemet-carousel></kemet-carousel>
  //   `);
  //   el.shadowRoot.querySelector('button').click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the title via attribute', async () => {
  //   const el = await fixture(html`
  //     <kemet-carousel title="attribute title"></kemet-carousel>
  //   `);

  //   expect(el.title).to.equal('attribute title');
  // });

  // it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
  //   const el = await fixture(html`
  //     <kemet-carousel></kemet-carousel>
  //   `);

  //   expect(el).shadowDom.to.equalSnapshot();
  // });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <kemet-carousel></kemet-carousel>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

import { html, fixture, expect } from '@open-wc/testing';

import './kemet-rotator.js';

describe('KemetRotator', () => {
  it('has a the correct defaults', async () => {
    const element = await fixture(html`
      <kemet-rotator></kemet-rotator>
    `);

    expect(element.activeSlide).to.equal(0);
    expect(element.width).to.equal('auto');
    expect(element.height).to.equal('auto');
    expect(element.messages.length).to.equal(0);
    expect(element.effect).to.equal('fade');
    expect(element.rotationSpeed).to.equal(3);
  });

  it('calls the next slide properly', async () => {
    const messages = [
      'some',
      'messages',
      'here',
    ];

    const element = await fixture(html`
      <kemet-rotator effect="flip" .messages=${messages}></kemet-rotator>
    `);

    element.nextSlide();

    expect(element.activeSlide).to.equal(1);
  });

  it('passes the a11y audit', async () => {
    const element = await fixture(html`
      <kemet-rotator></kemet-rotator>
    `);

    await expect(element).shadowDom.to.be.accessible();
  });
});

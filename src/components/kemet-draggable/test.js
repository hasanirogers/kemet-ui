import {
  html, fixture, expect, oneEvent,
} from '@open-wc/testing';

import './kemet-draggable.ts';

describe('KemetDraggable', () => {
  it('has the correct defaults', async () => {
    const element = await fixture(html`
      <kemet-draggable></kemet-draggable>
    `);

    expect(element.top).to.equal('auto');
    expect(element.left).to.equal('auto');
    expect(element.measure).to.equal(false);
  });

  it('can override the measure property via attribute', async () => {
    const element = await fixture(html`
      <kemet-draggable measure></kemet-draggable>
    `);

    expect(element.measure).to.equal(true);
  });

  // it('it measures the hosts dimensions when specified', async () => {
  //   const element = await fixture(html`
  //     <kemet-draggable measure></kemet-draggable>
  //   `);

  //   expect(element.style.width).to.not.equal('');
  //   expect(element.style.height).to.not.equal('');
  // });

  it('fires kemet-draggable-start correctly', async () => {
    const element = await fixture(html`
      <kemet-draggable></kemet-draggable>
    `);

    const listener = oneEvent(element, 'kemet-draggable-start');
    element.startDrag();
    const { detail } = await listener;

    expect(detail).to.equal(element);
  });

  it('fires kemet-draggable-stop correctly', async () => {
    const element = await fixture(html`
      <kemet-draggable memory="test"></kemet-draggable>
    `);

    const listener = oneEvent(element, 'kemet-draggable-stop');
    element.stopDrag();
    const { detail } = await listener;

    expect(detail).to.equal(element);
  });

  it('passes the a11y audit', async () => {
    const element = await fixture(html`
      <kemet-draggable></kemet-draggable>
    `);

    await expect(element).shadowDom.to.be.accessible();
  });
});

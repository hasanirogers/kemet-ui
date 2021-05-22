import {
  html, fixture, expect, oneEvent,
} from '@open-wc/testing';

import './kemet-popover.js';

describe('KemetPopover', () => {
  it('passes the a11y audit', async () => {
    const element = await fixture(html`
      <kemet-popover>
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    await expect(element).shadowDom.to.be.accessible();
  });

  it('has the correct defaults', async () => {
    const element = await fixture(html`
      <kemet-popover .smart=${false}>
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    expect(element.opened).to.equal(false);
    expect(element.effect).to.equal(null);
    expect(element.position).to.equal('top');
    expect(element.tooltip).to.equal(false);
    expect(element.customTooltip).to.equal(false);
    expect(element.fireOn).to.equal('hover');
  });

  it('displays a tooltip when specified', async () => {
    const element = await fixture(html`
      <kemet-popover tooltip>
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    expect(element.shadowRoot.getElementById('tooltip').getAttribute('id')).to.equal('tooltip');
  });

  it('displays a custom tooltip when specified', async () => {
    const element = await fixture(html`
      <kemet-popover custom-tooltip>
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    expect(element.shadowRoot.getElementById('custom-tooltip').getAttribute('id')).to.equal('custom-tooltip');
  });

  it('opens the tooltip correctly on click', async () => {
    const element = await fixture(html`
      <kemet-popover fire-on="click">
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    element.shadowRoot.getElementById('trigger').click();

    expect(element.opened).to.equal(true);
  });

  it('fires the close event correctly', async () => {
    const element = await fixture(html`
      <kemet-popover>
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    element.open();

    setTimeout(async () => {
      element.close();
    }, 1);

    const listener = oneEvent(element, 'kemet-popover-closed');
    const event = await listener;
    const { detail } = event;

    expect(detail).to.equal(element);
  });

  it('closes wen a user clicks on the overlay', async () => {
    const element = await fixture(html`
      <kemet-popover click-outside>
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    element.open();
    element.shadowRoot.getElementById('overlay').click();

    expect(element.opened).to.equal(false);
  });

  it('should close the popover when ESC is pressed', async () => {
    const element = await fixture(html`
      <kemet-popover fire-on="click">
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    const trigger = element.shadowRoot.getElementById('trigger');

    trigger.click();
    trigger.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 27 }));

    expect(element.opened).to.equal(false);
  });

  it('should reposition top content', async () => {
    const element = await fixture(html`
      <kemet-popover position="top">
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    element.style.position = 'fixed';
    element.style.top = '0';
    element.smartContent();

    expect(element.position).to.equal('right');
  });

  it('should reposition right content', async () => {
    const element = await fixture(html`
      <kemet-popover position="right">
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    element.style.position = 'fixed';
    element.style.top = '0';
    element.style.right = '-10rem';
    element.smartContent();

    expect(element.position).to.equal('bottom');
  });

  it('should reposition bottom content', async () => {
    const element = await fixture(html`
      <kemet-popover position="bottom">
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    element.style.position = 'fixed';
    element.style.bottom = '0';
    element.smartContent();

    expect(element.position).to.equal('top');
  });

  it('should reposition left content', async () => {
    const element = await fixture(html`
      <kemet-popover position="left">
        <strong slot="trigger">Activate Trigger</strong>:
        <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
      </kemet-popover>
    `);

    element.style.position = 'fixed';
    element.style.top = '0';
    element.style.left = '-10rem';
    element.smartContent();

    expect(element.position).to.equal('right');
  });
});

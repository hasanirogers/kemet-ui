import { html, fixture, expect } from '@open-wc/testing';

import './kemet-button.js';

describe('KemetButton', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <kemet-button>Button</kemet-button>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });

  it('has the correct default props', async () => {
    const element = await fixture(html`
      <kemet-button>Button</kemet-button>
    `);

    expect(element.type).to.equal('standard');
  });

  it('renders as an anchor with a link', async () => {
    const element = await fixture(html`
      <kemet-button link="http://google.com"></kemet-button>
    `);

    expect(element.shadowRoot.querySelector('a').tagName).to.equal('A');
  });

  it('becomes active on click', async () => {
    const element = await fixture(html`
      <kemet-button>Button</kemet-button>
    `);

    element.click();
    expect(element.active).to.be.equal(true);
  });

  it('removes active when blurred', async () => {
    const element = await fixture(html`
      <kemet-button active>Button</kemet-button>
    `);
    const blurEvent = new Event('blur');

    element.dispatchEvent(blurEvent);
    expect(element.active).to.equal(false);
  });

  it('focuses when tabbed on', async () => {
    const element = await fixture(html`
      <kemet-button>Button</kemet-button>
    `);
    const keyupEvent = new KeyboardEvent('keyup', { key: 'Tab' });

    element.dispatchEvent(keyupEvent);
    expect(element.focused).to.equal(true);
  });

  it('handles mouse events', async () => {
    const element = await fixture(html`
      <kemet-button>Button</kemet-button>
    `);

    const mouseOverEvent = new MouseEvent('mouseover');
    const mouseOutEvent = new MouseEvent('mouseout');

    element.dispatchEvent(mouseOverEvent);
    expect(element.hover).to.equal(true);

    element.dispatchEvent(mouseOutEvent);
    expect(element.hover).to.equal(false);
  });
});

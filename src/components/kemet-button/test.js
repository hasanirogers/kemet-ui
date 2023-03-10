import { html, fixture, expect } from '@open-wc/testing';
import './kemet-button.ts';

const templates = {
  button: () => html`<kemet-button>Button</kemet-button>`,
  link: () => html`<kemet-button link="https://google.com">Google</kemet-button>`,
};

describe('KemetButton', async () => {
  const button = await fixture(templates.button());
  const link = await fixture(templates.link());

  it('passes the a11y audit', async () => {
    await expect(button).shadowDom.to.be.accessible();
  });

  it('has the correct default props', async () => {
    expect(button.type).to.equal('standard');
  });

  it('renders as an anchor with a link', async () => {
    expect(link.shadowRoot.querySelector('a').tagName).to.equal('A');
  });

  it('becomes active on click', async () => {
    button.click();
    expect(button.active).to.be.equal(true);
  });

  it('removes active when blurred', async () => {
    const blurEvent = new Event('blur');

    button.dispatchEvent(blurEvent);
    expect(button.active).to.equal(false);
  });

  it('focuses when tabbed on', async () => {
    const keyupEvent = new KeyboardEvent('keyup', { key: 'Tab' });

    button.dispatchEvent(keyupEvent);
    expect(button.focused).to.equal(true);
  });

  it('handles mouse events', async () => {
    const mouseOverEvent = new MouseEvent('mouseover');
    const mouseOutEvent = new MouseEvent('mouseout');

    button.dispatchEvent(mouseOverEvent);
    expect(button.hover).to.equal(true);

    button.dispatchEvent(mouseOutEvent);
    expect(button.hover).to.equal(false);
  });
});

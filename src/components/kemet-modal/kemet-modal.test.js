import { html, fixture, expect } from '@open-wc/testing';
import './kemet-modal.js';

describe('KemetModal', () => {
  it('has a default opened property of false', async () => {
    const element = await fixture(html`
      <kemet-modal></kemet-modal>
    `);

    expect(element.opened).to.equal(false);
  });

  it('can close the modal on click', async () => {
    const element = await fixture(html`
      <kemet-modal opened closeOnClick></kemet-modal>
    `);

    element.click();
    expect(element.opened).to.equal(false);
  });

  it('opens the modal when open is called', async () => {
    const open = () => {
      document.querySelector('kemet-modal').open();
    };

    const element = await fixture(html`
      <div>
        <button @click=${open}>Open Me</button>
        <kemet-modal></kemet-modal>
      </div>

    `);

    element.querySelector('button').click();
    expect(element.querySelector('kemet-modal').opened).to.equal(true);
  });

  it('closes the modal when close is called', async () => {
    const close = () => {
      document.querySelector('kemet-modal').close();
    };

    const element = await fixture(html`
      <kemet-modal opened>
        <button @click=${close}>Close Me</button>
      </kemet-modal>
    `);

    element.querySelector('button').click();
    expect(element.opened).to.equal(false);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <kemet-modal></kemet-modal>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

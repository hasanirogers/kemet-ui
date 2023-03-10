import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import './kemet-alert.ts';

const templates = {
  default: () => html`
    <kemet-alert status="standard" closable opened>
      <kemet-icon slot="icon" size="24" icon="gear"></kemet-icon>
      <div>The brown fox jumped over the lazy dog.</div>
    </kemet-alert>
  `,
};

describe('KemetAlert', async () => {
  const component = await fixture(templates.default());

  it('should render a close button', async () => {
    const closeButton = component.shadowRoot.querySelector('kemet-icon[icon="x-lg"]');
    expect(typeof closeButton).to.be.equal('object');
  });
});

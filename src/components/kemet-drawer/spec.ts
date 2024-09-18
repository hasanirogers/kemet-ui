import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';

import './kemet-drawer';

describe('Drawer', () => {
  const templates = {
    default: html`
      <kemet-drawer opened>
        <nav slot="navigation">Your navigation goes here.</nav>
        <section slot="content">Your content goes here.</section>
      </kemet-drawer>
    `,
  };

  it('should close when self is clicked', async () => {
    render(templates.default, document.body);
    const kemetDrawer = document.querySelector('kemet-drawer');
    await userEvent.click(kemetDrawer);
    expect(kemetDrawer.opened).toBe(false);
  });
});

import { html, render } from 'lit';
import { Key } from 'webdriverio';
import { expect } from '@wdio/globals';
import { waitFor } from '@testing-library/dom';

import './kemet-combo';
import '../kemet-field/kemet-field';
import '../kemet-input/kemet-input';
import userEvent from '@testing-library/user-event';

describe('Combo', () => {
  const options = ['Item 1', 'Item 2', 'Item 3'];

  const templates = {
    default: html`
      <kemet-field label="Combo">
        <kemet-input slot="input" name="input"></kemet-input>
        <kemet-combo slot="component" .options=${options}></kemet-combo>
      </kemet-field>
    `,
  };

  it('selects from combo list box', async () => {
    render(templates.default, document.body);
      await waitFor(async () => {
        const combo = document.body.querySelector('kemet-combo');
        const input = document.body.querySelector('kemet-input').shadowRoot.querySelector('input');
        await userEvent.type(input, 'Item');
        const listboxItem = combo.shadowRoot.querySelector('li');
        await userEvent.click(listboxItem);
        expect(input.value).toBe('Item 1');
      });
  });

  it('selects from combo list box using a keyboard', async () => {
    render(templates.default, document.body);
      await waitFor(async () => {
        const combo = document.body.querySelector('kemet-combo');
        const input = document.body.querySelector('kemet-input').shadowRoot.querySelector('input');
        combo.show = true;
        await browser.keys([Key.Tab]);
        await userEvent.keyboard('{ArrowDown}');
        await userEvent.keyboard('{ArrowDown}');
        await userEvent.keyboard('{ArrowDown}');
        await userEvent.keyboard('{ArrowUp}');
        await userEvent.keyboard('{Enter}');
        expect(input.value).toBe('Item 1');
      });
  });
});

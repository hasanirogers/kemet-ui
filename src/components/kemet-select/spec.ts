import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor } from '@testing-library/dom';

import './kemet-select';
import './kemet-option';
import '../kemet-field/kemet-field';

describe('Select', () => {
  const templates = {
    default: html`
      <kemet-field label="Label">
        <kemet-select slot="input" required>
          <kemet-option label="Choose Item" value=""></kemet-option>
          <kemet-option label="Item 1" value="1"></kemet-option>
          <kemet-option label="Item 2" value="2"></kemet-option>
          <kemet-option label="Item 3" value="3"></kemet-option>
        </kemet-select>
      </kemet-field>
    `,
    selected: html`
      <kemet-field label="Label">
        <kemet-select slot="input" required>
          <kemet-option selected label="Choose Item" value=""></kemet-option>
          <kemet-option label="Item 1" value="1"></kemet-option>
          <kemet-option label="Item 2" value="2"></kemet-option>
          <kemet-option label="Item 3" value="3"></kemet-option>
        </kemet-select>
      </kemet-field>
    `,
  };

  it('makes a selection properly', async () => {
    render(templates.selected, document.body);
    const kemetSelect = document.querySelector('kemet-select');
    await waitFor(async () => {
      const select = kemetSelect.shadowRoot.querySelector('select');
      await userEvent.selectOptions(select, '3');
      fireEvent.blur(select);
      expect(kemetSelect.value).toBe('3');
    });
  });

  it('attempts to select an invalid option', async () => {
    render(templates.default, document.body);
    const kemetSelect = document.querySelector('kemet-select');
    await waitFor(async () => {
      const select = kemetSelect.shadowRoot.querySelector('select');
      await userEvent.selectOptions(select, '');
      fireEvent.blur(select);
      kemetSelect.checkValidity();
      expect(kemetSelect.status).toBe('error');
    });
  });
});

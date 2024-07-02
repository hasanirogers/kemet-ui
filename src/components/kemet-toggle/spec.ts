import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import { userEvent } from '@testing-library/user-event';
import { fireEvent, getByText, waitFor } from '@testing-library/dom';

import './kemet-toggle';

const templates = {
  default: html`<kemet-toggle label="Label"></kemet-toggle>`,
  checked: html`<kemet-toggle checked label="Label"></kemet-toggle>`,
  showOptions: html`<kemet-toggle label="Label" show option-unchecked="No" option-checked="Yes"></kemet-toggle>`,
};

describe('Toggle', () => {
  it('should toggle the switch when clicked', async () => {
    render(templates.default, document.body);
    const toggle = document.querySelector('kemet-toggle');

    await waitFor(async () => {
      const label = toggle.shadowRoot.querySelector('label');
      const input = toggle.shadowRoot.querySelector('input');
      await userEvent.click(label);
      expect(toggle.checked).toBe(true);
      fireEvent.blur(input);
    });
  });

  it('should toggle the switch when clicked and initially checked', async () => {
    render(templates.checked, document.body);
    const toggle = document.querySelector('kemet-toggle');

    await waitFor(async () => {
      const label = toggle.shadowRoot.querySelector('label');
      const input = toggle.shadowRoot.querySelector('input');
      await userEvent.click(label);
      expect(toggle.checked).toBe(false);
      fireEvent.blur(input);
    });
  });

  it('should show option labels', async () => {
    render(templates.showOptions, document.body);
    const kemetToggle = document.querySelector('kemet-toggle');

    await waitFor(() => {
      const label = kemetToggle.shadowRoot.querySelector('label');
      const checkedText = getByText(label, 'Yes');
      const uncheckedText = getByText(label, 'No');
      expect(checkedText).toBeTruthy();
      expect(uncheckedText).toBeTruthy();
    });
  });
});

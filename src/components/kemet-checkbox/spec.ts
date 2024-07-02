import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor } from '@testing-library/dom';

import './kemet-checkbox';

describe('Checkbox', () => {
  const templates = {
    default: html`<kemet-checkbox label="Label"></kemet-checkbox>`,
    error: html`<kemet-checkbox label="Label" status="error" indeterminate message="Message"></kemet-checkbox>`,
  };

  it('should check the box when clicked', async () => {
    render(templates.default, document.body);
    const checkbox = document.querySelector('kemet-checkbox');

    await waitFor(async () => {
      const label = checkbox.shadowRoot.querySelector('label');
      const input = checkbox.shadowRoot.querySelector('input');
      await userEvent.click(label);
      expect(checkbox.checked).toBe(true);
      fireEvent.blur(input);
      checkbox.checkValidity();
    });
  });

  it('should check the box when click method is called', async () => {
    render(templates.default, document.body);
    const checkbox = document.querySelector('kemet-checkbox');
    checkbox.click();
    expect(checkbox.checked).toBe(false);
  });

  it('should check the box when click method is called', async () => {
    render(templates.error, document.body);
  });
});

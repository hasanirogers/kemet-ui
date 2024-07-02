import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor } from '@testing-library/dom';

import './kemet-radio';
import './kemet-radios';
import '../kemet-button/kemet-button';

describe('Radio', () => {
  const templates = {
    default: html`
      <kemet-radios legend="The legend.">
        <kemet-radio value="1" name="kemet-radio-button" label="Item 1" checked></kemet-radio>
        <kemet-radio value="2" name="kemet-radio-button" label="Item 2"></kemet-radio>
        <kemet-radio value="3" name="kemet-radio-button" label="Item 3"></kemet-radio>
      </kemet-radios>
    `,
    required: html`
      <kemet-radios required status="error" legend="The legend." message="error">
        <kemet-radio value="1" name="kemet-radio-button" label="Item 1"></kemet-radio>
        <kemet-radio value="2" name="kemet-radio-button" label="Item 2"></kemet-radio>
        <kemet-radio value="3" name="kemet-radio-button" label="Item 3"></kemet-radio>
      </kemet-radios>
    `,
  };

  it('allows you to select a radio button', async () => {
    render(templates.default, document.body);
    const lastButton = document.querySelectorAll('kemet-radio')[2];
    await waitFor(async () => {
      await userEvent.click(lastButton.shadowRoot.querySelector('label'));
      expect(lastButton.checked).toBe(true);
    });
  });

  it('click method selects a radio button', async () => {
    render(templates.default, document.body);
    const lastButton = document.querySelectorAll('kemet-radio')[2];
    lastButton.click();
    expect(lastButton.checked).toBe(true);
  });

  it('focuses correctly', async () => {
    render(templates.default, document.body);
    const kemetRadio = document.querySelector('kemet-radio');
    await waitFor(async () => {
      const input = kemetRadio.shadowRoot.querySelector('input');
      fireEvent.focus(input);
      expect(kemetRadio.focused).toBe(true);
      fireEvent.blur(input);
      expect(kemetRadio.focused).toBe(false);
    });
  });

  it('should handle keyboard navigation', async () => {
    render(templates.default, document.body);
    const kemetRadio = document.querySelectorAll('kemet-radio');
    const kemetRadios = document.querySelector('kemet-radios');
    await userEvent.click(kemetRadio[0]);
    fireEvent.keyDown(kemetRadio[0], { key: 'ArrowLeft' });
    expect(kemetRadio[2].checked).toBe(true);
    fireEvent.keyDown(kemetRadio[0], { key: 'ArrowRight' });
    expect(kemetRadio[0].checked).toBe(true);
    expect(kemetRadios.checkValidity()).toBe(true);
  });

  it('should show an error message when required', async () => {
    render(templates.required, document.body);
    const kemetRadios = document.querySelector('kemet-radios');
    expect(kemetRadios.checkValidity()).toBe(false);
  });
});

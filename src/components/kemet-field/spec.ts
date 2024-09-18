import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import { fireEvent, waitFor } from '@testing-library/dom';

import '../kemet-input/kemet-input';
import './kemet-field';

describe('Field', () => {
  const templates = {
    default: html`
      <kemet-field slug="unique-identifier" label="Label" message="Success" status="success">
        <kemet-input slot="input" name="input-field" required validate-on-blur></kemet-input>
      </kemet-field>
    `,
    populated: html`
      <kemet-field slug="unique-identifier" label="Label" message="Success" status="success">
        <kemet-input slot="input" name="input-field" value="test"></kemet-input>
      </kemet-field>
    `,
  };

  it('updates the field status when the input status changes', async () => {
    render(templates.default, document.body);
    const kemetField = document.querySelector('kemet-field');
    const kemetInput = document.querySelector('kemet-input');

    await waitFor(async () => {
      const input = kemetInput.shadowRoot.querySelector('input');
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);
      expect(kemetField.status).toBe('error');
    });
  });

  it('fills the length when a value is supplied', async () => {
    render(templates.populated, document.body);
    const kemetField = document.querySelector('kemet-field');
    await waitFor(() => {
      expect(kemetField.length).toBeGreaterThan(0);
    });
  });
});

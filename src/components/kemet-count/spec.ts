import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';

import '../kemet-input/kemet-input';
import '../kemet-textarea/kemet-textarea';
import '../kemet-field/kemet-field';
import './kemet-count';

describe('Field', () => {
  const templates = {
    default: html`
      <kemet-field>
        <kemet-input slot="input" name="input"></kemet-input>
        <kemet-count slot="component" message="characters remaining." limit="6" validate-immediately></kemet-count>
      </kemet-field>
    `,
    textarea: html`
      <kemet-field>
        <kemet-textarea slot="input" name="textarea"></kemet-textarea>
        <kemet-count slot="component" message="characters remaining." limit="6" validate-immediately></kemet-count>
      </kemet-field>
    `,
  };

  it('should count characters remaining', async () => {
    render(templates.default, document.body);
    const kemetInput = document.querySelector('kemet-input');
    const kemetCount = document.querySelector('kemet-count');

    await waitFor(async () => {
      const input = kemetInput.shadowRoot.querySelector('input');
      await userEvent.type(input, 'abcdefgh');
      expect(kemetCount.remaining).toBe(-2);
    });
  });

  it('should count characters remaining in a textarea', async () => {
    render(templates.textarea, document.body);
    const kemetTextarea = document.querySelector('kemet-textarea');
    const kemetCount = document.querySelector('kemet-count');

    await waitFor(async () => {
      const textarea = kemetTextarea.shadowRoot.querySelector('textarea');
      await userEvent.type(textarea, 'abcdefgh');
      expect(kemetCount.remaining).toBe(-2);
    });
  });
});

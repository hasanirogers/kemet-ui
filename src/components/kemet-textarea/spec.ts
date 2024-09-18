import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor } from '@testing-library/dom';

import './kemet-textarea';
import '../kemet-field/kemet-field';
import '../kemet-count/kemet-count';

describe('Textarea', () => {
  const templates = {
    default: html`
      <kemet-field>
        <kemet-textarea slot="input"></kemet-textarea>
      </kemet-field>
    `,
    disabled: html`
      <kemet-field>
        <kemet-textarea disabled slot="input"></kemet-textarea>
      </kemet-field>
    `,
    validateImmediately: html`
      <kemet-field>
        <kemet-textarea slot="input" required validate-on-blur></kemet-textarea>
        <kemet-count slot="component" message="characters remaining." limit="6" validate-immediately></kemet-count>
      </kemet-field>
    `,
  };

  it('handles changes to the input properly', async () => {
    render(templates.default, document.body);
    const kemetTextarea = document.querySelector('kemet-textarea');

    await waitFor(async () => {
      const input = kemetTextarea.shadowRoot.querySelector('textarea');
      // TODO figure out why useEvent is not generating code coverage
      fireEvent.input(input, { target: { value: 'test' } });
      fireEvent.change(input, { target: { value: 'test' } });
      fireEvent.blur(input);
      expect(kemetTextarea.status).toBe('standard');
    });
  });

  it('focuses correctly', async () => {
    render(templates.default, document.body);
    const kemetTextarea = document.querySelector('kemet-textarea');

    await waitFor(async () => {
      kemetTextarea.focus();
      fireEvent.focus(kemetTextarea.shadowRoot.querySelector('textarea'));
      expect(kemetTextarea.hasFocus).toBe(true);
    });
  });

  it('should not set a value when user types into a disabled field', async () => {
    render(templates.disabled, document.body);
    const kemetTextarea = document.querySelector('kemet-textarea');

    await waitFor(async () => {
      await userEvent.type(kemetTextarea.shadowRoot.querySelector('textarea'), 'random text');
      await userEvent.click(document.body);
      expect(kemetTextarea.value).toBeFalsy();
    });
  });

  it('should error on blur when validate-on-blur is set and invalid value is entered', async () => {
    render(templates.validateImmediately, document.body);
    const kemetTextarea = document.querySelector('kemet-textarea');

    await waitFor(async () => {
      const input = kemetTextarea.shadowRoot.querySelector('textarea');
      kemetTextarea.focus();
      fireEvent.blur(input);
      kemetTextarea.checkValidity();
      expect(kemetTextarea.status).toBe('error');
    });
  });
});

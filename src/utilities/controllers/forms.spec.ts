/* eslint-disable import/no-duplicates */
import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import { userEvent } from '@testing-library/user-event';
import { fireEvent, waitFor } from '@testing-library/dom';

import KemetButton from '../../components/kemet-button/kemet-button';
import KemetInput from '../../components/kemet-input/kemet-input';
import '../../components/kemet-button/kemet-button';
import '../../components/kemet-input/kemet-input';

const templates = {
  default: html`
    <form>
      <kemet-input name="input" value="input"></kemet-input>
      <kemet-input name="no-special-characters" required pattern="^[a-zA-Z0-9]*$"></kemet-input>
      <kemet-button>Submit</kemet-button>
    </form>
  `,
};

describe('Forms', () => {
  it('simulate submitting a form with errors', async () => {
    render(templates.default, document.body);

    const form = document.querySelector('form') as HTMLFormElement;
    const kemetButton = document.querySelector('kemet-button') as KemetButton;
    const noSpecialCharactersKemetInput = document.querySelector('[required]') as KemetInput;

    await waitFor(async () => {
      const noSpecialCharactersInput = noSpecialCharactersKemetInput?.shadowRoot?.querySelector('input');
      await userEvent.type(noSpecialCharactersInput!, 'te$t');
      await userEvent.click(kemetButton);

      // TODO figure out why the click doesn't implicitly cover these events
      fireEvent(form, new Event('formdata'));
      fireEvent.submit(form);
      expect(noSpecialCharactersKemetInput.status).toBe('error');
      form.remove();
    });
  });
});

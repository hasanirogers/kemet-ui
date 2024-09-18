import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor } from '@testing-library/dom';

import KemetIcon from '../kemet-icon/kemet-icon';
import './kemet-input';

describe('Input', () => {
  const templates = {
    default: html`<kemet-input></kemet-input>`,
    disabled: html`<kemet-input disabled></kemet-input>`,
    search: html`<kemet-input type="search"></kemet-input>`,
    icons: html`<kemet-input icon-left="chevron-left" icon-right="chevron-right"></kemet-input>`,
    validateImmediately: html`<kemet-input required validate-on-blur pattern="^[a-zA-Z0-9]*$"></kemet-input>`,
    password: html`
      <kemet-field slug="field" label="Password">
        <kemet-input type="password" pattern="^[a-zA-Z0-9]*$" required validate-on-blur placeholder="Password"></kemet-input>
      </kemet-field>
    `,
  };

  it('handles changes to the input properly', async () => {
    render(templates.default, document.body);
    const kemetInput = document.querySelector('kemet-input');

    await waitFor(async () => {
      const input = kemetInput.shadowRoot.querySelector('input');
      // TODO figure out why useEvent is not generating code coverage
      fireEvent.change(input, { target: { value: 'test' } });
      fireEvent.blur(input);
      expect(kemetInput.status).toBe('standard');
    });
  });

  it('focuses correctly', async () => {
    render(templates.default, document.body);
    const kemetInput = document.querySelector('kemet-input');

    await waitFor(async () => {
      kemetInput.focus();
      fireEvent.focus(kemetInput.shadowRoot.querySelector('input'));
      expect(kemetInput.focused).toBe(true);
    });
  });

  it('renders a left and right icon', async () => {
    render(templates.icons, document.body);
  });

  it('should not set a value when user types into a disabled field', async () => {
    render(templates.disabled, document.body);
    const kemetInput = document.querySelector('kemet-input');

    await waitFor(async () => {
      await userEvent.type(kemetInput.shadowRoot.querySelector('input'), 'random text');
      await userEvent.click(document.body);
      expect(kemetInput.value).toBeFalsy();
    });
  });

  it('should error on blur when validate-on-blur is set and invalid value is entered', async () => {
    render(templates.validateImmediately, document.body);
    const kemetInput = document.querySelector('kemet-input');

    await waitFor(async () => {
      const input = kemetInput.shadowRoot.querySelector('input');
      fireEvent.change(input, 'te$t');
      fireEvent.blur(input);
      expect(kemetInput.status).toBe('error');
    });
  });

  it('should display a visibility icon and toggle it on a password input', async () => {
    render(templates.password, document.body);
    const passwordInput = document.querySelector('[type="password"]');

    await waitFor(async () => {
      const visibilityIcon = passwordInput.shadowRoot.querySelector('kemet-icon') as KemetIcon;
      if (visibilityIcon) await userEvent.click(visibilityIcon);
      expect(visibilityIcon.getAttribute('icon')).toBe('eye');
    });
  });

  it('should clear user text when close button is clicked on search type', async () => {
    render(templates.search, document.body);
    const kemetInput = document.querySelector('kemet-input');

    await waitFor(async () => {
      await userEvent.type(kemetInput.shadowRoot.querySelector('input'), 'random text');
      expect(kemetInput.value).toBe('random text');
      const closeIcon = kemetInput.shadowRoot.querySelector('kemet-icon') as KemetIcon;
      await userEvent.click(closeIcon);
      expect(kemetInput.value).toBe('');
    });
  });
});

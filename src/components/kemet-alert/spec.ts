import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor } from '@testing-library/dom';

import './kemet-alert';

describe('Alert', () => {
  const templates = {
    default: html`<kemet-alert reveal opened>The brown fox jumped over the lazy dog.</kemet-alert>`,
    closable: html`
      <kemet-alert closable opened>
        <kemet-icon slot="icon" size="32" name="gear"></kemet-icon>
        <h3>This is a heading.</h3>
        <p>The brown fox jumped over the lazy dog.</p>
      </kemet-alert>
    `,
  };

  it('should dismiss an alert', async () => {
    render(templates.closable, document.body);
    const alert = document.querySelector('kemet-alert');

    await waitFor(async () => {
      const closeButton = alert.shadowRoot.querySelector('[icon="x-lg"]');
      await userEvent.click(closeButton);
      fireEvent(alert, new Event('animationend'));
      fireEvent(alert, new Event('transitionend'));
      expect(alert.opened).toBe(false);
    });
  });

  it('render without a close button', () => {
    render(templates.default, document.body);
    const alert = document.querySelector('kemet-alert');
    const closeButton = alert.shadowRoot.querySelector('[name="close"]');
    expect(closeButton).toBeFalsy();
  });
});

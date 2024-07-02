import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { Key } from 'webdriverio';

import './kemet-button';

describe('Button', () => {
  const templates = {
    default: html`<kemet-button>Button Text</kemet-button>`,
    disabled: html`<kemet-button disabled>Button Text</kemet-button>`,
    focus: html`<input /><kemet-button>Button Text</kemet-button>`,
    link: html`<kemet-button link="https://google.com">Button Text</kemet-button>`,
  };

  it('should be active when the button is clicked', async () => {
    render(templates.default, document.body);
    const kemetButton = document.querySelector('kemet-button');
    await userEvent.click(kemetButton);
    expect(kemetButton.active).toBe(true);
  });

  it('should not be active when disabled button is clicked', async () => {
    render(templates.disabled, document.body);
    const kemetButton = document.querySelector('kemet-button');
    await userEvent.click(kemetButton);
    expect(kemetButton.active).toBeFalsy();
  });

  it('should be focused when tabbed on', async () => {
    render(templates.focus, document.body);
    const kemetButton = document.querySelector('kemet-button');
    const inputElement = document.querySelector('input');

    await userEvent.type(inputElement, 'hack to get kemet-button to focus');
    await browser.keys([Key.Tab]);

    expect(kemetButton.focused).toBe(true);
    await browser.keys([Key.Tab]); // browser is an web driver global
    expect(kemetButton.focused).toBe(false);
  });

  it('should handle hovering', async () => {
    render(templates.default, document.body);
    const kemetButton = document.querySelector('kemet-button');
    await userEvent.hover(kemetButton);
    expect(kemetButton.hover).toBe(true);
    await userEvent.unhover(kemetButton);
    expect(kemetButton.hover).toBeFalsy();
  });

  it('should render a link when given an href', async () => {
    render(templates.link, document.body);
    const kemetButton = document.querySelector('kemet-button');
    expect(kemetButton.link).toBe('https://google.com');
  });
});

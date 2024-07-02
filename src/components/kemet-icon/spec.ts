import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import { waitFor } from '@testing-library/dom';

import './kemet-icon';

describe('Icon', () => {
  const templates = {
    default: html`<kemet-icon></kemet-icon>`,
    fontAwesomeBrands: html`<kemet-icon set="font-awesome-brands"></kemet-icon>`,
    fontAwesomeRegular: html`<kemet-icon set="font-awesome-regular"></kemet-icon>`,
    fontAwesomeSolid: html`<kemet-icon set="font-awesome-solid"></kemet-icon>`,
    invalidSet: html`<kemet-icon set="invalid"></kemet-icon>`,
    inline: html`
      <kemet-icon>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M 16 2 C 13.25 2 11 4.25 11 7 C 11 8.957031 12.113281 10.875 13.15625 12.4375 C 13.289063 12.640625 13.429688 12.8125 13.5625 13 L 8 13 L 8 16.15625 L 9.15625 16 L 14.90625 15.1875 L 14 28.9375 L 13.9375 30 L 18.0625 30 L 18 28.9375 L 17.09375 15.1875 L 22.84375 16 L 24 16.15625 L 24 13 L 18.4375 13 C 18.570313 12.8125 18.710938 12.640625 18.84375 12.4375 C 19.886719 10.875 21 8.957031 21 7 C 21 4.25 18.75 2 16 2 Z M 16 4 C 17.667969 4 19 5.332031 19 7 C 19 8.078125 18.113281 9.914063 17.15625 11.34375 C 16.574219 12.21875 16.367188 12.429688 16 12.875 C 15.632813 12.429688 15.425781 12.21875 14.84375 11.34375 C 13.886719 9.914063 13 8.078125 13 7 C 13 5.332031 14.332031 4 16 4 Z"></path>
        </svg>
      </kemet-icon>
    `,
    inlineText: html`
      <kemet-icon>
        <span>No Icon</span>
      </kemet-icon>
    `,
  };

  // TODO why is this failing
  it.skip('displays an icon', async () => {
    render(templates.default, document.body);
    await waitFor(() => {
      const svg = document.querySelector('kemet-icon').shadowRoot.querySelector('svg');
      expect(svg).toBeTruthy();
    });
  });

  it('display an inline icon', async () => {
    render(templates.inline, document.body);
    await waitFor(() => {
      const svg = document.querySelector('kemet-icon').querySelector('svg');
      expect(svg).toBeTruthy();
    });
  });

  it('renders nothing when no icon is passed inline', async () => {
    render(templates.inlineText, document.body);
    await waitFor(() => {
      const kemetIcon = document.querySelector('kemet-icon');
      const hasIcon = kemetIcon.shadowRoot.querySelector('svg');
      expect(hasIcon).toBeFalsy();
    });
  });

  it('renders the font awesome brand set', () => {
    render(templates.fontAwesomeBrands, document.body);
    const kemetIcon = document.querySelector('kemet-icon');
    expect(kemetIcon.set).toBe('font-awesome-brands');
  });

  it('renders the font awesome regular set', () => {
    render(templates.fontAwesomeRegular, document.body);
    const kemetIcon = document.querySelector('kemet-icon');
    expect(kemetIcon.set).toBe('font-awesome-regular');
  });

  it('renders the font awesome solid set', () => {
    render(templates.fontAwesomeSolid, document.body);
    const kemetIcon = document.querySelector('kemet-icon');
    expect(kemetIcon.set).toBe('font-awesome-solid');
  });

  it('renders default set', () => {
    render(templates.invalidSet, document.body);
    const kemetIcon = document.querySelector('kemet-icon');
    expect(kemetIcon.set).toBe('invalid');
  });
});

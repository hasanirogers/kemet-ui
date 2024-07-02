import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import { getByText } from '@testing-library/dom';

import './kemet-card';

describe('Card', () => {
  const templates = {
    default: html`
      <kemet-card>
        <div slot="header">This is the header.</div>
        <iframe
          slot="media"
          width="100%"
          style="aspect-ratio:16/9;"
          src="https://www.youtube.com/embed/5gBqTXctxO8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <div slot="footer">This is the footer.</div>
      </kemet-card>
    `,
  };

  it('displays a card', async () => {
    render(templates.default, document.body);
      const card = getByText(document.body, 'This is the header.').closest('kemet-card');
      expect(card).toBeTruthy();
  });
});

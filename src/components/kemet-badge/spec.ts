import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import { getByText } from '@testing-library/dom';

import KemetBadge from './kemet-badge';
import './kemet-badge';

describe('Badge', () => {
  const templates = {
    default: html`<kemet-badge>Badge</kemet-badge>`,
    circle: html`<kemet-badge circle>Badge</kemet-badge>`,
  };

  it('displays a badge', async () => {
    render(templates.default, document.body);
      const badge = getByText(document.body, 'Badge');
      expect(badge).toBeTruthy();
  });

  it('displays a circular badge', async () => {
    render(templates.circle, document.body);
      const badge = getByText(document.body, 'Badge') as KemetBadge;
      expect(badge.circle).toBeTruthy();
  });
});

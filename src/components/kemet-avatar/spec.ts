import { html, render } from 'lit';
import { expect } from '@wdio/globals';

import './kemet-avatar';

describe('Avatar', () => {
  const templates = {
    default: html`<kemet-avatar size="32"></kemet-avatar>`,
    image: html`<kemet-avatar image="https://placehold.co/600x400"></kemet-avatar>`,
    initials: html`<kemet-avatar initials="KUI"></kemet-avatar>`,
  };

  it('displays an avatar', async () => {
    render(templates.default, document.body);
    const kemetAvatar = document.querySelector('kemet-avatar');
    expect(kemetAvatar).toBeTruthy();
  });

  it('displays an avatar with an image', async () => {
    render(templates.image, document.body);
    const kemetAvatar = document.querySelector('kemet-avatar');
    expect(kemetAvatar).toBeTruthy();
  });

  it('displays an avatar with initials', async () => {
    render(templates.initials, document.body);
    const kemetAvatar = document.querySelector('kemet-avatar');
    expect(kemetAvatar).toBeTruthy();
  });
});

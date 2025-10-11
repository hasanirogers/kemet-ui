import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-card';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

import '../../kemet-avatar/kemet-avatar';
import '../../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Elements / Card',
  component: 'kemet-card',
  args: {
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    captionText: '',
    isCentered: false,
  },
  argTypes: {
    mediaType: {
      control: { type: 'radio' },
      options: ['none', 'image', 'avatar', 'video', 'embed'],
    },
    elevation: {
      control: { type: 'select' },
      options: ['none', 'layer-1', 'layer-2', 'layer-3', 'layer-4', 'layer-5', 'layer-6', 'inner'],
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-card ?center=${args.isCentered} kemet-elevation="${ifDefined(args.elevation !== 'none' ? args.elevation : null)}">
    ${args.showHeader ? html`<div slot="header">This is the header.</div>` : null}
    ${showMedia(args.mediaType)}
    ${args.captionText && args.captionText !== '' ? html`<div slot="caption">${args.captionText}</div>` : null}
    ${args.bodyText}
    ${args.showFooter ? html`<div slot="footer">This is the footer.</div>` : null}
  </kemet-card>
`;

const showMedia = (type) => {
  if (type === 'image') {
    return html`<img slot="media" src="https://placehold.co/1920x1080" alt="a placeholder" />`;
  }

  if (type === 'avatar') {
    return html`
      <kemet-avatar circle slot="media">
        <kemet-icon size="196" kemet-margin="xs" icon="person"></kemet-icon>
      </kemet-avatar>
    `;
  }

  if (type === 'video') {
    return html`
      <video slot="media" controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }

  if (type === 'embed') {
    return html`
      <iframe slot="media" width="100%" style="aspect-ratio:16/9;" src="https://www.youtube.com/embed/5gBqTXctxO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  }

  return null;
};

export const Standard: Story = {
  render: (args: any) => Template(args),
};

export const Header: Story = {
  render: (args: any) => Template(args),
  args: {
    showHeader: true
  }
};

export const Footer: Story = {
  render: (args: any) => Template(args),
  args: {
    showFooter: true
  }
};

export const HeaderAndFooter: Story = {
  render: (args: any) => Template(args),
  args: {
    showHeader: true,
    showFooter: true
  }
};

export const Image: Story = {
  render: (args: any) => Template(args),
  args: {
    mediaType: 'image'
  }
};

export const Video: Story = {
  render: (args: any) => Template(args),
  args: {
    mediaType: 'video'
  }
};

export const Embed: Story = {
  render: (args: any) => Template(args),
  args: {
    mediaType: 'embed'
  }
};

export const Avatar: Story = {
  render: (args: any) => Template(args),
  args: {
    mediaType: 'avatar',
    isCentered: true
  }
};

export const Full: Story = {
  render: (args: any) => Template(args),
  args: {
    mediaType: 'embed',
    showHeader: true,
    showFooter: true,
    elevation: 'layer-4',
  }
}

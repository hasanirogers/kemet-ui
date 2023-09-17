import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-card';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Card',
  component: 'kemet-card',
};
export default meta;

type Story = StoryObj;

const Template = ({
  bodyText,
  showHeader,
  showFooter,
  captionText,
  mediaType,
  textColor,
  backgroundColor,
  borderColor,
  cardPadding,
  borderRadius,
  isCentered,
  elevation,
}) => html`
  <style>
    kemet-card {
      --kemet-card-color: ${textColor};
      --kemet-card-padding: ${cardPadding};
      --kemet-card-border-color: ${borderColor};
      --kemet-card-border-radius: ${borderRadius};
      --kemet-card-background-color: ${backgroundColor};
    }
  </style>
  <kemet-card ?center=${isCentered} kemet-elevation="${ifDefined(elevation !== 'none' ? elevation : null)}">
    ${showHeader ? html`<div slot="header">This is the header.</div>` : null}
    ${showMedia(mediaType)}
    ${captionText !== '' ? html`<div slot="caption">${captionText}</div>` : null}
    ${bodyText}
    ${showFooter ? html`<div slot="footer">This is the footer.</div>` : null}
  </kemet-card>
`;

const showMedia = (type) => {
  if (type === 'image') {
    return html`<img slot="media" src="https://via.placeholder.com/1920x1080" alt="a placeholder" />`;
  }

  if (type === 'avatar') {
    return html`
      <kemet-avatar slot="media" rounded image="https://via.placeholder.com/200x200" label="a placeholder"></kemet-avatar>
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
      <iframe slot="media" width="560" height="315" src="https://www.youtube.com/embed/5gBqTXctxO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  }

  return null;
};

export const Standard: Story = {
  render: (args: any) => Template(args),
  args: {
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    captionText: 'Caption',
    showHeader: false,
    showFooter: true,
    isCentered: false,
    mediaType: 'image',
    textColor: '#000000',
    borderColor: '#a4a4a4',
    backgroundColor: '#ffffff',
    cardPadding: '1rem',
    borderRadius: '0',
    elevation: 'none',
  },
  argTypes: {
    bodyText: {
      control: { type: 'text' },
    },
    showHeader: {
      control: { type: 'boolean' },
    },
    showFooter: {
      control: { type: 'boolean' },
    },
    isCentered: {
      control: { type: 'boolean' },
    },
    mediaType: {
      control: { type: 'radio' },
      options: ['none', 'image', 'avatar', 'video', 'embed'],
    },
    textColor: {
      control: { type: 'color' },
    },
    borderColor: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    cardPadding: {
      control: { type: 'text' },
    },
    borderRadius: {
      control: { type: 'text' },
    },
    elevation: {
      control: { type: 'select' },
      options: ['none', 'layer-1', 'layer-2', 'layer-3', 'layer-4', 'layer-5', 'layer-6', 'inner'],
    },
  }
};

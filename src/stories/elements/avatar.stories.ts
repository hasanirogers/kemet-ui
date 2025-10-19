import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/avatar';
import '../../elements/avatars';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Feedback & Status / Avatar',
  component: 'kemet-avatar',
  argTypes: {
    circle: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    image: {
      control: { type: 'text' },
    },
    initials: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'text' },
    },
    status: {
      control: { type: 'boolean' },
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-avatar
    ?circle=${args.circle}
    ?rounded=${args.rounded}
    image="${ifDefined(args.image !== '' ? args.image : null)}"
    initials="${ifDefined(args.initials !== '' ? args.initials : null)}"
  >
    ${args.icon !== '' && args.icon ? html`<kemet-icon-bootstrap icon=${args.icon} size="48" kemet-margin="xs"></kemet-icon-bootstrap>` : null}
    ${args.status ? html`<kemet-badge slot="status" status="success" kemet-border="all-2 solid white"></kemet-badge>` : null}
  </kemet-avatar>
`;

const TemplateMultiple = (args) => {
  const avatars = [];

  for (let i = 0; i < args.numOfAvatars; i += 1) {
    avatars.push(html`<kemet-avatar circle image="https://placehold.co/64x64" kemet-border="all-4 solid gray-50"></kemet-avatar>\n`);
  }

  return html`
    <style>
      kemet-avatars {
        --kemet-avatars-squeeze: ${args.squeeze};
      }
    </style>
    <kemet-avatars>
      ${avatars}
    </kemet-avatars>
  `;
};

export const Standard: Story = {
  render: (args: any) => Template(args),
  args: {
    icon: 'person',
  }
};

export const Initials: Story = {
  render: (args: any) => Template(args),
  args: {
    initials: 'KU',
  }
};

export const Image: Story = {
  render: (args: any) => Template(args),
  args: {
    image: 'https://placehold.co/64x64',
  }
};

export const Circle: Story = {
  render: (args: any) => Template(args),
  args: {
    circle: true,
    image: 'https://placehold.co/64x64',
  }
};

export const Status: Story = {
  render: (args: any) => Template(args),
  args: {
    circle: true,
    image: 'https://placehold.co/64x64',
    status: true,
  }
};

export const Multiple: Story = {
  render: (args: any) => TemplateMultiple(args),
  args: {
    squeeze: '-1.5rem',
    numOfAvatars: 3,
  },
  argTypes: {
    squeeze: {
      control: { type: 'text' },
    },
    numOfAvatars: {
      control: { type: 'number' },
    },
  }
};

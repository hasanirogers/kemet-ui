import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-avatar';
import '../kemet-avatars';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Avatar',
  component: 'kemet-avatar',
};
export default meta;

type Story = StoryObj;

const Template = ({
  icon,
  image,
  circle,
  rounded,
  initials,
  status,
}) => html`
  <kemet-avatar
    ?circle=${circle}
    ?rounded=${rounded}
    image="${ifDefined(image !== '' ? image : null)}"
    initials="${ifDefined(initials !== '' ? initials : null)}"
  >
    ${icon !== '' ? html`<kemet-icon icon=${icon} size="48" kemet-margin="tiny:smallest"></kemet-icon>` : null}
    ${status ? html`<kemet-badge slot="status" status="success" kemet-border="all-2 solid white"></kemet-badge>` : null}
  </kemet-avatar>
`;

const TemplateMultiple = ({
  squeeze,
  numOfAvatars,
}) => {
  const avatars = [];

  for (let i = 0; i < numOfAvatars; i += 1) {
    avatars.push(html`<kemet-avatar circle image="https://via.placeholder.com/64x64" kemet-border="all-4 solid gray1"></kemet-avatar>\n`);
  }

  return html`
    <style>
      kemet-avatars {
        --kemet-avatars-squeeze: ${squeeze};
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
    circle: true,
    rounded: false,
    image: 'https://via.placeholder.com/64x64',
    initials: 'KU',
    icon: 'person',
    status: false,
  },
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

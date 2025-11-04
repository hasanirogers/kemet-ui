import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/avatar';
import '../../elements/avatars';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';
import { EnumRoundedSizes, roundedSizes } from '../../utilities/constants';

const meta: Meta = {
  title: 'Feedback & Status / Avatar',
  component: 'kemet-avatar',
  render: (args: any) => Template(args),
  args: {
    icon: 'person',
  },
  argTypes: {
    rounded: {
      options: roundedSizes,
      control: { type: 'select' },
    }
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-avatar
    ?circle=${args.circle}
    rounded=${ifDefined(args.rounded)}
    image="${ifDefined(args.image !== '' ? args.image : null)}"
    initials="${ifDefined(args.initials !== '' ? args.initials : null)}"
  >
    ${args.icon !== '' && args.icon ? html`<kemet-icon-bootstrap icon=${args.icon} size="48" kemet-margin="xs"></kemet-icon-bootstrap>` : null}
    ${args.status ? html`<kemet-badge slot="status" status="success" kemet-border="all-2 solid white"></kemet-badge>` : null}
  </kemet-avatar>
`;

const TemplateMultiple = (args) => {
  const avatars = Array.from({ length: args.numOfAvatars }, () => {
    return html`<kemet-avatar rounded="circle" image="https://placehold.co/64x64" kemet-border="all-4 solid gray-50"></kemet-avatar>`
  });

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

export const Standard: Story = {};

export const Initials: Story = {
  args: {
    initials: 'KU',
  }
};

export const Image: Story = {
  args: {
    image: 'https://placehold.co/64x64',
  }
};

export const Rounded: Story = {
  args: {
    rounded: EnumRoundedSizes.XL,
    image: 'https://placehold.co/64x64',
  }
};

export const Circle: Story = {
  args: {
    rounded: EnumRoundedSizes.CIRCLE,
    image: 'https://placehold.co/64x64',
  }
};

export const Status: Story = {
  args: {
    rounded: EnumRoundedSizes.CIRCLE,
    image: 'https://placehold.co/64x64',
    status: true,
  }
};

export const Multiple: Story = {
  render: (args: any) => TemplateMultiple(args),
  args: {
    squeeze: '-1.5rem',
    numOfAvatars: 3,
  }
};

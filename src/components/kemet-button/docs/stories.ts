import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-button';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Button',
  component: 'kemet-button',
};
export default meta;

type Story = StoryObj;

const Template = ({
  type = 'standard',
  outlined = false,
  iconLeft = '',
  iconRight = 'gear',
  link = '',
  disabled = false,
}) => html`
  <kemet-button type="${type}" ?outlined=${outlined} ?disabled=${disabled} link=${ifDefined(link !== '' ? link : undefined)}>
    ${ifDefined(iconLeft !== '' && type !== 'circle' ? html`<kemet-icon slot="left" icon="${iconLeft}"></kemet-icon>` : undefined)}
    ${type === 'circle' ? html`<kemet-icon icon="gear" size="24"></kemet-icon>` : 'Button'}
    ${ifDefined(iconRight !== '' && type !== 'circle' ? html`<kemet-icon slot="right" icon="${iconRight}"></kemet-icon>` : undefined)}
  </kemet-button>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    type: 'standard',
    outlined: false,
    iconLeft: '',
    iconRight: 'gear',
    link: '',
    disabled: false,
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['standard', 'text', 'circle', 'rounded', 'pill'],
    },
    outlined: {
      control: { type: 'boolean' },
    },
    iconLeft: {
      control: { type: 'text' },
    },
    iconRight: {
      control: { type: 'text' },
    },
    link: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  }
};

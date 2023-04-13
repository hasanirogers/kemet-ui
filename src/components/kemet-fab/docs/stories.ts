import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-fab';
import '../../kemet-icon/kemet-icon';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / FAB',
  component: 'kemet-fab',
};
export default meta;

type Story = StoryObj;

const Template = ({
  label = 'Action',
  outlined = false,
  disabled = false,
  pill = false,
  expandPoint,
  collapsePoint,
  expanded = false,
}) => html`
  <kemet-fab ?expanded=${expanded} ?outlined=${outlined} ?disabled=${disabled} ?pill=${pill} expand-point=${ifDefined(expandPoint || null)} collapse-point=${ifDefined(collapsePoint || null)}>
    <kemet-icon slot="icon" icon="pencil-square" size="24"></kemet-icon>
    ${label}
  </kemet-fab>
`;

const TemplateMultiple = () => html`
  <style>
    .fabs {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      z-index: 99;
    }

    .fabs li {
      display: flex;
      align-items: flex-end;
    }
  </style>
  <ul class="fabs" kemet-layout="flexcolumn" kemet-gutters kemet-margin="tiny:none" kemet-padding="tiny:none">
    <li>
      <kemet-fab pill>
        <kemet-icon slot="icon" icon="envelope" size="24"></kemet-icon> Email
      </kemet-fab>
    </li>
    <li>
      <kemet-fab pill>
        <kemet-icon slot="icon" icon="calendar" size="24"></kemet-icon> Calendar
      </kemet-fab>
    </li>
    <li>
      <kemet-fab pill>
        <kemet-icon slot="icon" icon="pencil-square" size="24"></kemet-icon> Edit
      </kemet-fab>
    </li>
  </ul>
`;

export const Standard: Story = {
  render: (args: any) => Template(args),
  args: {
    label: 'Action',
    outlined: false,
    disabled: false,
    pill: false,
    expanded: false,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    outlined: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    pill: {
      control: { type: 'boolean' },
    },
    expandPoint: {
      control: { type: 'number' },
    },
    collapsePoint: {
      control: { type: 'number' },
    },
    expanded: {
      control: { type: 'boolean' },
    },
  }
};

export const Multiple: Story = {
  render: () => TemplateMultiple(),
}

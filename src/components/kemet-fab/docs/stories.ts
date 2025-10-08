import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-fab';
import '../../kemet-icon/kemet-icon';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / FAB',
  component: 'kemet-fab',
  args: {
    label: 'Action',
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-fab ?expanded=${args.expanded} ?outlined=${args.outlined} ?disabled=${args.disabled} ?pill=${args.pill} expand-point=${ifDefined(args.expandPoint || null)} collapse-point=${ifDefined(args.collapsePoint || null)}>
    <kemet-icon slot="icon" icon="pencil-square" size="24"></kemet-icon>
    ${args.label}
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
  <ul class="fabs" kemet-layout="flexcolumn" kemet-gutters kemet-margin="none" kemet-padding="none">
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
};

export const Outlined: Story = {
  render: (args: any) => Template(args),
  args: {
    outlined: true,
  },
};

export const Disabled: Story = {
  render: (args: any) => Template(args),
  args: {
    disabled: true,
  },
};

export const Pill: Story = {
  render: (args: any) => Template(args),
  args: {
    pill: true,
  },
};

export const Multiple: Story = {
  render: () => TemplateMultiple(),
}

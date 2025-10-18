import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../elements/icon-bootstrap';
import '../../elements/button';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../../.storybook/elements/docs-icons';


const meta: Meta = {
  title: 'Icons / Bootstrap',
  component: 'kemet-icon-bootstrap',
  args: {
    icon: 'code',
  },
};
export default meta;

type Story = StoryObj;

const Template = args => html`
  <kemet-icon-bootstrap icon=${args.icon} size=${ifDefined(args.size)}></kemet-icon-bootstrap>
`;

export const Standard: Story = {
  render: args => Template(args)
};

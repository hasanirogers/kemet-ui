import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/tracker';
import '../../elements/tracker-step';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Elements / Tracker',
  component: 'kemet-tracker',
  args: {
    numOfSteps: 5,
    currentStep: 3,
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', max: 5 },
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  const steps = [];

  for (let i = 1; i <= args.numOfSteps; i += 1) {
    steps.push(html`<kemet-tracker-step ?completed=${i < args.currentStep || args.currentStep > args.numOfSteps} ?current=${i === args.currentStep} ?hide-dot-content=${args.hideDotContent}>Step ${i}</kemet-tracker-step>`);
  }

  return html`
    <kemet-tracker breakpoint=${ifDefined(args.breakpoint)}>
      ${steps}
    </kemet-tracker>
  `;
};

export const Standard: Story = {
  render: args => Template(args),
};

export const HideDotContent: Story = {
  render: args => Template(args),
  args: {
    hideDotContent: true,
  }
};

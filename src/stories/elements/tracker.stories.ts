import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/tracker';
import '../../elements/tracker-step';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Feedback & Status / Tracker',
  component: 'kemet-tracker',
  render: args => Template(args),
  parameters: {
    layout: 'padded',
  },
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

const Template = (args: Args) => {
  const steps = Array.from({ length: args.numOfSteps }, (_, i) => {
    const stepNum = i + 1;
    return html`<kemet-tracker-step ?completed=${stepNum < args.currentStep || args.currentStep > args.numOfSteps} ?current=${stepNum === args.currentStep} ?hide-dot-content=${args.hideDotContent}>Step ${stepNum}</kemet-tracker-step>`;
  });

  return html`
    <kemet-tracker breakpoint=${ifDefined(args.breakpoint)}>
      ${steps}
    </kemet-tracker>
  `;
};

export const Standard: Story = {};

export const HideDotContent: Story = {
  args: {
    hideDotContent: true,
  }
};

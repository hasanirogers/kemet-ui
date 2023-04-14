import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-tracker';
import '../kemet-tracker-step';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Tracker',
  component: 'kemet-tracker',
};
export default meta;

type Story = StoryObj;

const Template = ({
  breakpoint = '767px',
  numOfSteps = 5,
  currentStep = 3,
  hideDotContent = false,
}) => {
  const steps = [];

  for (let i = 1; i <= numOfSteps; i += 1) {
    steps.push(html`<kemet-tracker-step ?completed=${i < currentStep || currentStep > numOfSteps} ?current=${i === currentStep} ?hide-dot-content=${hideDotContent}>Step ${i}</kemet-tracker-step>`);
  }

  return html`
    <kemet-tracker breakpoint=${breakpoint}>
      ${steps}
    </kemet-tracker>
  `;
};

export const Standard: Story = {
  render: args => Template(args),
  args: {
    breakpoint: '767px',
    numOfSteps: 5,
    currentStep: 3,
    hideDotContent: false,
  },
  argTypes: {
    breakpoint: {
      control: { type: 'text' },
    },
    numOfSteps: {
      control: { type: 'number' },
    },
    currentStep: {
      control: { type: 'number', max: 5 },
    },
    hideDotContent: {
      control: { type: 'boolean' },
    },
  }
};

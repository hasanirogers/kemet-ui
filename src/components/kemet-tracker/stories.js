import { html } from 'lit';

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

export const Standard = Template.bind({});
Standard.args = {
  breakpoint: '767px',
  numOfSteps: 5,
  currentStep: 3,
  hideDotContent: false,
};
Standard.argTypes = {
  breakpoint: {
    control: { type: 'text' },
  },
  numOfSteps: {
    control: { type: 'number' },
  },
  currentStep: {
    control: { type: 'number', max: Standard.args.numOfSteps },
  },
  hideDotContent: {
    control: { type: 'boolean' },
  },
};

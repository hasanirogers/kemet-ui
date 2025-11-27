import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/otp-input';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';


const meta: Meta = {
  title: 'Form Controls / OTP Input',
  component: 'kemet-otp-input',
  render: (args: Args) => Template(args),
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj;

const Template = (args: Args) => {
  return html`
    <kemet-otp-input digits=${ifDefined(args.digits)} pattern=${ifDefined(args.pattern)}></kemet-otp-input>
  `;
};

export const Standard: Story = {};

export const FourDigits: Story = {
  args: {
    digits: 4
  }
}

export const StripSpecialCharacters: Story = {
  args: {
    pattern: '[^A-Za-z0-9]'
  }
}

import { html } from 'lit-html';
import './kemet-icon.js';

const Template = args => html`
  <kemet-icon set="${args.set}" icon="${args.icon}" size="${args.size}"></kemet-icon>
`;

export const Standard = Template.bind({});
Standard.argTypes = {
  set: {
    control: { type: 'select' },
    options: ['bootstrap', 'font-awesome-brand', 'font-awesome-regular', 'font-awesome-solid'],
  },
  icon: {
    control: { type: 'text' },
  },
  size: {
    control: { type: 'number' },
  },
};
Standard.args = {
  set: 'bootstrap',
  icon: 'alarm',
  size: 128,
};

import { html } from 'lit-html';
import './kemet-icon.js';

const Template = args => html`
  <kemet-icon set="${args.set}" icon="${args.icon}" size="${args.size}"></kemet-icon>
`;

export const Standard = Template.bind({});
Standard.args = {
  set: 'bootstrap',
  icon: 'alarm',
  size: 128,
};
Standard.parameters = {
  docs: {
    source: {
      code: `<kemet-icon set="${Standard.args.set}" icon="${Standard.args.icon}" size="${Standard.args.size}"></kemet-icon>`,
    },
  },
};

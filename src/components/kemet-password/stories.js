import { html } from 'lit';

const Template = ({ rules, message }) => html`
  <kemet-field slug="new-password" label="New Password">
    <kemet-input slot="input" type="password" name="new-password"></kemet-input>
    <kemet-password slot="component" message=${message} .rules=${rules}></kemet-password>
  </kemet-field>
`;

export const Standard = Template.bind({});

Standard.args = {
  rules: [
    { pattern: '(?=.{8,}$)', message: 'At least 8 characters long' },
    { pattern: '(?=.*[a-z])(?=.*[A-Z])', message: 'Uppercase and lowercase' },
    { pattern: '(?=.*[0-9])', message: 'At least one number (0-9)' },
  ],
  message: 'Please make sure you meet all the requirements.',
};

Standard.argTypes = {
  rules: {
    control: { type: 'array' },
  },
  message: {
    control: { type: 'text' },
  },
};

import { html } from 'lit';

const Template = ({
  status = 'primary',
  pill = false,
  circle = false,
  circlePadding = 8,
}) => html`
  <kemet-badge status=${status} ?pill=${pill} ?circle=${circle} circle-padding=${circlePadding}>
    ${circle ? html`<kemet-icon icon="cart3"></kemet-icon>&nbsp;3` : 'Badge'}
  </kemet-badge>
`;

export const Standard = Template.bind({});
Standard.args = {
  status: 'primary',
  pill: false,
  circle: false,
  circlePadding: 8,
};
Standard.argTypes = {
  status: {
    control: { type: 'select' },
    options: ['standard', 'primary', 'success', 'warning', 'error'],
  },
  pill: {
    control: { type: 'boolean' },
  },
  circle: {
    control: { type: 'boolean' },
  },
  circlePadding: {
    control: { type: 'number' },
  },
};

import { html } from 'lit';

const Template = ({
  legend = 'Legend',
  axis = 'horizontal',
  filled = false,
}) => html`
  <kemet-radios legend=${legend} axis=${axis}>
    <kemet-radio value="1" name="kemet-radio-button" label="Item 1" ?filled=${filled}></kemet-radio>
    <kemet-radio value="2" name="kemet-radio-button" label="Item 2" ?filled=${filled}></kemet-radio>
    <kemet-radio value="3" name="kemet-radio-button" label="Item 3"  ?filled=${filled}></kemet-radio>
    <kemet-radio value="4" name="kemet-radio-button" label="Item 4" ?filled=${filled}></kemet-radio>
  </kemet-radios>
`;
export const Standard = Template.bind({});
Standard.args = {
  legend: 'Legend',
  axis: 'horizontal',
  filled: false,
};
Standard.argTypes = {
  legend: {
    control: { type: 'text' },
  },
  axis: {
    control: { type: 'radio' },
    options: ['horizontal', 'vertical'],
  },
  filled: {
    control: { type: 'boolean' },
  },
};

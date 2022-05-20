import { html } from 'lit';

const Template = () => html`
  <p kemet-type-align="tiny:left medium:center large:right">
    Watch me change alignment at breakpoints.
  </p>
`;
export const Standard = Template.bind({});

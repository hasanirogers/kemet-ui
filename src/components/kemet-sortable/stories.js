import { html } from 'lit';

const Template = ({ numItems = 3 }) => {
  const items = [];

  for (let i = 0; i < numItems; i += 1) {
    items.push(html`<kemet-sortable-item>Item ${i + 1}</kemet-sortable-item>`);
  }

  return html`
    <kemet-sortable>
      ${items}
    </kemet-sortable>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  numItems: 3,
};
Standard.argTypes = {
  numItems: {
    control: { type: 'number' },
  },
};

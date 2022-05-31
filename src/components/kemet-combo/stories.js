import { html } from 'lit';

const faqs = [
  'How do use Kemet UI?',
  'What is a Blueprint System?',
  'Are there going to be more components?',
  'Is it good to use attribute for styles?',
  'Does Kemet UI work with React?',
  'Does Kemet UI work with Angular?',
];

const Template = () => html`
  <kemet-field slug="unique-identifier" label="Frequently asked questions." kemet-margin="tiny:smallest">
    <kemet-input slot="input" name="input" placeholder="Start typing to see the FAQs"></kemet-input>
    <kemet-combo slot="component" .options=${faqs}></kemet-combo>
  </kemet-field>
`;

export const Standard = Template.bind({});

import { html } from 'lit';

const Template = ({ layer = 'layer3' }) => html`
  <div kemet-elevation=${layer} kemet-padding="tiny:normal" kemet-margin="tiny:normal">The quick brown fox jumps over the lazy dog.</div>
`;
export const Standard = Template.bind({});
Standard.args = {
  layer: 'layer3',
};
Standard.argTypes = {
  layer: {
    control: { type: 'select' },
    options: ['none', 'layer1', 'layer2', 'layer3', 'layer4', 'layer5', 'layer6', 'inner'],
  },
};

import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './kemet-draggable.js';

const Template = ({
  text = 'Drag Me',
  memory = null,
}) => html`
  <kemet-draggable memory=${ifDefined(memory || undefined)}>
    <kemet-button>${text}</kemet-button>
  </kemet-draggable>
`;

export const Draggable = Template.bind({});
Draggable.argTypes = {
  text: {
    control: { type: 'text' },
  },
  memory: {
    control: { type: 'text' },
  },
};
Draggable.args = {
  text: 'Drag Me',
  memory: 'kemet-draggable-demo',
};

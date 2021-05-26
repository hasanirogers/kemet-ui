import { html } from 'lit-html';
import dedent from 'ts-dedent';
import { ifDefined } from 'lit-html/directives/if-defined';

import './kemet-draggable.js';

export default {
  title: 'Kemet Draggable',
  component: 'kemet-draggable',
};

const Template = ({
  text = 'Drag Me',
  memory = null,
}) => html`
  <kemet-draggable memory=${ifDefined(memory || undefined)}>
    <button>${text}</button>
  </kemet-draggable>
`;

export const Draggable = Template.bind({});
Draggable.parameters = {
  docs: {
    source: {
      code: dedent`
        <kemet-draggable memory="kemet-draggable-demo">
          <button>Drag Me!</button>
        </kemet-draggable>
      `,
    },
  },
};

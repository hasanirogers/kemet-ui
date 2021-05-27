import { html } from 'lit-html';
import dedent from 'ts-dedent';

import './kemet-ratio.js';

export default {
  title: 'Kemet Ratio',
  component: 'kemet-ratio',
};

const Template = ({
  aspectRatio = '16:9',
}) => html`
  <style>
    kemet-ratio {
      width: 100%;
      margin: auto;
    }
  </style>
  <kemet-ratio aspect-ratio="${aspectRatio}">
    <iframe width="100%" height="100%" title="Kemet Templates" src="https://stackblitz.com/edit/kemet-templates?embed=1%26file=index.html"></iframe>
  </kemet-ratio>
`;

export const Ratio = Template.bind({});
Ratio.parameters = {
  docs: {
    source: {
      code: dedent`
        <kemet-ratio>
          <iframe width="100%" height="100%" title="Kemet Templates" src="https://stackblitz.com/edit/kemet-templates?embed=1%26file=index.html"></iframe>
        </kemet-ratio>
      `,
    },
  },
};
Ratio.decorators = [story => html`<div style="max-width:80%; display:flex; min-height:100vh; margin:auto;">${story()}</div>`];

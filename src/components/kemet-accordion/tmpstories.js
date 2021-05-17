import { html } from 'lit';
import './kemet-accordion.js';

export default {
  title: 'Kemet Accordion',
  component: 'kemet-accordion',
};

export const standard = () => html`
  <kemet-accordion>
    <button slot="trigger">Trigger</button>
    <div slot="panel">Bacon ipsum dolor amet shoulder sausage short ribs, fatback ground round biltong drumstick spare ribs bacon tenderloin burgdoggen turducken picanha beef ribs pork belly.</div>
  </kemet-accordion>
`;

export const contentToggle = () => {
  const toggle = (event) => {
    event.preventDefault();

    const accordion = event.target.closest('kemet-accordion');
    accordion.toggle();
  };

  return html`
    <kemet-accordion>
      <button slot="trigger">Trigger</button>
      <div slot="panel">You can click on something other than the trigger to <a href="#" @click=${event => toggle(event)}>close the accordion</a>.</div>
    </kemet-accordion>
  `;
};

import { html } from 'lit-html';
import dedent from 'ts-dedent';
import './kemet-accordion.js';

export default {
  title: 'Kemet Accordion',
  component: 'kemet-accordion',
};

const Template = ({
  triggerText = 'Trigger',
  panelText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tortor pellentesque, efficitur lectus vel, accumsan ipsum. Phasellus dolor elit, ultrices a blandit id, consequat vitae arcu. Sed eu libero a tellus tincidunt auctor id eu libero. Nam ornare ultricies tortor, quis maximus velit placerat ac. Fusce bibendum euismod leo, ac vulputate nunc dignissim quis. Curabitur mollis felis eget ligula tincidunt sodales. Nulla molestie nunc sit amet odio pulvinar rhoncus. Maecenas egestas urna ultricies tellus faucibus viverra. Nullam magna eros, bibendum at tincidunt in, luctus tempus arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec lacus sit amet erat cursus hendrerit vitae sit amet eros. Proin tempor metus nunc, quis commodo libero condimentum sed. Donec vitae lobortis arcu, a aliquam diam. Mauris interdum at est vel consequat. Aenean lacus erat, vulputate vitae gravida sed, sagittis a diam.',
  transitionSpeed = '300ms',
}) => html`
  <style>
    kemet-accordion {
      --kemet-popover-transition-speed: ${transitionSpeed};
    }
  </style>
  <kemet-accordion>
    <button slot="trigger">${triggerText}</button>
    <div slot="panel">${panelText}</div>
  </kemet-accordion>
`;

const TemplateMultiple = ({
  triggerText = 'Trigger',
  panelText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tortor pellentesque, efficitur lectus vel, accumsan ipsum. Phasellus dolor elit, ultrices a blandit id, consequat vitae arcu. Sed eu libero a tellus tincidunt auctor id eu libero. Nam ornare ultricies tortor, quis maximus velit placerat ac. Fusce bibendum euismod leo, ac vulputate nunc dignissim quis. Curabitur mollis felis eget ligula tincidunt sodales.',
  transitionSpeed = '300ms',
  closeOthers = false,
}) => html`
  <style>
    kemet-accordion {
      --kemet-popover-transition-speed: ${transitionSpeed};
    }
  </style>
  <kemet-accordion ?close-others=${closeOthers}>
    <button slot="trigger">${triggerText}</button>
    <div slot="panel">${panelText}</div>
  </kemet-accordion>
  <kemet-accordion ?close-others=${closeOthers}>
    <button slot="trigger">${triggerText}</button>
    <div slot="panel">${panelText}</div>
  </kemet-accordion>
  <kemet-accordion ?close-others=${closeOthers}>
    <button slot="trigger">${triggerText}</button>
    <div slot="panel">${panelText}</div>
  </kemet-accordion>
`;

export const Single = Template.bind({});
Single.parameters = {
  docs: {
    source: {
      code: dedent`
        <kemet-popover>
          <button slot="trigger">Activate Accordion</button>
          <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tortor pellentesque, efficitur lectus vel, accumsan ipsum. Phasellus dolor elit, ultrices a blandit id, consequat vitae arcu. Sed eu libero a tellus tincidunt auctor id eu libero. Nam ornare ultricies tortor, quis maximus velit placerat ac. Fusce bibendum euismod leo, ac vulputate nunc dignissim quis. Curabitur mollis felis eget ligula tincidunt sodales.</div>
        </kemet-popover>
      `,
    },
  },
};

export const Multiple = TemplateMultiple.bind({});

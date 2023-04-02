import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const Template = ({
  triggerText, content, canvasPosition, placement, opened, effect, fireOn, strategy, skidding, distance,
}) => {
  const popper = document.querySelector('kemet-popper');
  if (popper) popper.refresh();

  return html`
    <div class="storybook__canvas--${canvasPosition}">
      <kemet-popper ?opened=${opened} placement=${placement} effect=${effect} fire-on=${fireOn} strategy=${strategy} skidding=${skidding} distance=${distance}>
        <kemet-button type="text" slot="trigger">${triggerText}</kemet-button>
        <div slot="content">${unsafeHTML(content)}</div>
      </kemet-popper>
    </div>
  `;
};

export const Popper = Template.bind({});
Popper.args = {
  triggerText: 'Click Me',
  content: '<kemet-popper-close style="position:absolute; right:1rem;"><kemet-icon icon="x-lg"></kemet-icon></kemet-popper-close><h2 kemet-margin-top="tiny:none">Heading</h2><img width="240" src="https://via.placeholder.com/1920x1080" alt="A placeholder" /><p><a href="https://google.com">This</a> is some <a href="https://google.com">content</a>.</p>',
  canvasPosition: 'middle',
  placement: 'top',
  opened: false,
  effect: 'fade',
  fireOn: 'click',
  strategy: 'fixed',
  skidding: 0,
  distance: 0,
};

Popper.argTypes = {
  canvasPosition: {
    control: { type: 'select' },
    options: ['middle', 'top-right', 'bottom-right', 'bottom-left', 'top-left'],
  },
  placement: {
    control: { type: 'select' },
    options: ['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'],
  },
  opened: {
    control: { type: 'boolean' },
  },
  effect: {
    control: { type: 'select' },
    options: ['none', 'fade', 'scale', 'slide', 'fall', 'flip-horizontal', 'flip-vertical', 'sign', 'super-scaled'],
  },
  fireOn: {
    control: { type: 'radio' },
    options: ['hover', 'click'],
  },
  strategy: {
    control: { type: 'radio' },
    options: ['fixed', 'absolute'],
  },
  skidding: {
    control: { type: 'number' },
  },
  distance: {
    control: { type: 'number' },
  },
};

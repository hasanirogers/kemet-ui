import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/popper';
import '../../elements/popper-close';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';
import '../../elements/button';

const meta: Meta = {
  title: 'Interactive / Popper',
  component: 'kemet-popper',
  args: {
    triggerText: 'Hover Over Me',
    content: '<kemet-popper-close style="position:absolute; right:1rem;"><kemet-icon-bootstrap icon="x-lg"></kemet-icon-bootstrap></kemet-popper-close><h2 kemet-margin-top="none">Heading</h2><img width="240" src="https://placehold.co/1920x1080" alt="A placeholder" /><p><a href="https://google.com">This</a> is some <a href="https://google.com">content</a>.</p>',
    canvasPosition: 'middle',
  },
  argTypes: {
    canvasPosition: {
      control: { type: 'select' },
      options: ['middle', 'top-right', 'bottom-right', 'bottom-left', 'top-left'],
    },
    placement: {
      control: { type: 'select' },
      options: ['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'],
    },
    // effect: {
    //   control: { type: 'select' },
    //   options: ['none', 'fade', 'scale', 'slide', 'fall', 'flip-horizontal', 'flip-vertical', 'sign', 'super-scaled'],
    // },
    fireOn: {
      control: { type: 'radio' },
      options: ['hover', 'click'],
    },
    strategy: {
      control: { type: 'radio' },
      options: ['fixed', 'absolute'],
    },
  },
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  const popper = document.querySelector('kemet-popper');
  if (popper) popper.refresh();

  return html`
    <div class="storybook__canvas--${args.canvasPosition}">
      <kemet-popper ?opened=${args.opened} placement=${ifDefined(args.placement)} effect=${ifDefined(args.effect)} fire-on=${ifDefined(args.fireOn)} strategy=${ifDefined(args.strategy)} skidding=${ifDefined(args.skidding)} distance=${ifDefined(args.distance)}>
        <kemet-button type="text" slot="trigger">${args.triggerText}</kemet-button>
        <div slot="content" kemet-color="gray-950">${unsafeHTML(args.content)}</div>
      </kemet-popper>
    </div>
  `;
};

export const Standard: Story = {
  render: (args: any) => Template(args),
};

export const OnClick: Story = {
  render: (args: any) => Template(args),
  args: {
    triggerText: 'Click Me',
    fireOn: 'click',
  }
};

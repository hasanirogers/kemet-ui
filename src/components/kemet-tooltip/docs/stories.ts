import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-tooltip';

import '../../kemet-button/kemet-button';
import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Tooltip',
  component: 'kemet-tooltip',
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  const tooltip = document.querySelector('kemet-tooltip');
  if (tooltip) tooltip.refresh();

  return html`
    <div class="storybook__canvas--${args.canvasPosition}">
      <kemet-tooltip ?opened=${args.opened} placement=${args.placement} effect=${args.effect} fire-on=${args.fireOn} strategy=${args.strategy} skidding=${args.skidding} distance=${args.distance}>
        <kemet-button type="text" slot="trigger">${args.triggerText}</kemet-button>
        <div slot="content">${unsafeHTML(args.contentText)}</div>
      </kemet-tooltip>
    </div>
  `;
};


export const Standard: Story = {
  render: args => Template(args),
  args: {
    triggerText: 'Trigger',
    contentText: 'This is some content. <strong>HTML</strong> is supported.',
    canvasPosition: 'middle',
    placement: 'top',
    opened: false,
    effect: 'fade',
    fireOn: 'hover',
    strategy: 'fixed',
    skidding: 0,
    distance: 0,
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
  }
};

import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js'
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { TypeEffect } from '../types';

import '../kemet-modal';
import '../kemet-modal-close';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';
import '../../kemet-button/kemet-button';

const meta: Meta = {
  title: 'Components / Modal',
  component: 'kemet-modal',
  args: {
    displayCloseBtn: true,
  },
  argTypes: {
    effect: {
      control: { type: 'select' },
      options: ['fadein-scaleup', 'slide-right', 'slide-bottom', 'newspaper', 'fall', 'side-fall', 'flip-horizontal', 'flip-vertical', 'sign-3d', 'super-scaled', 'slit', 'rotate-bottom', 'rotate-left'],
    },
  },
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  const openModal = () => {
    const modal = document.querySelector('kemet-modal');
    modal.opened = true;
  };

  const makeCloseBtn = (display) => {
    if (display) {
      return html`
        <kemet-modal-close tabindex="0" role="button" aria-label="Close Button" style="display:flex;">
          <kemet-icon icon="x-circle" size="24" kemet-background-color="white" kemet-border-radius="circle"></kemet-icon>
        </kemet-modal-close>
      `;
    }

    return null;
  };

  return html`
    <kemet-button @click="${() => openModal()}">Open Modal</kemet-button>
    <kemet-modal ?opened=${args.opened} ?rounded=${args.rounded} effect="${ifDefined(args.effect)}" ?close-on-click="${args.closeOnClick}">
      <div kemet-padding="xl">
        ${makeCloseBtn(args.displayCloseBtn)}
        <h2 kemet-margin="none">Modal Title</h2>
        <p>Your modal contents <a href="http://google.com" kemet-color="primary"><strong>here</strong></a>.</p>
      </div>
    </kemet-modal>
  `;
};

export const Standard: Story = {
  render: (args) => Template(args),
};

export const Rounded: Story = {
  render: (args) => Template(args),
  args: {
    rounded: true
  }
};

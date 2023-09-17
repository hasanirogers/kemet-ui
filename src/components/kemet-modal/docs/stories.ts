import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
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
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  const effect: TypeEffect = args.effect;

  const openModal = () => {
    const modal = document.querySelector('kemet-modal');
    modal.opened = true;
  };

  const makeCloseBtn = (display) => {
    if (display) {
      return html`
        <kemet-modal-close tabindex="0" role="button" aria-label="Close Button">
          <kemet-icon icon="x-circle" size="24"></kemet-icon>
        </kemet-modal-close>
      `;
    }

    return null;
  };

  const temp = html`
    <style>
      kemet-modal {
        --kemet-modal-min-width: ${args.minWidth};
        --kemet-modal-max-width: ${args.maxWidth};
        --kemet-modal-overlay-background-color: ${args.overlayColor};
        --kemet-modal-transition-speed: ${args.transitionSpeed};
      }
    </style>
    <kemet-button @click="${() => openModal()}">Open Modal</kemet-button>
    <kemet-modal ?opened=${args.opened} effect="${effect}" ?close-on-click="${args.closeOnClick}">
      <div kemet-elevation="layer-5" kemet-padding="2xl">
        ${makeCloseBtn(args.displayCloseBtn)}
        <h2 kemet-margin="none">Modal Title</h2>
        <p>Your modal contents <a href="http://google.com" kemet-color="auto"><strong>here</strong></a>.</p>
      </div>
    </kemet-modal>
  `;

  return temp;
};

export const Standard: Story = {
  render: (args) => Template(args),

  argTypes: {
    displayCloseBtn: {
      control: { type: 'boolean' },
    },
    minWidth: {
      control: { type: 'text' },
    },
    maxWidth: {
      control: { type: 'text' },
    },
    overlayColor: {
      control: { type: 'color' },
    },
    transitionSpeed: {
      control: { type: 'text' },
    },
    opened: {
      control: { type: 'boolean' },
    },
    effect: {
      control: { type: 'select' },
      options: [
        'fadein-scaleup',
        'slide-right',
        'slide-bottom',
        'newspaper',
        'fall',
        'side-fall',
        'flip-horizontal',
        'flip-vertical',
        'sign-3d',
        'super-scaled',
        'slit',
        'rotate-bottom',
        'rotate-left',
      ],
    },
    closeOnClick: {
      control: { type: 'boolean' },
    },
  },

  args: {
    displayCloseBtn: true,
    minWidth: '0',
    maxWidth: 'none',
    overlayColor: 'rgba(0,0,0,0.2)',
    transitionSpeed: '0.3s',
    opened: false,
    effect: 'fall',
    closeOnClick: false,
  },
};

import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-drawer';

import '../../kemet-button/kemet-button';
import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Drawer',
  component: 'kemet-drawer',
};
export default meta;

type Story = StoryObj;

const Template = ({
  width = '300px',
  height = '100%',
  color = '#fafafa',
  backgroundColor = '#202020',
  opened = false,
  effect = 'slide',
  side = 'left',
  overlay = false,
  overlayColor = 'rgba(0,0,0,0.2)',
}) => {
  setTimeout(() => {
    const docsStoryWrapper = document.querySelector('.docs-story > div') as HTMLElement;
    if (docsStoryWrapper) docsStoryWrapper.style.padding = '0';
  }, 100);

  return html`
    <style>
      kemet-drawer {
        --kemet-drawer-width: ${width};
        --kemet-drawer-height: ${height};
        --kemet-drawer-color: ${color};
        --kemet-drawer-background-color: ${backgroundColor};
        --kemet-drawer-overlay-color: ${overlayColor};
      }
    </style>
    <kemet-drawer ?opened=${opened} effect="${effect}" side="${side}" ?overlay=${overlay}>
      <nav slot="navigation" kemet-padding="2xl">
        <p>Your navigation goes here.</p>
        <kemet-button @click=${(event) => toggleDrawer(event)}>Toggle the Drawer</kemet-button>
      </nav>
      <section slot="content">
        <div kemet-padding="2xl">
          <p>Your content goes here.</p>
          <kemet-button @click=${(event) => toggleDrawer(event)}>Toggle the Drawer</kemet-button>
        </div>
      </section>
    </kemet-drawer>
  `;
};

const toggleDrawer = (event) => {
  const drawer = event.target.closest('kemet-drawer');
  drawer.opened = !drawer.opened;
};

export const Standard: Story = {
  render: args => Template(args),
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    opened: {
      control: { type: 'boolean' },
    },
    effect: {
      control: { type: 'select' },
      options: ['slide', 'reveal', 'push', 'scale'],
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    overlay: {
      control: { type: 'boolean' },
    },
    overlayColor: {
      control: { type: 'color' },
    },
  },
  args: {
    width: '300px',
    height: '100%',
    color: '#fafafa',
    backgroundColor: '#202020',
    opened: false,
    effect: 'slide',
    side: 'left',
    overlay: false,
    overlayColor: 'rgba(0,0,0,0.2)',
  },
};

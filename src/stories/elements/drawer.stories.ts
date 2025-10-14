import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/drawer';

import '../../elements/button';
import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Elements / Drawer',
  component: 'kemet-drawer',
  argTypes: {
    effect: {
      control: { type: 'select' },
      options: ['slide', 'reveal', 'push', 'scale'],
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  return html`
    <kemet-drawer ?opened=${args.opened} effect="${ifDefined(args.effect)}" side="${ifDefined(args.side)}" ?overlay=${args.overlay}>
      <nav slot="navigation" kemet-padding="2xl">
        <p>Your navigation goes here.</p>
        <kemet-button @click=${(event) => toggleDrawer(event)}>Toggle the Drawer</kemet-button>
      </nav>
      <section slot="content">
        <div kemet-padding="2xl">
          <h2>Your content goes here.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Pharetra magna ac placerat vestibulum lectus. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Turpis egestas maecenas pharetra convallis posuere. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Faucibus a pellentesque sit amet porttitor eget. Vitae aliquet nec ullamcorper sit. Nisi lacus sed viverra tellus in hac habitasse platea. Aenean sed adipiscing diam donec adipiscing. Nunc eget lorem dolor sed. Fermentum dui faucibus in ornare quam viverra. Eget arcu dictum varius duis at consectetur lorem donec.</p>
          <br />
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
};

export const Overlay: Story = {
  render: args => Template(args),
  args: {
    overlay: true,
  }
};

export const Top: Story = {
  render: args => Template(args),
  args: {
    overlay: true,
    side: 'top'
  }
};

export const Right: Story = {
  render: args => Template(args),
  args: {
    overlay: true,
    side: 'right'
  }
};

export const Bottom: Story = {
  render: args => Template(args),
  args: {
    overlay: true,
    side: 'bottom'
  }
};

export const Push: Story = {
  render: args => Template(args),
  args: {
    overlay: true,
    effect: 'push'
  }
};

export const Scale: Story = {
  render: args => Template(args),
  args: {
    overlay: true,
    effect: 'scale'
  }
};

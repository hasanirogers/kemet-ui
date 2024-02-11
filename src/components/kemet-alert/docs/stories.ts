import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import '../kemet-alert';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

import '../../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Components / Alert',
  component: 'kemet-alert',
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'info-circle', 'check-circle', 'gear', 'exclamation-circle'],
    },
    status: {
      control: { type: 'select' },
      options: ['standard', 'primary', 'success', 'warning', 'error'],
    },
    closable: {
      control: { type: 'boolean' },
    },
    border: {
      control: { type: 'select' },
      options: ['none', 'top', 'right', 'bottom', 'left'],
    },
    opened: {
      control: { type: 'boolean' },
    },
    overlay: {
      control: { type: 'select' },
      options: ['none', 'top-full', 'bottom-full', 'top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
  },
};
export default meta;

type Story = StoryObj;

const Template = (args: Args) => {
  const makeIcon = () => {
    if (args.icon !== 'none' && args.icon) {
      return html`<kemet-icon slot="icon" icon=${args.icon} size="24" ></kemet-icon>`;
    }

    return null;
  };

  const makeHeading = () => {
    if (args.heading !== '' && args.heading) {
      return html`<h3 kemet-margin-bottom="none" kemet-margin-top="none">${args.heading}</h3>`;
    }

    return null;
  };

  return html`
    <kemet-alert
      status=${ifDefined(args.status)}
      ?closable=${args.closable}
      ?opened=${args.opened}
      border-status=${args.border}
      overlay=${ifDefined(args.overlay !== 'none' ? args.overlay : null)}
      kemet-margin=${ifDefined(args.overlay.indexOf('full') < 0 ? '2xl' : nothing)}>
      ${makeIcon()}
      ${makeHeading()}
      ${args.text}
    </kemet-alert>
  `;
};

export const Standard: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    text: 'The brown fox jumped over the lazy dog.',
    overlay: 'none',
  },
};

export const Heading: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    overlay: 'none',
  },
};

export const Icon: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'info-circle',
    overlay: 'none',
  },
};

export const Closable: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'info-circle',
    closable: true,
    overlay: 'none',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByText('This is a heading.').closest('kemet-alert');
    const closeButton = alert.shadowRoot.querySelector('.close kemet-icon');

    await step('Close the modal', async () => {
      await userEvent.click(closeButton);
      expect(alert.opened).toBeFalsy();
    });

    await step('Reopen the Modal', async () => {
      alert.opened = true;
    });
  },
};

export const BorderTop: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'info-circle',
    closable: true,
    border: 'top',
    overlay: 'none',
  },
};

export const BorderRight: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'info-circle',
    closable: true,
    border: 'right',
    overlay: 'none',
  },
};

export const BorderBottom: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'info-circle',
    closable: true,
    border: 'bottom',
    overlay: 'none',
  },
};

export const BorderLeft: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'info-circle',
    closable: true,
    border: 'left',
    overlay: 'none',
  },
};

export const Primary: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'info-circle',
    closable: true,
    border: 'left',
    overlay: 'none',
    status: 'primary',
  },
};

export const Success: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'check-circle',
    closable: true,
    border: 'left',
    overlay: 'none',
    status: 'success',
  },
};

export const Warning: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'exclamation-triangle',
    closable: true,
    border: 'left',
    overlay: 'none',
    status: 'warning',
  },
};

export const Error: Story = {
  render: (args: Args) => Template(args),
  args: {
    opened: true,
    heading: 'This is a heading.',
    text: 'The brown fox jumped over the lazy dog.',
    icon: 'exclamation-octagon',
    closable: true,
    border: 'left',
    overlay: 'none',
    status: 'error',
  },
};

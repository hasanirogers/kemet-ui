import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';
import { userEvent, within, expect } from 'storybook/test';
import KemetAlert, { EnumOverlayPositions, EnumRoundedSizes, roundedSizes } from '../../elements/alert';;

import '../../elements/alert';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../elements/icon-bootstrap';

const meta: Meta = {
  title: 'Elements / Alert',
  component: 'kemet-alert',
  args: {
    text: 'The brown fox jumped over the lazy dog.',
    opened: true,
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['none', 'info-circle', 'check-circle', 'gear', 'exclamation-circle'],
    },
    status: {
      control: { type: 'select' },
      options: ['standard', 'primary', 'success', 'warning', 'error'],
    },
    border: {
      control: { type: 'select' },
      options: ['none', 'top', 'right', 'bottom', 'left'],
    },
    overlay: {
      control: { type: 'select' },
      options: ['none', 'top-full', 'bottom-full', 'top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    rounded: {
      control: { type: 'select' },
      options: roundedSizes,
    },
  },
};
export default meta;

type Story = StoryObj;

const Template = (args: Args) => {
  return html`
    <kemet-alert
      status=${ifDefined(args.status)}
      ?closable=${args.closable}
      ?opened=${args.opened}
      border-status=${ifDefined(args.border)}
      rounded=${ifDefined(args.rounded)}
      overlay=${ifDefined(args.overlay !== 'none' ? args.overlay : null)}>
      ${args.icon}
      ${args.heading}
      ${args.text}
    </kemet-alert>
  `;
};

export const Standard: Story = {
  render: (args: Args) => Template(args),
};

export const Heading: Story = {
  render: (args: Args) => Template(args),
  args: {
    heading: html`<h3 kemet-margin-bottom="none" kemet-margin-top="none">This is a heading.</h3>`,
  },
};

export const Icon: Story = {
  render: (args: Args) => Template(args),
  args: {
    icon: html`<kemet-icon-bootstrap slot="icon" icon="info-circle" size="24"></kemet-icon-bootstrap>`,
  },
};

export const Rounded: Story = {
  render: (args: Args) => Template(args),
  args: {
    rounded: EnumRoundedSizes.MD,
  }
}

export const Closable: Story = {
  render: (args: Args) => Template(args),
  args: {
    closable: true,
    heading: html`<h3 kemet-margin-bottom="none" kemet-margin-top="none">This is a heading.</h3>`,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByText('This is a heading.').closest('kemet-alert') as KemetAlert;
    const closeButton = alert?.shadowRoot?.querySelector('.close kemet-icon');

    await step('Close the Alert', async () => {
      if (closeButton) await userEvent.click(closeButton);
      expect(alert.opened).toBeFalsy();
    });

    await step('Reopen the Alert', async () => {
      alert.opened = true;
      expect(alert.opened).toBeTruthy();
    });
  },
};

export const BorderTop: Story = {
  render: (args: Args) => Template(args),
  args: {
    border: 'top',
  },
};

export const BorderRight: Story = {
  render: (args: Args) => Template(args),
  args: {
    border: 'right',
  },
};

export const BorderBottom: Story = {
  render: (args: Args) => Template(args),
  args: {
    border: 'bottom',
  },
};

export const BorderLeft: Story = {
  render: (args: Args) => Template(args),
  args: {
    border: 'left',
  },
};

export const Primary: Story = {
  render: (args: Args) => Template(args),
  args: {
    border: 'left',
    status: 'primary',
  },
};

export const Success: Story = {
  render: (args: Args) => Template(args),
  args: {
    border: 'left',
    status: 'success',
  },
};

export const Warning: Story = {
  render: (args: Args) => Template(args),
  args: {
    border: 'left',
    status: 'warning',
  },
};

export const Error: Story = {
  render: (args: Args) => Template(args),
  args: {
    border: 'left',
    status: 'error',
  },
};

export const TopFull: Story = {
  render: (args: Args) => Template(args),
  args: {
    overlay: EnumOverlayPositions.TOP_FULL,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const BottomFull: Story = {
  render: (args: Args) => Template(args),
  args: {
    overlay: EnumOverlayPositions.BOTTOM_FULL,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const TopRight: Story = {
  render: (args: Args) => Template(args),
  args: {
    overlay: EnumOverlayPositions.TOP_RIGHT,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const TopLeft: Story = {
  render: (args: Args) => Template(args),
  args: {
    overlay: EnumOverlayPositions.TOP_LEFT,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const BottomRight: Story = {
  render: (args: Args) => Template(args),
  args: {
    overlay: EnumOverlayPositions.BOTTOM_RIGHT,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const BottomLeft: Story = {
  render: (args: Args) => Template(args),
  args: {
    overlay: EnumOverlayPositions.BOTTOM_LEFT,
  },
  parameters: {
    layout: 'fullscreen',
  }
};


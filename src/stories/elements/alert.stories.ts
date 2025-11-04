import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';
import { userEvent, within, expect } from 'storybook/test';
import KemetAlert, { EnumOverlayPositions, overlayPositions } from '../../elements/alert';
import { directions, EnumStatuses, statuses, EnumRoundedSizes, roundedSizes } from '../../utilities/constants';

import '../../elements/alert';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../elements/icon-bootstrap';

const meta: Meta = {
  title: 'Feedback & Status / Alert',
  component: 'kemet-alert',
  render: (args: Args) => Template(args),
  args: {
    text: 'The brown fox jumped over the lazy dog.',
    opened: true,
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: statuses,
    },
    border: {
      control: { type: 'select' },
      options: directions,
    },
    overlay: {
      control: { type: 'select' },
      options: overlayPositions,
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
      ?filled=${args.filled}
      border-status=${ifDefined(args.border)}
      rounded=${ifDefined(args.rounded)}
      overlay=${ifDefined(args.overlay !== 'none' ? args.overlay : null)}>
      ${args.icon}
      ${args.heading}
      ${args.text}
    </kemet-alert>
  `;
};

export const Standard: Story = {};

export const Heading: Story = {
  args: {
    heading: html`<h3 kemet-margin-bottom="none" kemet-margin-top="none">This is a heading.</h3>`,
  },
};

export const Icon: Story = {
  args: {
    icon: html`<kemet-icon-bootstrap slot="icon" icon="info-circle" size="24"></kemet-icon-bootstrap>`,
  },
};

export const Rounded: Story = {
  args: {
    rounded: EnumRoundedSizes.MD,
  }
}

export const Filled: Story = {
  args: {
    filled: true,
    icon: html`<kemet-icon-bootstrap slot="icon" icon="info-circle" size="24"></kemet-icon-bootstrap>`,
  }
}

export const Closable: Story = {
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
  args: {
    border: 'top',
  },
};

export const BorderRight: Story = {
  args: {
    border: 'right',
  },
};

export const BorderBottom: Story = {
  args: {
    border: 'bottom',
  },
};

export const BorderLeft: Story = {
  args: {
    border: 'left',
  },
};

export const Primary: Story = {
  args: {
    border: 'left',
    status: EnumStatuses.Primary,
  },
};

export const Success: Story = {
  args: {
    border: 'left',
    status: EnumStatuses.Success,
  },
};

export const Warning: Story = {
  args: {
    border: 'left',
    status: EnumStatuses.Warning,
  },
};

export const Error: Story = {
  args: {
    border: 'left',
    status: EnumStatuses.Error,
  },
};

export const TopFull: Story = {
  args: {
    overlay: EnumOverlayPositions.TOP_FULL,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const BottomFull: Story = {
  args: {
    overlay: EnumOverlayPositions.BOTTOM_FULL,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const TopRight: Story = {
  args: {
    overlay: EnumOverlayPositions.TOP_RIGHT,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const TopLeft: Story = {
  args: {
    overlay: EnumOverlayPositions.TOP_LEFT,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const BottomRight: Story = {
  args: {
    overlay: EnumOverlayPositions.BOTTOM_RIGHT,
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const BottomLeft: Story = {
  args: {
    overlay: EnumOverlayPositions.BOTTOM_LEFT,
  },
  parameters: {
    layout: 'fullscreen',
  }
};


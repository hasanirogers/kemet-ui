import { html } from 'lit-html';
import dedent from 'ts-dedent';
import './kemet-popover.js';
import './kemet-popover-close.js';

const Template = ({
  triggerText = 'Activate Popover',
  contentText = 'our popover contents here. Supports HTML.',
  width = '200%',
  height = 'auto',
  gap = '1rem',
  contentOffsetX = '0',
  contentOffsetY = '0',
  color = '#fafafa',
  backgroundColor = '#202020',
  transitionSpeed = '0.3s',
  fireOn = 'hover',
  opened = false,
  effect = 'fade',
  position = 'top',
  tooltip = false,
  clickOutside = false,
}) => html`
  <style>
    kemet-popover {
      --kemet-popover-width: ${width};
      --kemet-popover-height: ${height};
      --kemet-popover-gap: ${gap};
      --kemet-popover-content-offset-x: ${contentOffsetX};
      --kemet-popover-content-offset-y: ${contentOffsetY};
      --kemet-popover-color: ${color};
      --kemet-popover-background-color: ${backgroundColor};
      --kemet-popover-transition-speed: ${transitionSpeed};
      margin: auto;
    }
  </style>
  <kemet-popover
    fire-on=${fireOn}
    ?opened=${opened}
    effect=${effect}
    position=${position}
    ?tooltip=${tooltip}
    ?click-outside=${clickOutside}
  >
    <strong slot="trigger">${triggerText}</strong>
    <div slot="content">${contentText}</div>
  </kemet-popover>
`;

const customTooltipTemplate = () => html`
  <style>
    kemet-popover-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
    }

    #custom-tooltip {
      margin: 0 auto;
      --kemet-popover-width: 200%;
    }

    #custom-tooltip [slot="content"] {
      color: rgba(36,49,56,1);
      background-color: #fafafa;
      border: 3px solid rgba(36,49,56,1);
    }

    #custom-tooltip svg {
      position: relative;
      top: -3px;
    }
  </style>
  <kemet-popover id="custom-tooltip" custom-tooltip click-outside fire-on="click" effect="fade">
    <strong slot="trigger">Activate Custom Tooltip</strong>:
    <div slot="content">
      <kemet-popover-close>&times;</kemet-popover-close>
      <h3>HTML is Supported</h3>
      <p>This is a custom tooltip.</p>
      <p><img src="http://placehold.it/1920x1080" style="max-width:100%;" alt="A Placeholder" /></p>
      <p><a href="http://kemet.online/popover" target="_blank">Random link</a></p>
    </div>
    <span slot="custom-tooltip">
      <svg width="32" height="18" viewBox="0 0 1366.99 767.67">
        <polyline points="0.74 0.67 685.25 766.17 1366.24 0.67" style="fill:#fafafa; stroke:rgba(36,49,56,1); stroke-width:100px"/>
      </svg>
    </span>
  </kemet-popover>
`;

export const Popover = Template.bind({});
Popover.parameters = {
  docs: {
    source: {
      code: dedent`
      <kemet-popover>
        <strong slot="trigger">Popover Trigger</strong>
        <div slot="content">Your popover contents here. Supports HTML.</div>
      </kemet-popover>
      `,
    },
  },
  layout: 'centered',
};
Popover.args = {
  triggerText: 'Popover Trigger',
  contentText: 'Your popover contents here. Supports HTML.',
};
Popover.decorators = [story => html`<div style="display:flex; min-height:240px;">${story()}</div>`];

export const customTooltip = customTooltipTemplate.bind({});
customTooltip.parameters = {
  docs: {
    source: {
      code: dedent`
      <style>
        kemet-popover-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 2rem;
        }

        #custom-tooltip {
          margin: 0 auto;
          --kemet-popover-width: 200%;
        }

        #custom-tooltip [slot="content"] {
          color: rgba(36,49,56,1);
          background-color: #fafafa;
          border: 3px solid rgba(36,49,56,1);
        }

        #custom-tooltip svg {
          position: relative;
          top: -3px;
        }
      </style>
      <kemet-popover id="custom-tooltip" custom-tooltip click-outside fire-on="click" effect="fade">
        <strong slot="trigger">Activate Custom Tooltip</strong>:
        <div slot="content">
          <kemet-popover-close>&times;</kemet-popover-close>
          <h3>HTML is Supported</h3>
          <p>This is a custom tooltip.</p>
          <p><img src="http://placehold.it/1920x1080" style="max-width:100%;" alt="A Placeholder" /></p>
          <p><a href="http://google.com" target="_blank">Random link</a></p>
        </div>
        <span slot="custom-tooltip">
          <svg width="32" height="18" viewBox="0 0 1366.99 767.67">
            <polyline points="0.74 0.67 685.25 766.17 1366.24 0.67" style="fill:#fafafa; stroke:rgba(36,49,56,1); stroke-width:100px"/>
          </svg>
        </span>
      </kemet-popover>
      `,
    },
  },
};
customTooltip.decorators = [story => html`<div style="display:flex; min-height:480px; align-items:flex-end;">${story()}</div>`];

import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const Template = ({
  heading,
  text,
  icon,
  status,
  closable,
  border,
  opened,
  overlay,
}) => {
  const makeIcon = () => {
    if (icon !== 'none') {
      return html`<kemet-icon slot="icon" icon=${icon} size="24" ></kemet-icon>`;
    }

    return null;
  };

  return html`
    <kemet-alert
      status=${status}
      ?closable=${closable}
      ?opened=${opened}
      border-status=${border}
      overlay=${ifDefined(overlay !== 'none' ? overlay : null)}
      kemet-margin=${ifDefined(overlay.indexOf('full') < 0 ? 'tiny:normal' : nothing)}>
      ${makeIcon()}
      <strong>${heading}</strong>
      <br />
      ${text}
    </kemet-alert>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  heading: 'This is a heading.',
  text: 'The brown fox jumped over the lazy dog.',
  icon: 'gear',
  status: 'standard',
  closable: false,
  border: 'left',
  opened: true,
  overlay: 'none',
};
Standard.argTypes = {
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
};

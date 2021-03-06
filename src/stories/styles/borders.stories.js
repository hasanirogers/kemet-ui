import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const Template = ({
  width = '1',
  side = 'all',
  style = 'solid',
  color = 'primary',
  radius = 'none',
}) => {
  const borderRadius = radius !== 'none' ? `kemet-border-radius="${radius}"` : null;

  const template = `
    <div kemet-border="${side}-${width} ${style} ${color}" ${borderRadius} kemet-margin="tiny:normal" kemet-padding="tiny:normal">The quick brown fox jumps over the lazy dog.</div>
  `;

  return html`${unsafeHTML(template)}`;
};
export const Standard = Template.bind({});
Standard.args = {
  width: '1',
  side: 'all',
  style: 'solid',
  color: 'primary',
  radius: 'none',
};
Standard.argTypes = {
  width: {
    control: { type: 'select' },
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  side: {
    control: { type: 'select' },
    options: ['all', 'top', 'right', 'bottom', 'left', 'horizontal', 'vertical'],
  },
  style: {
    control: { type: 'select' },
    options: ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
  },
  color: {
    control: { type: 'select' },
    options: ['primary', 'black', 'white', 'gray1', 'gray2', 'gray3', 'gray4', 'gray5', 'gray6', 'gray7', 'gray8', 'gray9', 'gray10'],
  },
  radius: {
    control: { type: 'select' },
    options: ['none', 'small', 'medium', 'large'],
  },
};

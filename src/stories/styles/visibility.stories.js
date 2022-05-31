import { html } from 'lit';

const TemplateShow = ({
  label = 'This will show at the specified parameters.',
  breakpoint = 'medium',
  direction = 'up',
}) => {
  const kemetShow = direction === 'only' ? breakpoint : `${breakpoint}:${direction}`;

  return html`
    <p kemet-show="${kemetShow}" class="box" style="display:none;">${label}</p>
  `;
};
export const Show = TemplateShow.bind({});
Show.args = {
  label: 'This will show at he specified parameters.',
  breakpoint: 'medium',
  direction: 'up',
};
Show.argTypes = {
  label: {
    control: { type: 'text' },
  },
  breakpoint: {
    control: { type: 'select' },
    options: ['tiny', 'small', 'medium', 'large', 'huge'],
  },
  direction: {
    control: { type: 'radio' },
    options: ['only', 'up', 'down'],
  },
};

const TemplateHide = ({
  label = 'This will hide at the specified parameters.',
  breakpoint = 'medium',
  direction = 'down',
}) => {
  const kemetHide = direction === 'only' ? breakpoint : `${breakpoint}:${direction}`;

  return html`
    <p kemet-hide="${kemetHide}" class="box">${label}</p>
  `;
};
export const Hide = TemplateHide.bind({});
Hide.args = {
  label: 'This will hide at he specified parameters.',
  breakpoint: 'medium',
  direction: 'down',
};
Hide.argTypes = {
  label: {
    control: { type: 'text' },
  },
  breakpoint: {
    control: { type: 'select' },
    options: ['tiny', 'small', 'medium', 'large', 'huge'],
  },
  direction: {
    control: { type: 'radio' },
    options: ['only', 'up', 'down'],
  },
};

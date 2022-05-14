import { html } from 'lit/static-html';

import './kemet-modal.js';
import './kemet-modal-close.js';
import '../kemet-button/kemet-button.js';
import '../kemet-icon/kemet-icon.js';

export default {
  title: 'Kemet Modal',
  component: 'kemet-modal',
};

const Template = ({
  displayCloseBtn = true,
  minWidth = '0',
  maxWidth = 'none',
  overlayColor = 'rgba(0,0,0,0.2)',
  transitionSpeed = '0.3s',
  opened = false,
  effect = 'fall',
  closeOnClick = false,
}) => {
  const openModal = () => {
    const modal = document.querySelector('kemet-modal');
    modal.opened = true;
  };

  const makeCloseBtn = (display) => {
    if (display) {
      return html`
        <kemet-modal-close tabindex="0" role="button" aria-label="Close Button">
          <kemet-icon icon="x-circle-fill" size="24"></kemet-icon>
        </kemet-modal-close>
      `;
    }

    return null;
  };

  const temp = html`
    <style>
      kemet-modal {
        --kemet-modal-min-width: ${minWidth};
        --kemet-modal-max-width: ${maxWidth};
        --kemet-modal-overlay-background-color: ${overlayColor};
        --kemet-modal-transition-speed: ${transitionSpeed};
      }
    </style>
    <kemet-button @click="${() => openModal()}">Open Modal</kemet-button>
    <kemet-modal ?opened=${opened} effect="${effect}" ?close-on-click="${closeOnClick}">
      ${makeCloseBtn(displayCloseBtn)}
      <h2 kemet-margin="tiny:none">Modal Title</h2>
      <p>Your modal contents <a href="http://google.com">here</a>.</p>
    </kemet-modal>
  `;

  return temp;
};

export const Modal = Template.bind({});
Modal.argTypes = {
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
    options: ['fadein-scaleup', 'slide-right', 'slide-bottom', 'newspaper', 'fall', 'side-fall', 'flip-horizontal', 'flip-vertical', 'sign-3d', 'super-scaled', 'slit', 'rotate-bottom', 'rotate-left'],
  },
  closeOnClick: {
    control: { type: 'boolean' },
  },
};
Modal.args = {
  displayCloseBtn: true,
  minWidth: '0',
  maxWidth: 'none',
  overlayColor: 'rgba(0,0,0,0.2)',
  transitionSpeed: '0.3s',
  opened: false,
  effect: 'fall',
  closeOnClick: false,
};

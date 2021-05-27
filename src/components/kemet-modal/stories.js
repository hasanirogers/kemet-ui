import { html } from 'lit-html';
import dedent from 'ts-dedent';

import './kemet-modal.js';
import './kemet-modal-close.js';

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
}) => html`
  <style>
    kemet-modal {
      --kemet-modal-min-width: ${minWidth};
      --kemet-modal-max-width: ${maxWidth};
      --kemet-modal-overlay-background-color: ${overlayColor};
      --kemet-modal-transition-speed: ${transitionSpeed};
    }
  </style>
  <p>
    <button @click="${() => toggleModal()}">Toggle Modal</button>
  </p>
  <kemet-modal ?opened=${opened} effect="${effect}" ?close-on-click="${closeOnClick}">
    <h2>Modal Title</h2>
    <p>Your modal contents here.</p>
    ${makeCloseBtn(displayCloseBtn)}
  </kemet-modal>
`;

const toggleModal = () => {
  const modal = document.querySelector('kemet-modal');
  modal.opened = !modal.opened;
};

const makeCloseBtn = (display) => {
  if (display) {
    return html`
      <kemet-modal-close>
        <button>Close Modal</button>
      </kemet-modal-close>
    `;
  }

  return null;
};

export const Modal = Template.bind({});
Modal.parameters = {
  docs: {
    source: {
      code: dedent`
        <kemet-modal>
          <h2>Modal Title</h2>
          <p>Your modal contents here.<p>
        </kemet-modal>
      `,
    },
  },
};

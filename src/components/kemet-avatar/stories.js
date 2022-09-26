import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const Template = ({
  icon,
  image,
  circle,
  rounded,
  initials,
  status,
}) => html`
  <kemet-avatar
    ?circle=${circle}
    ?rounded=${rounded}
    image="${ifDefined(image !== '' ? image : null)}"
    initials="${ifDefined(initials !== '' ? initials : null)}"
    kemet-margin="tiny:normal">
    ${icon !== '' ? html`<kemet-icon icon=${icon} size="48" kemet-margin="tiny:smallest"></kemet-icon>` : null}
    ${status ? html`<kemet-badge slot="status" status="success" kemet-border="all-2 solid white"></kemet-badge>` : null}
  </kemet-avatar>
`;
export const Standard = Template.bind({});
Standard.args = {
  circle: true,
  rounded: false,
  image: 'https://via.placeholder.com/64x64',
  initials: 'KU',
  icon: 'person',
  status: false,
};
Standard.argTypes = {
  circle: {
    control: { type: 'boolean' },
  },
  rounded: {
    control: { type: 'boolean' },
  },
  image: {
    control: { type: 'text' },
  },
  initials: {
    control: { type: 'text' },
  },
  icon: {
    control: { type: 'text' },
  },
  status: {
    control: { type: 'boolean' },
  },
};

const TemplateMultiple = ({
  squeeze,
  numOfAvatars,
  border,
}) => {
  const avatars = [];

  for (let i = 0; i < numOfAvatars; i += 1) {
    avatars.push(html`<kemet-avatar circle image="https://via.placeholder.com/64x64"></kemet-avatar>\n`);
  }

  return html`
    <style>
      kemet-avatars {
        --kemet-avatars-squeeze: ${squeeze};
      }
    </style>
    <kemet-avatars ?border=${border} kemet-margin="tiny:normal">
      ${avatars}
    </kemet-avatars>
  `;
};
export const Multiple = TemplateMultiple.bind({});
Multiple.args = {
  squeeze: '-1.5rem',
  numOfAvatars: 3,
  border: true,
};
Multiple.argTypes = {
  squeeze: {
    control: { type: 'text' },
  },
  numOfAvatars: {
    control: { type: 'number' },
  },
  border: {
    control: { type: 'boolean' },
  },
};

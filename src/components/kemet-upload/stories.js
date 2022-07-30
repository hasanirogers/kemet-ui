import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';

const Template = ({ files }) => {
  const uploadFiles = [];

  files.forEach((file) => {
    uploadFiles.push(html`
      <kemet-upload-file name=${file.name} size=${file.size} loaded=${file.loaded} status=${file.status} message=${ifDefined(files.message)}></kemet-upload-file>
    `);
  });

  return html`
    <kemet-upload>
      ${uploadFiles}
    </kemet-upload>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  files: [
    {
      name: 'image.jpg',
      size: 2000000,
      loaded: 2000000,
      status: 'complete',
    },
    {
      name: 'image.png',
      size: 200000,
      loaded: 100000,
      status: 'uploading',
    },
    {
      name: 'package.zip',
      size: 8000000,
      loaded: 2000000,
      status: 'error',
      message: 'File size is too big.',
    },
  ],
};
Standard.argTypes = {
  files: {
    control: { type: 'array' },
  },
};
Standard.parameters = {
  backgrounds: { default: 'Gray 1' },
};

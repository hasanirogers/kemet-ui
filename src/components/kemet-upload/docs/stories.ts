import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-upload';
import '../kemet-upload-file';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Upload',
  component: 'kemet-upload',
};
export default meta;

type Story = StoryObj;

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

export const Standard: Story = {
  render: (args: any) => Template(args),
  args: {
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
  },
  argTypes: {
    files: {
      control: { type: 'array' },
    },
  }
};

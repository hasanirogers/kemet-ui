import {
  html,
  fixture,
  expect,
  oneEvent,
} from '@open-wc/testing';

import './kemet-upload.js';
import './kemet-upload-file.js';

const templates = {
  default: () => html`
    <kemet-upload>
      <kemet-upload-file name="image.jpg" size="2000000" loaded="2000000" status="complete"></kemet-upload-file>
      <kemet-upload-file name="image.png" size="200000" loaded="100000" status="uploading"></kemet-upload-file>
      <kemet-upload-file name="package.zip" size="8000000" loaded="2000000" status="error"></kemet-upload-file>
    </kemet-upload>
  `,
};

describe('KemetUpload', async () => {
  const component = await fixture(templates.default());

  it('passes the a11y audit', async () => {
    await expect(component).shadowDom.to.be.accessible();
  });

  it('has the correct default props', async () => {
    expect(component.slug).to.equal('upload');
    expect(component.breakpoint).to.equal('600px');
    expect(component.buttonLabel).to.equal('Browse Files');
    expect(component.heading).to.equal('Drag & Drop Files');
  });

  it('fires the upload change event', async () => {
    setTimeout(() => {
      component.handleChange();
      component.handleDrop();
    });
    const { detail } = await oneEvent(component, 'kemet-upload-change');
    expect(detail.fileElement.tagName).to.equal('INPUT');
  });
});

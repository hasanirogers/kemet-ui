import React from 'react';
import { KemetRadio, KemetRadios } from '../../WebComponents';

const ViewRadio = () => {
  return (
    <content-wrapper>
      <KemetRadios legend="Legend" axis="horizontal">
        <KemetRadio value="1" name="kemet-radio-button" label="Item 1" />
        <KemetRadio value="2" name="kemet-radio-button" label="Item 2" />
        <KemetRadio value="3" name="kemet-radio-button" label="Item 3" />
      </KemetRadios>
    </content-wrapper>
  );
}

export default ViewRadio;

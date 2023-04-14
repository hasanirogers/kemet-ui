import React from 'react';
import { KemetAlert, KemetIcon } from '../../WebComponents';

const ViewAlert = () => {
  return (
    <content-wrapper>
      <KemetAlert opened={true} status="standard" border-status="left" kemet-margin="tiny:normal">
        <KemetIcon slot="icon" size={24} icon="gear" />
        <strong>This is a heading.</strong>
        <br />
        The brown fox jumped over the lazy dog.
      </KemetAlert>
    </content-wrapper>
  );
}

export default ViewAlert;

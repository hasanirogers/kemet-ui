import React from 'react';
import { KemetButton, KemetIcon } from '../../WebComponents';

const ViewButton = () => {
  return (
    <content-wrapper>
      <KemetButton>
        Button
        <KemetIcon icon="gear" slot="right" />
      </KemetButton>
    </content-wrapper>
  );
}

export default ViewButton;

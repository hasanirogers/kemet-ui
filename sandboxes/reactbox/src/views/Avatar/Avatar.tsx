import React from 'react';
import { KemetAvatar, KemetAvatars } from '../../WebComponents';

const ViewAvatar = () => {
  return (
    <content-wrapper>
      <KemetAvatars kemet-margin="tiny:normal">
        <KemetAvatar circle={true} image="https://via.placeholder.com/64x64" kemet-border="all-4 solid white" />
        <KemetAvatar circle={true} image="https://via.placeholder.com/64x64" kemet-border="all-4 solid white" />
        <KemetAvatar circle={true} image="https://via.placeholder.com/64x64" kemet-border="all-4 solid white" />
      </KemetAvatars>
    </content-wrapper>
  );
}

export default ViewAvatar;

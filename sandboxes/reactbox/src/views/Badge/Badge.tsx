import React from 'react';
import { KemetBadge, KemetIcon } from '../../WebComponents';

const ViewBadge = () => {
  return (
    <content-wrapper>
      <KemetBadge status="primary" circle={true} circle-padding="8">
        <KemetIcon icon="cart3" />&nbsp;3
      </KemetBadge>
    </content-wrapper>
  );
}

export default ViewBadge;

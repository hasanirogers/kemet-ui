import React from 'react';
import { KemetDraggable, KemetButton } from '../../WebComponents';

const ViewDraggable = () => {
  return (
    <content-wrapper>
      <KemetDraggable>
        <KemetButton>Drag Me</KemetButton>
      </KemetDraggable>
    </content-wrapper>
  );
}

export default ViewDraggable;

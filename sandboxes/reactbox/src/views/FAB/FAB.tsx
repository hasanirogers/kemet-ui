import React from 'react';
import { KemetFAB, KemetIcon } from '../../WebComponents';

const ViewFAB = () => {
  return (
    <content-wrapper>
      <KemetFAB>
        <KemetIcon slot="icon" icon="pencil-square" size={24} />
        Action
      </KemetFAB>
    </content-wrapper>
  );
}

export default ViewFAB;

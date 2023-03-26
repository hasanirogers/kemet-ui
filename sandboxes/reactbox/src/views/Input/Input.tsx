import React from 'react';
import { KemetInput } from '../../WebComponents';

const ViewInput = () => {
  return (
    <content-wrapper>
      <KemetInput required slot="input" name="input-field" validate-on-blur={true} />
    </content-wrapper>
  );
}

export default ViewInput;

import React from 'react';
import { KemetTextarea } from '../../WebComponents';

const ViewTextarea = () => {
  return (
    <content-wrapper>
      <KemetTextarea required slot="input" name="input-field" validate-on-blur={true} />
    </content-wrapper>
  );
}

export default ViewTextarea;

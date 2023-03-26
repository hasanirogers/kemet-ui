import React from 'react';
import { KemetField, KemetInput } from '../../WebComponents';

const ViewField = () => {
  return (
    <content-wrapper>
      <KemetField label="Label">
        <KemetInput required slot="input" name="input-field" validate-on-blur={true} />
      </KemetField>
    </content-wrapper>
  );
}

export default ViewField;

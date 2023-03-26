import React from 'react';
import { KemetCount, KemetField, KemetInput } from '../../WebComponents';

const ViewCount = () => {
  return (
    <content-wrapper>
      <KemetField label="Label" message="Too many characters!" status="standard">
        <KemetInput slot="input" name="input-field" validate-on-blur={true} />
        <KemetCount slot="component" message="characters remaining." limit={8} validate-immediately={true} />
      </KemetField>
    </content-wrapper>
  );
}

export default ViewCount;

import React from 'react';
import { KemetField, KemetInput, KemetPassword } from '../../WebComponents';

const ViewPassword = () => {
  return (
    <content-wrapper>
      <KemetField slug="new-password" label="New Password">
        <KemetInput slot="input" type="password" name="new-password" />
        <KemetPassword slot="component" message="Please make sure you meet all the requirements." />
      </KemetField>
    </content-wrapper>
  );
}

export default ViewPassword;

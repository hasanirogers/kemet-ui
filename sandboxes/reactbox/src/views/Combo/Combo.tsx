import React from 'react';
import { KemetCombo, KemetField, KemetInput } from '../../WebComponents';

const ViewCombo = () => {
  const options = ['What question 1', 'What question 2', 'What question 3'];

  return (
    <content-wrapper>
      <KemetField label="Frequently asked questions." kemet-margin="tiny:smallest">
        <KemetInput slot="input" name="input" placeholder="Start typing to see the FAQs" />
        <KemetCombo slot="component" options={options} />
      </KemetField>
    </content-wrapper>
  );
}

export default ViewCombo;

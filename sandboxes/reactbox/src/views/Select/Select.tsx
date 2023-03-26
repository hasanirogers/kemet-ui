import React from 'react';
import { KemetField, KemetOption, KemetSelect } from '../../WebComponents';

const ViewSelect = () => {
  return (
    <content-wrapper>
      <KemetField label="Choose an Item">
        <KemetSelect slot="input" status="standard" required icon="chevron-down" icon-size={16}>
          <KemetOption label="Choose an Item" />
          <KemetOption label="Item 1" value="1" />
          <KemetOption label="Item 2" value="2" />
          <KemetOption label="Item 3" value="3" />
        </KemetSelect>
      </KemetField>
    </content-wrapper>
  );
}

export default ViewSelect;

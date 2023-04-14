import React from 'react';
import { KemetSortable, KemetSortableItem } from '../../WebComponents';

const ViewSortable = () => {
  return (
    <content-wrapper>
      <KemetSortable>
        <KemetSortableItem>Item 1</KemetSortableItem>
        <KemetSortableItem>Item 2</KemetSortableItem>
        <KemetSortableItem>Item 3</KemetSortableItem>
      </KemetSortable>
    </content-wrapper>
  );
}

export default ViewSortable;

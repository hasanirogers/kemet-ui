import React from 'react';
import { KemetButton, KemetTooltip } from '../../WebComponents';

const ViewTooltip = () => {
  return (
    <content-wrapper>
      <KemetTooltip placement="top" effect="fade">
        <KemetButton type="text" slot="trigger">Trigger</KemetButton>
        <div slot="content">
          This is some content.
        </div>
      </KemetTooltip>
    </content-wrapper>
  );
}

export default ViewTooltip;

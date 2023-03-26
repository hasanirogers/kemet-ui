import React from 'react';
import { KemetButton, KemetFlipcard, KemetFlipcardTrigger } from '../../WebComponents';

const ViewFlipcard = () => {
  return (
    <content-wrapper>
      <KemetFlipcard kemet-margin="tiny:largest" axis="horizontal">
        <div slot="front" kemet-elevation="layer5" kemet-padding="tiny:normal">
          <p>This is the front of the card.</p>
          <KemetFlipcardTrigger>
            <KemetButton>Flip Me</KemetButton>
          </KemetFlipcardTrigger>
        </div>
        <div slot="back" kemet-elevation="layer5" kemet-padding="tiny:normal">
          <p>This is the back of the card.</p>
          <KemetFlipcardTrigger>
            <KemetButton>Flip Me</KemetButton>
          </KemetFlipcardTrigger>
        </div>
      </KemetFlipcard>
    </content-wrapper>
  );
}

export default ViewFlipcard;

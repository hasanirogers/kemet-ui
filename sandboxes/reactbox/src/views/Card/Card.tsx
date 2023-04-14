import React from 'react';
import { KemetCard } from '../../WebComponents';

const ViewCard = () => {
  return (
    <content-wrapper>
      <KemetCard kemet-margin="tiny:largest">
        <img slot="media" src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
        <div slot="caption">Caption</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <div slot="footer">This is the footer.</div>
      </KemetCard>
    </content-wrapper>
  );
}

export default ViewCard;

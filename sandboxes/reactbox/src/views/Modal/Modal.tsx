import React, { useState } from 'react';
import { KemetButton, KemetIcon, KemetModal, KemetModalClose } from '../../WebComponents';

const ViewModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <content-wrapper>
      <KemetButton onClick={() => setIsModalOpened(true)}>Open Modal</KemetButton>
      <KemetModal effect="fall" opened={isModalOpened} onClosed={() => setIsModalOpened(false)} onOpened={() => setIsModalOpened(true)}>
        <div kemet-elevation="layer5" kemet-padding="tiny:normal">
          <KemetModalClose tabIndex="0" role="button" aria-label="Close Button">
            <KemetIcon icon="x-circle" size={24}></KemetIcon>
          </KemetModalClose>
          <h2 kemet-margin="tiny:none">Modal Title</h2>
          <p>Your modal contents <a href="http://google.com">here</a>.</p>
        </div>
      </KemetModal>
    </content-wrapper>
  );
}

export default ViewModal;

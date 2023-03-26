import React from 'react';
import { KemetRotator } from '../../WebComponents';

const ViewRotator = () => {
  const messages = ['Message 1', 'Message 2', 'Message 3'];

  return (
    <content-wrapper>
      <KemetRotator effect="fade" rotation-speed="3" messages={messages} />
    </content-wrapper>
  );
}

export default ViewRotator;

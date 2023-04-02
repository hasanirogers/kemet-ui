import React from 'react';
import { KemetButton, KemetIcon, KemetPopper, KemetPopperClose } from '../../WebComponents';

const ViewPopper = () => {
  return (
    <content-wrapper>
      <KemetPopper placement="top" effect="fade" fire-on="click">
        <KemetButton type="text" slot="trigger">Click Me</KemetButton>
        <div slot="content">
          <KemetPopperClose style={{ position:'absolute', right:'1rem' }}>
            <KemetIcon icon="x-lg" />
          </KemetPopperClose>
          <h2 kemet-margin-top="tiny:none">Heading</h2>
          <img width="240" src="https://via.placeholder.com/1920x1080" alt="A placeholder" />
          <p><a href="https://google.com">This</a> is some <a href="https://google.com">content</a>.</p>
        </div>
      </KemetPopper>
    </content-wrapper>
  );
}

export default ViewPopper;

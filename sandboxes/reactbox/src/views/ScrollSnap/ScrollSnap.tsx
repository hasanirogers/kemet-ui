import React from 'react';
import { KemetScrollSnap, KemetScrollSnapPaginator, KemetScrollSnapSlide } from '../../WebComponents';

const ViewScrollSnap = () => {
  return (
    <content-wrapper>
      <KemetScrollSnap axis="horizontal" pagination="bottom">
        <div slot="slides">
          <KemetScrollSnapSlide kemet-margin-top="tiny:normal" label="Heading 1">
            <h3 kemet-type-size="plus-6">Heading 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src="https://via.placeholder.com/1920x1080" alt="A placeholder" />
          </KemetScrollSnapSlide>

          <KemetScrollSnapSlide kemet-margin-top="tiny:normal" label="Heading 2">
            <h3 kemet-type-size="plus-6">Heading 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src="https://via.placeholder.com/1920x1080" alt="A placeholder" />
          </KemetScrollSnapSlide>

          <KemetScrollSnapSlide kemet-margin-top="tiny:normal" label="Heading 3">
            <h3 kemet-type-size="plus-6">Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src="https://via.placeholder.com/1920x1080" alt="A placeholder" />
          </KemetScrollSnapSlide>

          <KemetScrollSnapSlide kemet-margin-top="tiny:normal" label="Heading 4">
            <h3 kemet-type-size="plus-6">Heading 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src="https://via.placeholder.com/1920x1080" alt="A placeholder" />
          </KemetScrollSnapSlide>

          <KemetScrollSnapSlide kemet-margin-top="tiny:normal" label="Heading 5">
            <h3 kemet-type-size="plus-6">Heading 5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src="https://via.placeholder.com/1920x1080" alt="A placeholder" />
          </KemetScrollSnapSlide>
        </div>
        <KemetScrollSnapPaginator slot="pagination" icon="circle-fill" size={16} center={true} />
      </KemetScrollSnap>
    </content-wrapper>
  );
}

export default ViewScrollSnap;

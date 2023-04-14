import React from 'react';
import { KemetCarousel, KemetCarouselFirst, KemetCarouselLast, KemetCarouselLink, KemetCarouselNext, KemetCarouselPrev, KemetCarouselSlide, KemetIcon } from '../../WebComponents';

const ViewCarousel = () => {
  return (
    <content-wrapper>
      <KemetCarousel kemet-margin="tiny:largest">
        <KemetCarouselSlide slot="slides">
          <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal" kemet-elevation="layer4">
            <h3 kemet-margin="tiny:none">Slide 1</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 1. </span>
        </KemetCarouselSlide>

        <KemetCarouselSlide slot="slides">
          <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal" kemet-elevation="layer4">
            <h3 kemet-margin="tiny:none">Slide 2</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 2. </span>
        </KemetCarouselSlide>

        <KemetCarouselSlide slot="slides">
          <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal" kemet-elevation="layer4">
            <h3 kemet-margin="tiny:none">Slide 3</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 3. </span>
        </KemetCarouselSlide>

        <KemetCarouselSlide slot="slides">
          <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal" kemet-elevation="layer4">
            <h3 kemet-margin="tiny:none">Slide 4</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 4. </span>
        </KemetCarouselSlide>

        <KemetCarouselSlide slot="slides">
          <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal" kemet-elevation="layer4">
            <h3 kemet-margin="tiny:none">Slide 5</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 5. </span>
        </KemetCarouselSlide>

        <KemetCarouselFirst slot="toolbar">
          <KemetIcon icon="chevron-double-left" />
        </KemetCarouselFirst >

        <KemetCarouselPrev slot="toolbar">
          <KemetIcon icon="chevron-left"></KemetIcon>
        </KemetCarouselPrev>

        <KemetCarouselLink slot="toolbar" slide={0}>1</KemetCarouselLink>
        <KemetCarouselLink slot="toolbar" slide={1}>2</KemetCarouselLink>
        <KemetCarouselLink slot="toolbar" slide={2}>3</KemetCarouselLink>
        <KemetCarouselLink slot="toolbar" slide={3}>4</KemetCarouselLink>
        <KemetCarouselLink slot="toolbar" slide={4}>5</KemetCarouselLink>

        <KemetCarouselNext slot="toolbar">
          <KemetIcon icon="chevron-right" />
        </KemetCarouselNext>
        <KemetCarouselLast slot="toolbar">
          <KemetIcon icon="chevron-double-right" />
        </KemetCarouselLast>
      </KemetCarousel>
    </content-wrapper>
  );
}

export default ViewCarousel;

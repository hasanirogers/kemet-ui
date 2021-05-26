import { html } from 'lit-html';
import dedent from 'ts-dedent';

import './kemet-carousel.js';
import './kemet-carousel-link.js';
import './kemet-carousel-prev.js';
import './kemet-carousel-next.js';
import './kemet-carousel-slide.js';

export default {
  title: 'Kemet Carousel',
  component: 'kemet-carousel',
};

const Template = ({
  width = '100%',
  height = '50vh',
  slideSpeed = '0.3s',
  fadeSpeed = '1s',
  pagination = 'bottom',
  slideshow = 0,
  transition = 'horizontal',
}) => html`
  <style>
    kemet-carousel {
      --kemet-carousel-width: ${width};
      --kemet-carousel-height: ${height};
    }

    kemet-carousel-slide {
      --kemet-carousel-slide-speed: ${slideSpeed};
      --kemet-carousel-slide-fade-speed: ${fadeSpeed};
    }
  </style>
  <kemet-carousel pagination="${pagination}" slideshow="${slideshow}">
    <div slot="slides">
      <kemet-carousel-slide transition="${transition}">Slide One</kemet-carousel-slide>
      <kemet-carousel-slide transition="${transition}">Slide Two</kemet-carousel-slide>
      <kemet-carousel-slide transition="${transition}">Slide Three</kemet-carousel-slide>
    </div>
    <div slot="pagination">
      <kemet-carousel-prev>Prev</kemet-carousel-prev>
      <kemet-carousel-link slide="0">1</kemet-carousel-link>
      <kemet-carousel-link slide="1">2</kemet-carousel-link>
      <kemet-carousel-link slide="2">3</kemet-carousel-link>
      <kemet-carousel-next>Next</kemet-carousel-next>
    </div>
  </kemet-carousel>
`;

export const Carousel = Template.bind({});
Carousel.parameters = {
  docs: {
    source: {
      code: dedent`
        <kemet-carousel>
          <div slot="slides">
            <kemet-carousel-slide>Slide One</kemet-carousel-slide>
            <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
            <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
          </div>
          <div slot="pagination">
            <kemet-carousel-prev>Prev</kemet-carousel-prev>
            <kemet-carousel-link slide="0">1</kemet-carousel-link>
            <kemet-carousel-link slide="1">2</kemet-carousel-link>
            <kemet-carousel-link slide="2">3</kemet-carousel-link>
            <kemet-carousel-next>Next</kemet-carousel-next>
          </div>
        </kemet-carousel>
      `,
    },
  },
};

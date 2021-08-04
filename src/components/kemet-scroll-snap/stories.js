import { html } from 'lit-html';

import './kemet-scroll-snap.js';
import './kemet-scroll-snap-slide.js';
import './kemet-scroll-snap-paginator.js';

export default {
  title: 'Kemet Scroll Snap',
  component: 'kemet-scroll-snap',
};

const Template = ({
  showPagination = true,
  numberOfSlides = 5,
  gap = '0',
  axis = 'horizontal',
  pagination = 'bottom',
  paginationIcon = '•',
  paginationUseNumbers = false,
  paginationUseLabels = false,
}) => html`
  <style>
    img {
      max-width: 100%;
    }

    kemet-scroll-snap {
      --kemet-scroll-snap-gap: ${gap};
    }

    kemet-scroll-snap-paginator {
      font-size: 2rem;
    }
  </style>
  <kemet-scroll-snap axis="${axis}" pagination="${pagination}">
    <div slot="slides">
      ${makeSlides(numberOfSlides)}
    </div>
    <div slot="pagination">
      ${makePagination(showPagination, paginationIcon, paginationUseNumbers, paginationUseLabels)}
    </div>
  </kemet-scroll-snap>
`;

const makeSlides = (numberOfSlides) => {
  const slides = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberOfSlides; i++) {
    slides.push(html`
      <kemet-scroll-snap-slide label="Heading ${i + 1}">
        <h3>Heading ${i + 1}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img src="https://via.placeholder.com/1920x1080" alt="A placeholder" />
      </kemet-scroll-snap-slide>
    `);
  }

  return slides;
};

const makePagination = (display, icon, useNumbers, useLabels) => {
  if (display) {
    return html`
      <kemet-scroll-snap-paginator
        icon="${icon}"
        ?use-number-pages=${useNumbers}
        ?use-label-pages=${useLabels}>
      </kemet-scroll-snap-paginator>
    `;
  }

  return null;
};

export const ScrollSnap = Template.bind({});
ScrollSnap.decorators = [story => html`<div style="padding:2rem;">${story()}</div>`];

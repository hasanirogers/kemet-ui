import { html } from 'lit';

const Template = ({
  showPagination = true,
  numberOfSlides = 5,
  gap = '1.5rem',
  axis = 'horizontal',
  pagination = 'bottom',
  paginationIcon = 'circle-fill',
  paginationSize = 16,
  paginationUseNumbers = false,
  paginationUseLabels = false,
  paginationCenter = true,
  paginationGap = '0.5rem',
  slideWidth = '44vw',
  horizontalMaxWidth = '90%',
}) => html`
  <style>
    img {
      max-width: 100%;
    }

    kemet-scroll-snap {
      --kemet-scroll-snap-gap: ${gap};
      --kemet-scroll-snap-horizontal-max-width: ${horizontalMaxWidth};
    }

    kemet-scroll-snap-slide {
      --kemet-scroll-snap-slide-width: ${slideWidth};
    }

    kemet-scroll-snap-paginator {
      --kemet-scroll-snap-paginator-gap: ${paginationGap};
    }
  </style>
  <kemet-scroll-snap axis="${axis}" pagination="${pagination}">
    <div slot="slides">
      ${makeSlides(numberOfSlides)}
    </div>
    ${makePagination(showPagination, paginationIcon, paginationSize, paginationUseNumbers, paginationUseLabels, paginationCenter)}
  </kemet-scroll-snap>
`;

const makeSlides = (numberOfSlides) => {
  const slides = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberOfSlides; i++) {
    slides.push(html`
      <kemet-scroll-snap-slide label="Heading ${i + 1}" kemet-margin-top="tiny:normal">
        <h3 kemet-type-size="plus-6">Heading ${i + 1}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img src="https://via.placeholder.com/1920x1080" alt="A placeholder" />
      </kemet-scroll-snap-slide>
    `);
  }

  return slides;
};

const makePagination = (display, icon, size, useNumbers, useLabels, center) => {
  if (display) {
    return html`
      <kemet-scroll-snap-paginator
        slot="pagination"
        icon="${icon}"
        size="${size}"
        ?use-number-pages=${useNumbers}
        ?use-label-pages=${useLabels}
        ?center=${center}>
      </kemet-scroll-snap-paginator>
    `;
  }

  return null;
};

export const ScrollSnap = Template.bind({});
ScrollSnap.argTypes = {
  showPagination: {
    control: { type: 'boolean' },
  },
  numberOfSlides: {
    control: { type: 'number' },
  },
  gap: {
    control: { type: 'text' },
  },
  axis: {
    control: { type: 'select' },
    options: ['horizontal', 'vertical'],
  },
  pagination: {
    control: { type: 'select' },
    options: ['top', 'right', 'bottom', 'left'],
  },
  paginationIcon: {
    control: { type: 'text' },
  },
  paginationSize: {
    control: { type: 'number' },
  },
  paginationUseNumbers: {
    control: { type: 'boolean' },
  },
  paginationUseLabels: {
    control: { type: 'boolean' },
  },
  paginationCenter: {
    control: { type: 'boolean' },
  },
  paginationGap: {
    control: { type: 'text' },
  },
  slideWidth: {
    control: { type: 'text' },
  },
  horizontalMaxWidth: {
    control: { type: 'text' },
  },
};
ScrollSnap.args = {
  showPagination: true,
  numberOfSlides: 5,
  gap: '1.5rem',
  axis: 'horizontal',
  pagination: 'bottom',
  paginationIcon: 'circle-fill',
  paginationSize: 16,
  paginationUseNumbers: false,
  paginationUseLabels: false,
  paginationCenter: true,
  paginationGap: '0.5rem',
  slideWidth: '44vw',
  horizontalMaxWidth: '90%',
};

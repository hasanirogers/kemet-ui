import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-scroll-snap';
import '../kemet-scroll-snap-slide';
import '../kemet-scroll-snap-paginator';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';
import '../../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Elements / Scroll Snap',
  component: 'kemet-scroll-snap',
  args: {
    numberOfSlides: 5,
  },
  argTypes: {
    axis: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    pagination: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  const makeSlides = (numberOfSlides) => {
    const slides = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfSlides; i++) {
      slides.push(html`
        <kemet-scroll-snap-slide label="Heading ${i + 1}" kemet-margin-top="2xl" style=${ifDefined(args.slideWidth ? `--kemet-scroll-snap-slide-width: ${args.slideWidth};` : undefined)}>
          <h3 kemet-type-size="3xl">Heading ${i + 1}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="https://placehold.co/1920x1080" alt="A placeholder" style="max-width:100%" />
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
          icon="${ifDefined(icon)}"
          size="${ifDefined(size)}"
          ?use-number-pages=${useNumbers}
          ?use-label-pages=${useLabels}
          ?center=${center}>
        </kemet-scroll-snap-paginator>
      `;
    }

    return null;
  };

  return html`
    <kemet-scroll-snap axis="${ifDefined(args.axis)}" pagination="${ifDefined(args.pagination)}">
      <div slot="slides">
        ${makeSlides(args.numberOfSlides)}
      </div>
      ${makePagination(args.showPagination, args.paginationIcon, args.paginationSize, args.paginationUseNumbers, args.paginationUseLabels, args.paginationCenter)}
    </kemet-scroll-snap>
  `;
}


// export const Standard: Story = {
//   render: args => Template(args),
//   args: {
//     showPagination: true,
//     numberOfSlides: 5,
//     gap: '1.5rem',
//     axis: 'horizontal',
//     pagination: 'bottom',
//     paginationIcon: 'circle-fill',
//     paginationSize: 16,
//     paginationUseNumbers: false,
//     paginationUseLabels: false,
//     paginationCenter: true,
//     paginationGap: '0.5rem',
//     slideWidth: '44vw',
//     horizontalMaxWidth: '90%',
//   },
// };

export const Standard: Story = {
  render: args => Template(args),
};

export const Vertical: Story = {
  render: args => Template(args),
  args: {
    axis: 'vertical',
  },
};

export const Pagination: Story = {
  render: args => Template(args),
  args: {
    showPagination: true,
  },
};

export const PaginationLabels: Story = {
  render: args => Template(args),
  args: {
    showPagination: true,
    paginationUseLabels: true,
  },
};

export const PaginationNumbers: Story = {
  render: args => Template(args),
  args: {
    showPagination: true,
    paginationUseNumbers: true,
  },
};

export const MultipleSlides: Story = {
  render: args => Template(args),
  args: {
    showPagination: true,
    slideWidth: '33vw',
  },
}

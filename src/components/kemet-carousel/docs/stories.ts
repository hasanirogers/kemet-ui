import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-carousel';
import '../kemet-carousel-link';
import '../kemet-carousel-first';
import '../kemet-carousel-last';
import '../kemet-carousel-next';
import '../kemet-carousel-prev';
import '../kemet-carousel-slide';
import '../kemet-carousel-current';
import '../kemet-carousel-total';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

import '../../kemet-badge/kemet-badge';
import '../../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Components / Carousel',
  component: 'kemet-carousel',
  args: {
    numOfSlides: 5,
    toolbarType: 'none',
    options: {
      perView: 1,
      perMove: 1,
      gap: 12,
      slideshow: 0,
      rewind: true,
      center: false,
    },
    breakpoints: {
      768: {
        perView: 2,
        gap: 24,
        rewind: false,
      },
      1280: {
        perView: 2.5,
        center: true,
      },
    },
  },
  argTypes: {
    toolbarType: {
      control: { type: 'radio' },
      options: ['none', 'pagination', 'description'],
    },
    options: {
      control: { type: 'object' },
    },
    breakpoints: {
      control: { type: 'object' },
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  const makeSlides = () => {
    const slides = [];

    for (let i = 0; i < args.numOfSlides; i += 1) {
      const slideNumber = i + 1;

      slides.push(html`
        <kemet-carousel-slide slot="slides">
          <figure kemet-border="all-1 solid gray-50" kemet-margin="none" kemet-padding="2xl" kemet-elevation="layer-4">
            <h3 kemet-margin="none">Slide ${slideNumber}</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide ${slideNumber}. </span>
        </kemet-carousel-slide>
      `);
    }

    return slides;
  };

  const makePrevArrow = () => {
    if (args.arrows) {
      return html`
        <kemet-carousel-prev slot="prev">
          <kemet-icon icon="chevron-left" size="72"></kemet-icon>
        </kemet-carousel-prev>
      `;
    }

    return null;
  };

  const makeNextArrow = () => {
    if (args.arrows) {
      return html`
        <kemet-carousel-next slot="next">
          <kemet-icon icon="chevron-right" size="72"></kemet-icon>
        </kemet-carousel-next>
      `;
    }

    return null;
  };

  const makePagination = () => {
    if (args.toolbarType === 'pagination') {
      const pages = [];

      for (let i = 0; i < args.numOfSlides; i += 1) {
        pages.push(html`
          <kemet-carousel-link slide="${i}" slot="toolbar">${i + 1}</kemet-carousel-link>
        `);
      }

      return html`
        <kemet-carousel-first slot="toolbar">
          <kemet-icon icon="chevron-double-left"></kemet-icon>
        </kemet-carousel-first>
        <kemet-carousel-prev slot="toolbar">
          <kemet-icon icon="chevron-left"></kemet-icon>
        </kemet-carousel-prev>
        ${pages}
        <kemet-carousel-next slot="toolbar">
          <kemet-icon icon="chevron-right"></kemet-icon>
        </kemet-carousel-next>
        <kemet-carousel-last slot="toolbar">
          <kemet-icon icon="chevron-double-right"></kemet-icon>
        </kemet-carousel-last>
      `;
    }

    return null;
  };

  const makeDescription = () => {
    if (args.toolbarType === 'description') {
      return html`
        <div slot="toolbar" kemet-layout="flexrow" kemet-align="middle" kemet-gutters>
          <div>
            <kemet-carousel-current></kemet-carousel-current>
            &nbsp;of&nbsp;
            <kemet-carousel-total></kemet-carousel-total>
            :&nbsp;
            <kemet-carousel-information></kemet-carousel-information>
          </div>
          <kemet-carousel-prev kemet-breakpoint="tiny:content">
            <kemet-badge circle kemet-padding="sm"><kemet-icon icon="chevron-left"></kemet-icon></kemet-badge>
          </kemet-carousel-prev>
          <kemet-carousel-next kemet-breakpoint="tiny:content">
            <kemet-badge circle kemet-padding="sm"><kemet-icon icon="chevron-right"></kemet-icon></kemet-badge>
          </kemet-carousel-next>
        </div>
      `;
    }

    return null;
  };

  return html`
    <kemet-carousel index="${args.index}" ?inner=${args.inner} .options=${args.options} .breakpoints=${args.breakpoints}>
      ${makePrevArrow()}
      ${makeSlides()}
      ${makeNextArrow()}
      ${makePagination()}
      ${makeDescription()}
    </kemet-carousel>
  `;
};

export const Standard: Story = {
  render: (args: any) => Template(args),
};

export const DescriptionToolbar: Story = {
  render: (args: any) => Template(args),
  args: {
    toolbarType: 'description',
  }
};

export const PaginationToolbar: Story = {
  render: (args: any) => Template(args),
  args: {
    toolbarType: 'pagination',
  }
};

export const InnerToolbar: Story = {
  render: (args: any) => Template(args),
  args: {
    inner: true,
    toolbarType: 'pagination',
  }
};

export const Arrows: Story = {
  render: (args: any) => Template(args),
  args: {
    arrows: true,
  }
};

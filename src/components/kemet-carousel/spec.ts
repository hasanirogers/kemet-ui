import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import { getByText, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import './kemet-carousel';
import './kemet-carousel-slide';
import './kemet-carousel-current';
import './kemet-carousel-total';
import './kemet-carousel-next';
import './kemet-carousel-prev';
import './kemet-carousel-first';
import './kemet-carousel-last';
import './kemet-carousel-link';
import '../kemet-icon/kemet-icon';

describe('Carousel', () => {
  const templates = {
    default: html`
      <kemet-carousel>
        <kemet-carousel-slide slot="slides">Slide 1</kemet-carousel-slide>
        <kemet-carousel-slide slot="slides">Slide 2</kemet-carousel-slide>
        <kemet-carousel-slide slot="slides">Slide 3</kemet-carousel-slide>
      </kemet-carousel>
    `,
    descriptionBar: html`
      <kemet-carousel>
        <kemet-carousel-slide slot="slides">Slide 1</kemet-carousel-slide>
        <kemet-carousel-slide slot="slides">Slide 2</kemet-carousel-slide>
        <kemet-carousel-slide slot="slides">Slide 3</kemet-carousel-slide>
        <div slot="toolbar">
          <div>
            <kemet-carousel-current></kemet-carousel-current>
            &nbsp;of&nbsp;
            <kemet-carousel-total></kemet-carousel-total>
            :&nbsp;
            <kemet-carousel-information>
              <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 1.</span>
            </kemet-carousel-information>
          </div>
          <kemet-carousel-prev>
            <kemet-badge circle>
              <kemet-icon icon="chevron-left"></kemet-icon>
            </kemet-badge>
          </kemet-carousel-prev>
          <kemet-carousel-next>
            <kemet-badge circle>
              <kemet-icon icon="chevron-right"></kemet-icon>
            </kemet-badge>
          </kemet-carousel-next>
        </div>
      </kemet-carousel>
    `,
    paginationBar: html`
      <kemet-carousel>
        <kemet-carousel-slide slot="slides" selected>
          <figure>
            <h3>Slide 1</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 1. </span>
        </kemet-carousel-slide>

        <kemet-carousel-slide slot="slides" selected>
          <figure>
            <h3>Slide 2</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 2. </span>
        </kemet-carousel-slide>

        <kemet-carousel-slide slot="slides" selected>
          <figure>
            <h3>Slide 3</h3>
            <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" />
            <figcaption>An image in a carousel.</figcaption>
          </figure>
          <span slot="information"><a href="https://google.com" target="_blank">Title</a>. An image of slide 3.</span>
        </kemet-carousel-slide>

        <kemet-carousel-first slot="toolbar">
          <kemet-icon icon="chevron-double-left"></kemet-icon>
        </kemet-carousel-first>
        <kemet-carousel-prev slot="toolbar">
          <kemet-icon icon="chevron-left"></kemet-icon>
        </kemet-carousel-prev>

        <kemet-carousel-link slot="toolbar" slide="0">1</kemet-carousel-link>
        <kemet-carousel-link slot="toolbar" slide="1">2</kemet-carousel-link>
        <kemet-carousel-link slot="toolbar" slide="2">3</kemet-carousel-link>

        <kemet-carousel-next slot="toolbar">
          <kemet-icon icon="chevron-right"></kemet-icon>
        </kemet-carousel-next>
        <kemet-carousel-last slot="toolbar">
          <kemet-icon icon="chevron-double-right"></kemet-icon>
        </kemet-carousel-last>
      </kemet-carousel>
    `,
  };

  it.skip('displays a carousel', async () => {
    render(templates.descriptionBar, document.body);
    const carousel = getByText(document.body, 'Slide 1').closest('kemet-carousel');
    expect(carousel).toBeTruthy();
  });

  describe.skip('Navigation', () => {
    it('handles navigation to the next slide', async () => {
      render(templates.paginationBar, document.body);
      const carousel = getByText(document.body, 'Slide 1').closest('kemet-carousel');

      await waitFor(async () => {
          const next = carousel.querySelector('kemet-carousel-next').shadowRoot.querySelector('button');
          await userEvent.click(next);
          next.focus();
          await userEvent.keyboard('[Enter]');
          expect(carousel.index).toBe(2);
      });
    });

    it('handles navigation to the previous slide', async () => {
      render(templates.paginationBar, document.body);
      const carousel = getByText(document.body, 'Slide 1').closest('kemet-carousel');
      carousel.index = 2;

      await waitFor(async () => {
          const prev = carousel.querySelector('kemet-carousel-prev').shadowRoot.querySelector('button');
          await userEvent.click(prev);
          prev.focus();
          await userEvent.keyboard('[Enter]');
          expect(carousel.index).toBe(0);
      });
    });

    it('handles navigation to the last slide', async () => {
      render(templates.paginationBar, document.body);
      const carousel = getByText(document.body, 'Slide 1').closest('kemet-carousel');

      await waitFor(async () => {
          const last = carousel.querySelector('kemet-carousel-last').shadowRoot.querySelector('button');
          await userEvent.click(last);
          last.focus();
          await userEvent.keyboard('[Enter]');
          expect(carousel.index).toBe(2);
      });
    });

    it('handles navigation to the first slide', async () => {
      render(templates.paginationBar, document.body);
      const carousel = getByText(document.body, 'Slide 1').closest('kemet-carousel');
      carousel.index = 2;

      await waitFor(async () => {
          const first = carousel.querySelector('kemet-carousel-first').shadowRoot.querySelector('button');
          await userEvent.click(first);
          first.focus();
          await userEvent.keyboard('[Enter]');
          expect(carousel.index).toBe(0);
      });
    });

    it('handles navigation a specific slide', async () => {
      render(templates.paginationBar, document.body);
      const carousel = getByText(document.body, 'Slide 1').closest('kemet-carousel');
      carousel.index = 2;

      await waitFor(async () => {
          const links = carousel.querySelectorAll('kemet-carousel-link');
          const second = links[1].shadowRoot.querySelector('button');
          await userEvent.click(second);
          second.focus();
          await userEvent.keyboard('[Enter]');
          expect(carousel.index).toBe(1);
      });
    });
  });
});

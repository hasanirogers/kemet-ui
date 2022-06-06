import { html } from 'lit';

const Template = () => html`
  <kemet-carousel pagination="bottom" index="1">
    <div slot="slides">
      <kemet-carousel-slide kemet-border="all-1 solid gray4">
        <figure>
          <h3>Slide 1</h3>
          <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
          <figcaption>An image in a carousel.</figcaption>
        </figure>
      </kemet-carousel-slide>

      <kemet-carousel-slide kemet-border="all-1 solid gray4">
        <figure>
          <h3>Slide 2</h3>
          <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
          <figcaption>An image in a carousel.</figcaption>
        </figure>
      </kemet-carousel-slide>

      <kemet-carousel-slide kemet-border="all-1 solid gray4">
        <figure>
          <h3>Slide 3</h3>
          <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
          <figcaption>An image in a carousel.</figcaption>
        </figure>
      </kemet-carousel-slide>

      <kemet-carousel-slide kemet-border="all-1 solid gray4">
        <figure>
          <h3>Slide 4</h3>
          <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
          <figcaption>An image in a carousel.</figcaption>
        </figure>
      </kemet-carousel-slide>

      <kemet-carousel-slide kemet-border="all-1 solid gray4">
        <figure>
          <h3>Slide 5</h3>
          <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
          <figcaption>An image in a carousel.</figcaption>
        </figure>
      </kemet-carousel-slide>
    </div>

    <div slot="pagination">
      <kemet-carousel-prev>
        <kemet-icon icon="chevron-left"></kemet-icon>
      </kemet-carousel-prev>
      <kemet-carousel-link slide="0">1</kemet-carousel-link>
      <kemet-carousel-link slide="1">2</kemet-carousel-link>
      <kemet-carousel-link slide="2">3</kemet-carousel-link>
      <kemet-carousel-link slide="3">4</kemet-carousel-link>
      <kemet-carousel-link slide="4">5</kemet-carousel-link>
      <kemet-carousel-next>
        <kemet-icon icon="chevron-right"></kemet-icon>
      </kemet-carousel-next>
    </div>
  </kemet-carousel>
`;

export const Standard = Template.bind({});

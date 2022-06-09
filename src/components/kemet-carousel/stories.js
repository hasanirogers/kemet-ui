import { html } from 'lit';

const Template = () => html`
  <kemet-carousel pagination="bottom" index="0" inner>
    <kemet-carousel-prev slot="prev">
      <kemet-icon icon="chevron-left" size="72"></kemet-icon>
    </kemet-carousel-prev>
    <kemet-carousel-slide slot="slides">
      <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal">
        <h3 kemet-margin="tiny:none">Slide 1</h3>
        <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
        <figcaption>An image in a carousel.</figcaption>
      </figure>
    </kemet-carousel-slide>
    <kemet-carousel-slide slot="slides">
      <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal">
        <h3 kemet-margin="tiny:none">Slide 2</h3>
        <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
        <figcaption>An image in a carousel.</figcaption>
      </figure>
    </kemet-carousel-slide>
    <kemet-carousel-slide slot="slides">
      <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal">
        <h3 kemet-margin="tiny:none">Slide 3</h3>
        <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
        <figcaption>An image in a carousel.</figcaption>
      </figure>
    </kemet-carousel-slide>
    <kemet-carousel-slide slot="slides">
      <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal">
        <h3 kemet-margin="tiny:none">Slide 4</h3>
        <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
        <figcaption>An image in a carousel.</figcaption>
      </figure>
    </kemet-carousel-slide>
    <kemet-carousel-slide slot="slides">
      <figure kemet-border="all-1 solid gray1" kemet-margin="tiny:none" kemet-padding="tiny:normal">
        <h3 kemet-margin="tiny:none">Slide 5</h3>
        <img src="https://via.placeholder.com/1920x1080" alt="a placeholder" style="max-width:100%" />
        <figcaption>An image in a carousel.</figcaption>
      </figure>
    </kemet-carousel-slide>
    <kemet-carousel-next slot="next">
      <kemet-icon icon="chevron-right" size="72"></kemet-icon>
    </kemet-carousel-next>


    <kemet-carousel-first slot="pagination">
      <kemet-icon icon="chevron-double-left"></kemet-icon>
    </kemet-carousel-first>
    <kemet-carousel-prev slot="pagination">
      <kemet-icon icon="chevron-left"></kemet-icon>
    </kemet-carousel-prev>
    <kemet-carousel-link slide="0" slot="pagination">1</kemet-carousel-link>
    <kemet-carousel-link slide="1" slot="pagination">2</kemet-carousel-link>
    <kemet-carousel-link slide="2" slot="pagination">3</kemet-carousel-link>
    <kemet-carousel-link slide="3" slot="pagination">4</kemet-carousel-link>
    <kemet-carousel-link slide="4" slot="pagination">5</kemet-carousel-link>
    <kemet-carousel-next slot="pagination">
      <kemet-icon icon="chevron-right"></kemet-icon>
    </kemet-carousel-next>
    <kemet-carousel-last slot="pagination">
      <kemet-icon icon="chevron-double-right"></kemet-icon>
    </kemet-carousel-last>
  </kemet-carousel>
`;

export const Standard = Template.bind({});

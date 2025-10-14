import { css } from 'lit';

export const stylesScrollSnap = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :host {
    --kemet-scroll-snap-horizontal-max-width: 1024px;
    --kemet-scroll-snap-vertical-height: 100vh;
    --kemet-scroll-snap-slides-vertical-padding: 0 2rem;

    display: flex;
    flex-direction: column;
    width: 100%;
  }

  :host([axis='horizontal']) {
    margin: auto;
    max-width: var(--kemet-scroll-snap-horizontal-max-width);
  }

  :host([pagination="left"]),
  :host([pagination="right"]) {
    flex-direction: row;
  }

  :host([pagination="none"]) ::slotted([slot="pagination"]) {
    display: none;
  }

  :host([pagination="top"]) ::slotted([slot="pagination"]),
  :host([pagination="left"]) ::slotted([slot="pagination"]) {
    order: -1;
  }


  ::slotted([slot="slides"]) {
    display: flex;
    gap: var(--kemet-scroll-snap-gap, 1.5rem);
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
  }

  /* vertical */
  :host([axis="vertical"]) {
    height: var(--kemet-scroll-snap-vertical-height);
  }

  :host([axis="vertical"]) ::slotted([slot="slides"]) {
    flex-direction: column;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    padding: var(--kemet-scroll-snap-slides-vertical-padding);
  }
`;

export const stylesScrollSnapPaginator = css`
  :host {
    --kemet-scroll-snap-paginator-padding: 1rem 0;
    --kemet-scroll-snap-paginator-gap: 0.5rem;
    --kemet-scroll-snap-paginator-link-color: rgb(var(--kemet-color-primary));

    margin: auto;
    padding: var(--kemet-scroll-snap-paginator-padding);
  }

  nav {
    display: flex;
    gap: var(--kemet-scroll-snap-paginator-gap);
  }

  :host([center]) nav {
    justify-content: center;
  }

  .link {
    cursor: pointer;
    color: var(--kemet-scroll-snap-paginator-link-color);
  }
`;

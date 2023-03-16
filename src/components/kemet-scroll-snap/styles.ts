import { css } from 'lit';

export const stylesScrollSnap = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  :host([axis='horizontal']) {
    margin: auto;
    max-width: var(--kemet-scroll-snap-horizontal-max-width, 1024px);
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
    height: var(--kemet-scroll-snap-vertical-height, 100vh);
  }

  :host([axis="vertical"]) ::slotted([slot="slides"]) {
    flex-direction: column;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    padding: var(--kemet-scroll-snap-slides-vertical-padding, 0 2rem);
  }
`;

export const stylesScrollSnapPaginator = css`
  :host {
    margin: auto;
    padding: var(--kemet-scroll-snap-paginator-padding, 1rem 0);
  }

  nav {
    display: flex;
    gap: var(--kemet-scroll-snap-paginator-gap, 0.5rem);
  }

  :host([center]) nav {
    justify-content: center;
  }

  .link {
    cursor: pointer;
    color: var(--kemet-scroll-snap-paginator-link-color, var(--kemet-color-primary));
  }
`;

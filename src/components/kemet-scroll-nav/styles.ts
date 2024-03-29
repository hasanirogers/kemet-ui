import { css } from 'lit';

export const stylesScrollNav = css`
  :host {
    --kemet-scroll-nav-padding: 1rem 2rem;
    --kemet-scroll-nav-background: rgb(var(--kemet-color-gray-50));
    --kemet-scroll-nav-transition: 300ms;
    --kemet-scroll-nav-resize-height: 400px;
    --kemet-scroll-nav-resize-height-transformed: 100px;

    display: block;
    box-sizing: border-box;
    padding: var(--kemet-scroll-nav-padding);
    background-color: var(--kemet-scroll-nav-background);
    transition: all var(--kemet-scroll-nav-transition, 300ms) ease;
  }

  :host([transform]),
  :host([effect="resize"]) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  :host([effect="resize"]) {
    height: var(--kemet-scroll-nav-resize-height);
  }

  :host([transform][effect="resize"]) {
    height: var(--kemet-scroll-nav-resize-height-transformed);
  }
`;

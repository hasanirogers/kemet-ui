import { css } from 'lit';

export const stylesRotator = css`
  :host {
    display: flex;
  }

  .rotator__slide {
    pointer-events: none;
  }

  .rotator__slide--active {
    pointer-events: auto;
  }

  /* fade effect */
  :host([effect="fade"]) .rotator {
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  :host([effect="fade"]) .rotator__slide {
    width: 100%;
    flex: none;
    opacity: 0;
    box-sizing: border-box;
    transition: all var(--kemet-rotator-transition-speed, 500ms) ease;
  }

  :host([effect="fade"]) .rotator__slide:not(:first-child) {
    margin-left: -100%; /* this is the bulk of the overlay trick */
  }

  :host([effect="fade"]) .rotator__slide--active {
    opacity: 1;
  }

  /* flip effect */
  :host([effect="flip"]) .rotator {
    display: flex;
    position: relative;

    perspective: 500;
  }

  :host([effect="flip"]) .rotator__slide {
    display: block;
    width: auto;
    position: absolute;
    top: -20px;
    left: 0;

    opacity: 0;

    transform: rotateX(90deg);
    transform-origin: 0% 0%;
    transition: all var(--kemet-rotator-transition-speed, 500ms) ease;
  }

  :host([effect="flip"]) .rotator__slide--active {
    top: 0;
    opacity: 1;

    transform: rotateX(0deg);
  }

  :host([effect="flip"]) .rotator__slide--prev {
    top: 40px;;
    transform: rotateX(-90deg);
  }
`;

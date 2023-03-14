import { css } from 'lit';

export const stylesBase = css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :host {
    display: inline-block;
    width: var(--kemet-flipcard-width, 100%);
    height: var(--kemet-flipcard-height, auto);
    aspect-ratio: var(--kemet-flipcard-ratio, 16/9);
    perspective: 1000px;
  }

  section {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .front,
  .back {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    /* overflow: hidden; */
    border-radius: var(--kemet-flipcard-border-radius, 0);
    border: var(--kemet-flipcard-border, 2px solid var(--kemet-color-primary));
  }

  :host([rounded]) .front,
  :host([rounded]) .back {
    border-radius: var(--kemet-border-radius);
  }

  .front {
    color: var(--kemet-flipcard-front-color, #202020);
    background-color: var(--kemet-flipcard-front-background-color, #fafafa);
  }

  :host([flipped]) .front {
    z-index: -1;
  }

  .back {
    color: var(--kemet-flipcard-back-color, #202020);
    background-color: var(--kemet-flipcard-back-background-color, #fafafa)
  }

  :host([axis="horizontal"]) .back {
    transform: rotateY(180deg);
  }

  :host([flipped][axis="horizontal"]) section {
    transform: rotateY(180deg);
  }

  :host([axis="vertical"]) .back {
    transform: rotateX(180deg);
  }

  :host([flipped][axis="vertical"]) section {
    transform: rotateX(180deg);
  }

  :host([flip-on-hover]) section {
    cursor: pointer;
  }

  ::slotted([slot="front"]),
  ::slotted([slot="back"]) {
    display: inline-block;
    margin: auto;
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

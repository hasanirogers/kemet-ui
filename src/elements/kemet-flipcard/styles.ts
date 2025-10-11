import { css } from 'lit';

export const stylesBase = css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :host {
    --kemet-flipcard-width: 100%;
    --kemet-flipcard-height: auto;
    --kemet-flipcard-ratio: 16/9;
    --kemet-flipcard-border-radius: 0;
    --kemet-flipcard-border: 2px solid rgb(var(--kemet-color-primary));
    --kemet-flipcard-front-color: rgb(var(--kemet-color-gray-950));
    --kemet-flipcard-front-background-color: rgb(var(--kemet-color-gray-50));
    --kemet-flipcard-back-color: rgb(var(--kemet-color-gray-950));
    --kemet-flipcard-back-background-color: rgb(var(--kemet-color-gray-50));

    display: inline-block;
    width: var(--kemet-flipcard-width);
    height: var(--kemet-flipcard-height);
    aspect-ratio: var(--kemet-flipcard-ratio);
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
    border-radius: var(--kemet-flipcard-border-radius);
    border: var(--kemet-flipcard-border);
  }

  :host([rounded]) .front,
  :host([rounded]) .back {
    border-radius: var(--kemet-border-radius-xl);
  }

  .front {
    color: var(--kemet-flipcard-front-color);
    background-color: var(--kemet-flipcard-front-background-color);
  }

  :host([flipped]) .front {
    z-index: -1;
  }

  .back {
    color: var(--kemet-flipcard-back-color);
    background-color: var(--kemet-flipcard-back-background-color)
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

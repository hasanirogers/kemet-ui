import { css } from 'lit';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-modal-radius: var(--kemet-border-radius-xl);
    --kemet-modal-transition-speed: 0.3s;
    --kemet-modal-dialog-min-width: 0;
    --kemet-modal-dialog-max-width: none;
    --kemet-modal-dialog-mobile-width: calc(100% - 2rem);
    --kemet-modal-dialog-mobile-margin: 0 auto;
    --kemet-modal-dialog-mobile-padding: 1rem;
    --kemet-modal-dialog-background-color: rgb(var(--kemet-color-white));
    --kemet-modal-overlay-background-color: rgb(var(--kemet-color-black) / 20%);

    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    backface-visibility: hidden;
  }

  :host([opened]) {
    visibility: visible;
  }

  dialog {
    display: block;
    z-index: 3;
    margin: auto;
    min-width: var(--kemet-modal-dialog-min-width);
    max-width: var(--kemet-modal-dialog-max-width);
    border: 0;
    background: var(--kemet-modal-dialog-background-color);
  }

  dialog::backdrop {
    background: none;
  }

  :host([mobile]) dialog {
    margin: var(--kemet-modal-dialog-mobile-margin);
    width: var(--kemet-modal-dialog-mobile-width);
    padding: var(--kemet-modal-dialog-mobile-padding);
    inset-block-start: auto;
  }

  :host([rounded]) dialog {
    border-radius: var(--kemet-modal-radius);
  }

  :host([rounded][mobile]) dialog {
    border-top-left-radius: var(--kemet-modal-radius);
    border-top-right-radius: var(--kemet-modal-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }


  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    visibility: hidden;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    background: var(--kemet-modal-overlay-background-color);
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([opened]) .overlay {
    opacity: 1;
    visibility: visible;
  }
`;

export const stylesEffects = css`
  /* fadein-scaleup */
  :host([effect="fadein-scaleup"]) dialog {
    transform: scale(0.7);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="fadein-scaleup"][opened]) dialog {
    transform: scale(1);
    opacity: 1;
  }

  /* slide-right */
  :host([effect="slide-right"]) dialog {
    transform: translateX(20%);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed) cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }

  :host([effect="slide-right"][opened]) dialog {
    transform: translateX(0);
    opacity: 1;
  }

  /* slide-bottom */
  :host([effect="slide-bottom"]) dialog {
    transform: translateY(20%);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="slide-bottom"][opened]) dialog {
    transform: translateY(0);
    opacity: 1;
  }

  /* newspaper */
  :host([effect="newspaper"]) dialog {
    transform: scale(0) rotate(720deg);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="newspaper"][opened]) dialog {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  /* fall */
  :host([effect="fall"]) {
    perspective: 1300px;
  }

  :host([effect="fall"]) dialog {
    transform-style: preserve-3d;
    transform: translateZ(600px) rotateX(20deg);
    opacity: 0;
  }

  :host([effect="fall"][opened]) dialog {
    transition: all var(--kemet-modal-transition-speed) ease-in;
    transform: translateZ(0px) rotateX(0deg);
    opacity: 1;
  }

  /* side-fall */
  :host([effect="side-fall"]) {
    perspective: 1300px;
  }

  :host([effect="side-fall"]) dialog {
    transform-style: preserve-3d;
    transform: translate(30%) translateZ(600px) rotate(10deg);
    opacity: 0;
  }

  :host([effect="side-fall"][opened]) dialog {
    transition: all var(--kemet-modal-transition-speed) ease-in;
    transform: translate(0%) translateZ(0) rotate(0deg);
    opacity: 1;
  }

  /* flip-horizontal */
  :host([effect="flip-horizontal"]) {
    perspective: 1300px;
  }

  :host([effect="flip-horizontal"]) dialog {
    transform-style: preserve-3d;
    transform: rotateY(-70deg);
    transition: all var(--kemet-modal-transition-speed);
    opacity: 0;
  }

  :host([effect="flip-horizontal"][opened]) dialog {
    transform: rotateY(0deg);
    opacity: 1;
  }

  /* flip-vertical */
  :host([effect="flip-vertical"]) {
    perspective: 1300px;
  }

  :host([effect="flip-vertical"]) dialog {
    transform-style: preserve-3d;
    transform: rotateX(-70deg);
    transition: all var(--kemet-modal-transition-speed);
    opacity: 0;
  }

  :host([effect="flip-vertical"][opened]) dialog {
    transform: rotateX(0deg);
    opacity: 1;
  }

  /* sign-3d */
  :host([effect="sign-3d"]) {
    perspective: 1300px;
  }

  :host([effect="sign-3d"]) dialog {
    transform-style: preserve-3d;
    transform: rotateX(-60deg);
    transform-origin: 50% 0;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="sign-3d"][opened]) dialog {
    transform: rotateX(0deg);
    opacity: 1;
  }

  /* super-scaled */
  :host([effect="super-scaled"]) dialog {
    transform: scale(2);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="super-scaled"][opened]) dialog {
    transform: scale(1);
    opacity: 1;
  }

  /* slit */
  :host([effect="slit"]) {
    perspective: 1300px;
  }

  :host([effect="slit"]) dialog {
    transform-style: preserve-3d;
    transform: translateZ(-3000px) rotateY(90deg);
    opacity: 0;
  }

  :host([effect="slit"][opened]) dialog {
    animation: slit .7s forwards ease-out;
  }

  @keyframes slit {
    50% {
      transform: translateZ(-250px) rotateY(89deg);
      opacity: 1;
      animation-timing-function: ease-in;}
    100% {
      transform: translateZ(0) rotateY(0deg);
      opacity: 1;
    }
  }

  /* rotate-bottom */
  :host([effect="rotate-bottom"]) {
    perspective: 1300px;
  }

  :host([effect="rotate-bottom"]) dialog {
    transform-style: preserve-3d;
    transform: translateY(100%) rotateX(90deg);
    transform-origin: 0 100%;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed) ease-out;
  }

  :host([effect="rotate-bottom"][opened]) dialog {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }

  /* rotate-left */
  :host([effect="rotate-left"]) {
    perspective: 1300px;
  }

  :host([effect="rotate-left"]) dialog {
    transform-style: preserve-3d;
    transform: translateZ(100px) translateX(-30%) rotateY(90deg);
    transform-origin: 0 100%;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="rotate-left"][opened]) dialog {
    transform: translateZ(0px) translateX(0%) rotateY(0deg);
    opacity: 1;
  }
`;

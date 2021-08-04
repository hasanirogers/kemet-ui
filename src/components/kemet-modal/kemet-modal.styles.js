import { css } from 'lit';

export const stylesBase = css`
  :host {
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

  .content {
    position: relative;
    z-index: 3;
    margin: auto;
    min-width: var(--kemet-modal-min-width, 0);
    max-width: var(--kemet-modal-max-width, none);
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
    background: var(--kemet-modal-overlay-background-color, rgba(0,0,0,0.2));
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([opened]) .overlay {
    opacity: 1;
    visibility: visible;
  }
`;

export const stylesEffects = css`
  /* fadein-scaleup */
  :host([effect="fadein-scaleup"]) .content {
    transform: scale(0.7);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="fadein-scaleup"][opened]) .content {
    transform: scale(1);
    opacity: 1;
  }

  /* slide-right */
  :host([effect="slide-right"]) .content {
    transform: translateX(20%);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s) cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }

  :host([effect="slide-right"][opened]) .content {
    transform: translateX(0);
    opacity: 1;
  }

  /* slide-bottom */
  :host([effect="slide-bottom"]) .content {
    transform: translateY(20%);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="slide-bottom"][opened]) .content {
    transform: translateY(0);
    opacity: 1;
  }

  /* newspaper */
  :host([effect="newspaper"]) .content {
    transform: scale(0) rotate(720deg);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="newspaper"][opened]) .content {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  /* fall */
  :host([effect="fall"]) {
    perspective: 1300px;
  }

  :host([effect="fall"]) .content {
    transform-style: preserve-3d;
    transform: translateZ(600px) rotateX(20deg);
    opacity: 0;
  }

  :host([effect="fall"][opened]) .content {
    transition: all var(--kemet-modal-transition-speed, 0.3s) ease-in;
    transform: translateZ(0px) rotateX(0deg);
    opacity: 1;
  }

  /* side-fall */
  :host([effect="side-fall"]) {
    perspective: 1300px;
  }

  :host([effect="side-fall"]) .content {
    transform-style: preserve-3d;
    transform: translate(30%) translateZ(600px) rotate(10deg);
    opacity: 0;
  }

  :host([effect="side-fall"][opened]) .content {
    transition: all var(--kemet-modal-transition-speed, 0.3s) ease-in;
    transform: translate(0%) translateZ(0) rotate(0deg);
    opacity: 1;
  }

  /* flip-horizontal */
  :host([effect="flip-horizontal"]) {
    perspective: 1300px;
  }

  :host([effect="flip-horizontal"]) .content {
    transform-style: preserve-3d;
    transform: rotateY(-70deg);
    transition: all var(--kemet-modal-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-horizontal"][opened]) .content {
    transform: rotateY(0deg);
    opacity: 1;
  }

  /* flip-vertical */
  :host([effect="flip-vertical"]) {
    perspective: 1300px;
  }

  :host([effect="flip-vertical"]) .content {
    transform-style: preserve-3d;
    transform: rotateX(-70deg);
    transition: all var(--kemet-modal-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-vertical"][opened]) .content {
    transform: rotateX(0deg);
    opacity: 1;
  }

  /* sign-3d */
  :host([effect="sign-3d"]) {
    perspective: 1300px;
  }

  :host([effect="sign-3d"]) .content {
    transform-style: preserve-3d;
    transform: rotateX(-60deg);
    transform-origin: 50% 0;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="sign-3d"][opened]) .content {
    transform: rotateX(0deg);
    opacity: 1;
  }

  /* super-scaled */
  :host([effect="super-scaled"]) .content {
    transform: scale(2);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="super-scaled"][opened]) .content {
    transform: scale(1);
    opacity: 1;
  }

  /* slit */
  :host([effect="slit"]) {
    perspective: 1300px;
  }

  :host([effect="slit"]) .content {
    transform-style: preserve-3d;
    transform: translateZ(-3000px) rotateY(90deg);
    opacity: 0;
  }

  :host([effect="slit"][opened]) .content {
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

  :host([effect="rotate-bottom"]) .content {
    transform-style: preserve-3d;
    transform: translateY(100%) rotateX(90deg);
    transform-origin: 0 100%;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s) ease-out;
  }

  :host([effect="rotate-bottom"][opened]) .content {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }

  /* rotate-left */
  :host([effect="rotate-left"]) {
    perspective: 1300px;
  }

  :host([effect="rotate-left"]) .content {
    transform-style: preserve-3d;
    transform: translateZ(100px) translateX(-30%) rotateY(90deg);
    transform-origin: 0 100%;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="rotate-left"][opened]) .content {
    transform: translateZ(0px) translateX(0%) rotateY(0deg);
    opacity: 1;
  }
`;

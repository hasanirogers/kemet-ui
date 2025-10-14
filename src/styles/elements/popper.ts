import { css } from 'lit';

export const stylesPopper = css`
  :host {
    --kemet-popper-width: auto;
    --kemet-popper-height: auto;
    --kemet-popper-padding: 1rem;
    --kemet-popper-border-color: rgb(var(--kemet-color-foreground));
    --kemet-popper-background-color: rgb(var(--kemet-color-background));

    display: inline-block;
  }

  #content {
    visibility: hidden;
    pointer-events: none;
    width: var(--kemet-popper-width);
    height: var(--kemet-popper-height);
    position: absolute;
    z-index: -1;
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([opened]) #content {
    visibility: visible;
    z-index: 9;
    opacity: 1;
    pointer-events: auto;
  }

  ::slotted([slot="content"]) {
    padding: var(--kemet-popper-padding);
    border: 1px solid var(--kemet-popper-border-color);
    background-color: var(--kemet-popper-background-color);
  }
`;

export const stylesPopperFade = css`
  :host([effect="fade"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([effect="fade"][opened]) #content {
    opacity: 1;
  }
`;

export const stylesPopperScale = css`
  :host([effect="scale"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([effect="scale"][opened]) #content {
    opacity: 1;
  }

  :host([effect="scale"][position="top"]) #content,
  :host([effect="scale"][position="bottom"]) #content {
    transform: translateX(-50%) scale(0.7);
  }

  :host([effect="scale"][position="top"][opened]) #content,
  :host([effect="scale"][position="bottom"][opened]) #content {
    transform: translateX(-50%) scale(1);
  }

  :host([effect="scale"][position="left"]) #content,
  :host([effect="scale"][position="right"]) #content {
    transform: translateY(-50%) scale(0.7);
  }

  :host([effect="scale"][position="left"][opened]) #content,
  :host([effect="scale"][position="right"][opened]) #content {
    transform: translateY(-50%) scale(1);
  }
`;

export const stylesPopperSlide = css`
  :host([effect="slide"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s) cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }

  :host([effect="slide"][opened]) #content {
    opacity: 1;
  }

  :host([effect="slide"][position="top"]) #content {
    transform: translateX(-50%) translateY(20%);
  }

  :host([effect="slide"][position="top"][opened]) #content {
    transform: translateX(-50%) translateY(0);
  }

  :host([effect="slide"][position="bottom"]) #content {
    transform: translateX(-50%) translateY(-20%);
  }

  :host([effect="slide"][position="bottom"][opened]) #content {
    transform: translateX(-50%) translateY(0);
  }

  :host([effect="slide"][position="right"]) #content {
    transform: translateY(-50%) translateX(-20%);
  }

  :host([effect="slide"][position="right"][opened]) #content {
    transform: translateY(-50%) translateX(0);
  }

  :host([effect="slide"][position="left"]) #content {
    transform: translateY(-50%) translateX(20%);
  }

  :host([effect="slide"][position="left"][opened]) #content {
    transform: translateY(-50%) translateX(0);
  }
`;

export const stylesPopperFall = css`
  :host([effect="fall"]) {
    perspective: 1300px;
  }

  :host([effect="fall"]) #content {
    transform-style: preserve-3d;
    opacity: 0;
  }

  :host([effect="fall"][opened]) #content {
    transition: all var(--kemet-popover-transition-speed, 0.3s) ease-in;
    opacity: 1;
  }

  :host([effect="fall"][position="top"]) #content {
    transform: translateX(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="top"][opened]) #content {
    transform: translateX(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="bottom"]) #content {
    transform: translateX(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="bottom"][opened]) #content {
    transform: translateX(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="right"]) #content {
    transform: translateY(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="right"][opened]) #content {
    transform: translateY(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="left"]) #content {
    transform: translateY(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="left"][opened]) #content {
    transform: translateY(-50%) translateZ(0px) rotateX(0deg);
  }
`;

export const stylesPopperFlipHorizontal = css`
  :host([effect="flip-horizontal"]) {
    perspective: 1300px;
  }

  :host([effect="flip-horizontal"]) #content {
    transform-style: preserve-3d;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-horizontal"][opened]) #content {
    opacity: 1;
  }

  :host([effect="flip-horizontal"][position="top"]) #content {
    transform: translateX(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="top"][opened]) #content {
    transform: translateX(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="bottom"]) #content {
    transform: translateX(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="bottom"][opened]) #content {
    transform: translateX(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="right"]) #content {
    transform: translateY(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="right"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="left"]) #content {
    transform: translateY(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="left"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }
`;

export const stylesPopperFlipVertical = css`
  :host([effect="flip-vertical"]) {
    perspective: 1300px;
  }

  :host([effect="flip-vertical"]) #content {
    transform-style: preserve-3d;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-vertical"][opened]) #content {
    opacity: 1;
  }

  :host([effect="flip-vertical"][position="top"]) #content {
    transform: translateX(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="top"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="bottom"]) #content {
    transform: translateX(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="bottom"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="right"]) #content {
    transform: translateY(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="right"][opened]) #content {
    transform: translateY(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="left"]) #content {
    transform: translateY(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="left"][opened]) #content {
    transform: translateY(-50%) rotateX(0deg);
  }
`;

export const stylesPopperSign = css`
  :host([effect="sign"]) {
    perspective: 1300px;
  }

  :host([effect="sign"]) #content {
    transform-style: preserve-3d;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="sign"][opened]) #content {
    opacity: 1;
  }

  :host([effect="sign"][position="top"]) #content {
    transform-origin: 0 100%;
    transform: translateX(-50%) rotateX(90deg);
  }

  :host([effect="sign"][position="top"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="sign"][position="bottom"]) #content {
    transform-origin: 100% 0;
    transform: translateX(-50%) rotateX(90deg);
  }

  :host([effect="sign"][position="bottom"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="sign"][position="right"]) #content {
    transform-origin: 0 100%;
    transform: translateY(-50%) rotateY(90deg);
  }

  :host([effect="sign"][position="right"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }

  :host([effect="sign"][position="left"]) #content {
    transform-origin: 100% 0;
    transform: translateY(-50%) rotateY(90deg);
  }

  :host([effect="sign"][position="left"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }
`;

export const stylesPopperSuperScaled = css`
  :host([effect="super-scaled"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([effect="super-scaled"][opened]) #content {
    opacity: 1;
  }

  :host([effect="super-scaled"][position="top"]) #content,
  :host([effect="super-scaled"][position="bottom"]) #content {
    transform: translateX(-50%) scale(2);
  }

  :host([effect="super-scaled"][position="top"][opened]) #content,
  :host([effect="super-scaled"][position="bottom"][opened]) #content {
    transform: translateX(-50%) scale(1);
  }

  :host([effect="super-scaled"][position="left"]) #content,
  :host([effect="super-scaled"][position="right"]) #content {
    transform: translateY(-50%) scale(2);
  }

  :host([effect="super-scaled"][position="left"][opened]) #content,
  :host([effect="super-scaled"][position="right"][opened]) #content {
    transform: translateY(-50%) scale(1);
  }
`;

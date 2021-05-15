import { css, unsafeCSS } from 'lit';

const documentHeight = `${document.documentElement.scrollHeight}px`;

export const stylesBase = css`
  :host {
    width: 100%;
  }

  .off-canvas {
    position: relative;
    overflow: hidden;
  }

  .off-canvas__nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    visibility: hidden;
    height: 100%;
    transition: all 0.5s;
  }

  .off-canvas__nav::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    content: '';
    opacity: 1;
    transition: opacity 0.5s;
  }

  :host([opened]) .off-canvas__nav::after {
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 0.5s, width 0.1s 0.5s, height 0.1s 0.5s;
  }

  .off-canvas__pusher {
    position: relative;
    left: 0;
    z-index: 99;
    height: 100%;
    transition: transform 0.5s;
  }

  .off-canvas__pusher::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    background: rgba(0, 0, 0, 0.2);
    content: '';
    opacity: 0;
    transition: opacity 0.5s, width 0.1s 0.5s, height 0.1s 0.5s;
  }

  :host([opened]) .off-canvas__pusher::after {
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.5s;
    transform: scale(2);
  }

  .off-canvas__content {
    position: relative;
    /* overflow-y: scroll; */
    min-height: 100vh;
  }

  .off-canvas__wrapper {
    position: relative;
  }

  /* -------------------------------------- */
  /* custom properties */
  /* -------------------------------------- */

  .off-canvas__nav {
    width: var(--kemet-drawer-width, 300px);
    height: var(--kemet-drawer-height, 100%);
    color: var(--kemet-drawer-color, #fafafa);
    background: var(--kemet-drawer-background, #202020);
  }
`;

export const stylesEffects = css`
  /* slide */
  :host([effect='slide']) .off-canvas__nav {
    visibility: visible;
    transform: translate3d(-100%, 0, 0);
  }

  :host([effect='slide'][opened]) .off-canvas__nav {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }

  :host([effect='slide']) .off-canvas__nav:after {
    display: none;
  }

  :host([effect='slide'][side='right']) .off-canvas__nav {
    transform: translate3d(100vw, 0, 0);
  }

  :host([effect='slide'][side='right'][opened]) .off-canvas__nav {
    transform: translate3d(calc(100vw - var(--kemet-drawer-width, 300px)), 0, 0);
  }

  :host([effect='slide'][side='top']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  :host([effect='slide'][side='top'][opened]) .off-canvas__nav {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='slide'][side='bottom']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, ${unsafeCSS(documentHeight)}, 0);
  }

  :host([effect='slide'][side='bottom'][opened]) .off-canvas__nav {
    transform: translate3d(0, calc(100vh - var(--kemet-drawer-height, 100vh)), 0);
  }

  /* reveal */
  :host([effect='reveal'][opened]) .off-canvas__pusher {
    transform: translate3d(var(--kemet-drawer-width, 300px), 0, 0);
  }

  :host([effect='reveal']) .off-canvas__nav {
    z-index: 1;
  }

  :host([effect='reveal'][opened]) .off-canvas__nav {
    visibility: visible;
    transition: transform 0.5s;
  }

  :host([effect='reveal']) .off-canvas__nav::after {
    display: none;
  }

  :host([effect='reveal'][side='right'][opened]) .off-canvas__pusher {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='reveal'][side='right']) .off-canvas__nav {
    transform: translate3d(100vw, 0, 0);
  }

  :host([effect='reveal'][side='right'][opened]) .off-canvas__nav {
    transform: translate3d(calc(100vw - var(--kemet-drawer-width, 300px)), 0, 0);
  }

  :host([effect='reveal'][side='top']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  :host([effect='reveal'][side='top'][opened]) .off-canvas__nav {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='reveal'][side='top'][opened]) .off-canvas__pusher {
    transform: translate3d(0, var(--kemet-drawer-height, 100vh), 0);
  }

  :host([effect='reveal'][side='bottom']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, ${unsafeCSS(documentHeight)}, 0);
  }

  :host([effect='reveal'][side='bottom'][opened]) .off-canvas__nav {
    transform: translate3d(0, calc(100vh - var(--kemet-drawer-height, 100vh)), 0);
  }

  :host([effect='reveal'][side='bottom'][opened]) .off-canvas__pusher {
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  /* push */
  :host([effect='push'][opened]) .off-canvas__pusher {
    transform: translate3d(var(--kemet-drawer-width, 300px), 0, 0);
  }

  :host([effect='push']) .off-canvas__nav {
    transform: translate3d(-100%, 0, 0);
  }

  :host([effect='push'][opened]) .off-canvas__nav {
    visibility: visible;
    transition: transform 0.5s;
    transform: translate3d(0, 0, 0);
  }

  :host([effect='push']) .off-canvas__nav::after {
    display: none;
  }

  :host([effect='push'][side='right'][opened]) .off-canvas__pusher {
    transform: translate3d(calc(var(--kemet-drawer-width, 300px) * -1), 0, 0);
  }

  :host([effect='push'][side='right']) .off-canvas__nav {
    transform: translate3d(100vw, 0, 0);
  }

  :host([effect='push'][side='right'][opened]) .off-canvas__nav {
    transform: translate3d(calc(100vw - var(--kemet-drawer-width, 300px)), 0, 0);
  }

  :host([effect='push'][side='top']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  :host([effect='push'][side='top'][opened]) .off-canvas__nav {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='push'][side='top'][opened]) .off-canvas__pusher {
    transform: translate3d(0, var(--kemet-drawer-height, 100vh), 0);
  }

  :host([effect='push'][side='bottom']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, ${unsafeCSS(documentHeight)}, 0);
  }

  :host([effect='push'][side='bottom'][opened]) .off-canvas__nav {
    transform: translate3d(0, calc(100vh - var(--kemet-drawer-height, 100vh)), 0);
  }

  :host([effect='push'][side='bottom'][opened]) .off-canvas__pusher {
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  /* scale */
  :host([effect='scale']) .off-canvas__pusher {
    transform-style: preserve-3d;
  }

  :host([effect='scale'][opened]) .off-canvas__pusher {
    transform: translate3d(0, 0, 0) scale(0.95);
  }

  :host([effect='scale']) .off-canvas__nav {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  :host([effect='scale'][opened]) .off-canvas__nav {
    visibility: visible;
    transition: transform 0.5s;
    transform: translate3d(0, 0, 0);
  }

  :host([effect='scale']) .off-canvas__nav::after {
    display: none;
  }

  :host([effect='scale'][side='right']) .off-canvas__nav {
    transform: translate3d(100vw, 0, 0);
  }

  :host([effect='scale'][side='right'][opened]) .off-canvas__nav {
    transform: translate3d(calc(100vw - var(--kemet-drawer-width, 300px)), 0, 0);
  }

  :host([effect='scale'][side='top']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  :host([effect='scale'][side='top'][opened]) .off-canvas__nav {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='scale'][side='bottom']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, ${unsafeCSS(documentHeight)}, 0);
  }

  :host([effect='scale'][side='bottom'][opened]) .off-canvas__nav {
    transform: translate3d(0, calc(100vh - var(--kemet-drawer-height, 100vh)), 0);
  }
`;

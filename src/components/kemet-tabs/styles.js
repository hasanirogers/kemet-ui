import { css } from 'lit';

export const stylesKemetTabs = css`
  :host {
    --kemet-tabs-ink-size: 6px;
    --kemet-tabs-ink-radius: 6px;
    --kemet-tabs-divider-size: 1px;
    --kemet-tabs-spacer: 1rem;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  :host([placement='bottom']) {
    flex-direction: column-reverse;
  }

  :host([placement='left']) {
    flex-direction: row;
  }

  :host([placement='right']) {
    flex-direction: row-reverse;
  }

  :host([placement='left']),
  :host([placement='right']) {
    overflow: unset;
  }

  /* panels */

  [part='panels'] > div {
    display: flex;
  }

  :host([panel-effect='slide']) [part='panels'] {
    transition: transform var(--kemet-tabs-transition-speed, 0.5s) linear;
  }

  :host([panel-effect='fade']) [part='panels'] {
    transform: none !important;
  }

  :host([panel-effect='fade']) [part='panels'] > div {
    flex-flow: row nowrap;
  }

  :host([placement='left']) [part='panels'],
  :host([placement='right']) [part='panels'] {
    transform: none !important;
    position: relative;
    width: 100%;
  }

  :host([placement='top']) [part='panels'] > div {
    margin-top: var(--kemet-tabs-spacer);
  }

  :host([placement='right']) [part='panels'] > div {
    margin-right: var(--kemet-tabs-spacer);
  }

  :host([placement='bottom']) [part='panels'] > div {
    margin-bottom: var(--kemet-tabs-spacer);
  }

  :host([placement='left']) [part='panels'] > div {
    margin-left: var(--kemet-tabs-spacer);
  }

  /* tablist */

  [part='tablist'] {
    display: flex;
  }

  :host([placement='left']) [part='tablist'],
  :host([placement='right']) [part='tablist'] {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  :host([tabs-align='center']) [part='tablist'] {
    justify-content: center;
  }

  :host([tabs-align='between']) [part='tablist'] {
    justify-content: space-between;
  }

  :host([tabs-align='evenly']) [part='tablist'] {
    justify-content: space-evenly;
  }

  :host([tabs-align='around']) [part='tablist'] {
    justify-content: space-around
  }

  :host([tabs-align='start']) [part='tablist'] {
    justify-content: flex-start;
  }

  :host([tabs-align='end']) [part='tablist'] {
    justify-content: flex-end;
  }

  :host([overflow]) [part='tablist'] {
    justify-content: start;
  }

  /* divider */

  [part='divider'] {
    height: var(--kemet-tabs-divider-size);
    background-color: var(--kemet-tabs-divider-color, var(--kemet-color-gray4));
  }

  :host([placement='left']) [part='divider'],
  :host([placement='right']) [part='divider'] {
    width: var(--kemet-tabs-divider-size);
    height: auto;
  }

  /* ink */

  [part='ink'] {
    height: var(--kemet-tabs-ink-size);
    border-top-left-radius: var(--kemet-tabs-ink-radius);
    border-top-right-radius: var(--kemet-tabs-ink-radius);
    transition: all 300ms ease;
    background-color: var(--kemet-tabs-ink-color, var(--kemet-color-background));
  }

  :host([placement='right']) [part='ink'] {
    width: var(--kemet-tabs-ink-size);
    border-top-right-radius: var(--kemet-tabs-ink-radius);
    border-bottom-right-radius: var(--kemet-tabs-ink-radius);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  :host([placement='left']) [part='ink'] {
    width: var(--kemet-tabs-ink-size);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: var(--kemet-tabs-ink-radius);
    border-bottom-left-radius: var(--kemet-tabs-ink-radius);
  }

  :host([placement='bottom']) [part='ink'] {
    border-top-right-radius: 0px;
    border-bottom-right-radius: var(--kemet-tabs-ink-radius);
    border-top-left-radius: 0px;
    border-bottom-left-radius: var(--kemet-tabs-ink-radius);
  }

  /* links */

  :host([overflow]) [part='links'] {
    overflow-x: auto;
    margin: 0 2rem;
    scroll-behavior: smooth;
  }

  :host([overflow]) [part='links']::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }

  :host([placement='bottom']) [part='links'] {
    display: flex;
    flex-direction: column-reverse;
  }

  /* icon */

  [icon*='chevron'] {
    cursor: pointer;
    position: absolute;
    top: 1rem;
  }

  [icon='chevron-left'] {
    left: 0;
  }

  [icon='chevron-right'] {
    right: 0;
  }

  :host([placement='bottom']) [icon*='chevron'] {
    top: auto;
    bottom: 1rem;
  }
`;

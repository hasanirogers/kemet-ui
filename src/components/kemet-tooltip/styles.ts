import { css } from 'lit';

export const stylesTooltip = css`
  :host {
    --kemet-tooltip-deg: -45deg;
    --kemet-tooltip-size: 22px;
    --kemet-tooltip-border-size: 1px;
    --kemet-tooltip-rounded-tip: 4px;
    --kemet-tooltip-background-color: var(--kemet-color-foreground);
    --kemet-tooltip-border-color: var(--kemet-color-background);
    --kemet-tooltip-placement-offset: calc(calc(var(--kemet-tooltip-size) / 2) * -1);
  }

  #arrow {
    content: '';
    width: var(--kemet-tooltip-size);
    height: var(--kemet-tooltip-size);
    position: relative;
    display: inline-block;
    background: linear-gradient(
        var(--kemet-tooltip-deg),
        transparent calc(var(--kemet-tooltip-size) / 1.5),
        var(--kemet-tooltip-background-color) 0
      )
      no-repeat;
    background-repeat: no-repeat;
    transform-origin: center center;
    border-top-left-radius: var(--kemet-tooltip-rounded-tip);
    border-left: var(--kemet-tooltip-border-size) solid var(--kemet-tooltip-border-color);
    border-top: var(--kemet-tooltip-border-size) solid var(--kemet-tooltip-border-color);
  }

  [data-popper-placement^="top"] #arrow {
    top: var(--kemet-tooltip-placement-offset);
    transform: rotate(225deg);

  }

  [data-popper-placement^="bottom"] #arrow-container {
    top: 0px;
  }

  [data-popper-placement^="bottom"] #arrow {
    top: var(--kemet-tooltip-placement-offset);
    transform: rotate(45deg);
  }

  [data-popper-placement^="right"] #arrow {
    left: var(--kemet-tooltip-placement-offset);
    transform: rotate(-45deg);
  }

  [data-popper-placement^="left"] #arrow-container {
    right: 0;
  }

  [data-popper-placement^="left"] #arrow {
    right: var(--kemet-tooltip-placement-offset);
    transform: rotate(135deg);
  }
`;

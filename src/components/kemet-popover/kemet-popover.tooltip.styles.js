import { css } from 'lit';

export const tooltip = css`
  #tooltip {
    display: flex;
    position: absolute;
  }

  #tooltip polygon {
    fill: var(--kemet-popover-background-color, #202020);
  }

  :host([position="top"]) #tooltip {
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="right"]) #tooltip {
    right: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  :host([position="bottom"]) #tooltip {
    bottom: 100%;
    left: 50%;
    transform-origin: left;
    transform: translateX(-50%);
  }

  :host([position="left"]) #tooltip {
    left: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  /* svg */
  #tooltip svg {
    position: relative;
  }

  :host([position="right"]) svg {
    transform: rotate(90deg);
    right: -8px;
  }

  :host([position="bottom"]) svg {
    transform: rotate(180deg);
    right: -8px;
  }

  :host([position="left"]) svg {
    transform: rotate(270deg);
    right: 8px;
  }
`;

export const customTooltip = css`
  #custom-tooltip {
    display: flex;
    position: absolute;
    z-index: 3;
  }

  :host([position="top"]) #custom-tooltip {
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="right"]) #custom-tooltip {
    right: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  :host([position="bottom"]) #custom-tooltip {
    bottom: 100%;
    left: 50%;
    transform-origin: left;
    transform: translateX(-50%);
  }

  :host([position="left"]) #custom-tooltip {
    left: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  ::slotted([slot="custom-tooltip"]) {
    display: flex;
  }
`;

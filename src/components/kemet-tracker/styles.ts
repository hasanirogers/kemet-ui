import { css } from 'lit';

export const stylesStep = css`
  :host {
    --kemet-tracker-step-dot-size: 50px;
    --kemet-tracker-step-dot-size-mobile: 25px;
    --kemet-tracker-step-dot-gap: 4px;
    --kemet-tracker-step-standard-line-weight: 1px;
    --kemet-tracker-step-completed-line-weight: 3px;
    --kemet-tracker-step-dot-transition: all 300ms ease-in-out;

    position: relative;
    width: 100%;
    text-align: center;
  }

  .dot {
    font-size: var(--kemet-tracker-step-dot-font-size, 90%);
    color: var(--kemet-tracker-step-dot-color, var(--kemet-color-primary));
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    width: var(--kemet-tracker-step-dot-size);
    height: var(--kemet-tracker-step-dot-size);
    border-radius: 100%;
    transition: var(--kemet-tracker-step-dot-transition);
    background-color: var(--kemet-tracker-step-dot-background-color, var(--kemet-color-white));
  }

  .dot::after {
    content: "";
    width: unset;
    height: unset;
    position: absolute;
    top: var(--kemet-tracker-step-dot-gap);
    left: var(--kemet-tracker-step-dot-gap);
    right: var(--kemet-tracker-step-dot-gap);
    bottom: var(--kemet-tracker-step-dot-gap);
    z-index: -1;
    border-radius: 100%;
    transition: var(--kemet-tracker-step-dot-transition);
    border: var(--kemet-tracker-step-dot-border, 1px solid var(--kemet-color-primary));
    background-color: var(--kemet-tracker-step-dot-fill-color, transparent);
  }

  :host([completed]) .dot {
    color: var(--kemet-tracker-step-completed-color, var(--kemet-color-white));
  }

  :host([completed]) .dot::after {
    border: 0;
    background-color: var(--kemet-tracker-step-completed-fill-color, var(--kemet-color-success));
  }

  :host([current]) .dot.animate {
    color: var(--kemet-tracker-step-current-color, var(--kemet-color-white));
  }

  :host([current]) .dot.animate::after {
    border: 0;
    background-color: var(--kemet-tracker-step-current-fill-color, var(--kemet-color-primary));
  }

  :host([mobile]) .dot {
    width: var(--kemet-tracker-step-dot-size-mobile);
    height: var(--kemet-tracker-step-dot-size-mobile);
  }

  .line {
    display: block;
    position: absolute;
    left: 50%;
    right: 0;
    bottom: 0;
    width: 100%;

    /* standard */
    top: calc((var(--kemet-tracker-step-dot-size) - var(--kemet-tracker-step-standard-line-weight)) / 2);
    height: var(--kemet-tracker-step-standard-line-weight);
    background-color: var(--kemet-tracker-step-line-color, var(--kemet-color-primary));
  }

  .line.completed {
    width: 100%;
    transform: scaleX(0);
    transform-origin: left center;
    top: calc((var(--kemet-tracker-step-dot-size) - var(--kemet-tracker-step-completed-line-weight)) / 2);
    height: var(--kemet-tracker-step-completed-line-weight);
    background-color: var(--kemet-tracker-step-completed-line-color, var(--kemet-color-primary));
    animation-name: grow;
    animation-delay: 1s;
    animation-duration: 600ms;
    animation-fill-mode: forwards;
  }

  :host([mobile]) .line {
    top: calc((var(--kemet-tracker-step-dot-size-mobile) - var(--kemet-tracker-step-standard-line-weight)) / 2);
  }

  :host([mobile]) .line.completed {
    top: calc((var(--kemet-tracker-step-dot-size-mobile) - var(--kemet-tracker-step-completed-line-weight)) / 2);
  }

  @keyframes grow {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`;

import { css } from 'lit';

export const stylesBase = css`
  :host {
    color: inherit;
    display: none;
  }

  :host([show]) {
    display: block;
  }

  p {
    margin: 1.6rem 0;
  }

  .status {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    line-height: 1;
    margin-top: 0.8rem;
  }

  .status > span {
    text-transform: capitalize;
  }

  .status--weak,
  .status--better {
    color: var(--kemet-color-error);
  }

  .status--strong {
    color: var(--kemet-color-success);
  }

  .indicator {
    display: flex;
    gap: 0.4rem;
    margin: 0;
    list-style: none;
  }

  .indicator li {
    width: 1.6rem;
    height: 0.2rem;
    background-color: var(--fds-color--gray2);
  }

  .status--weak .indicator li:nth-child(1) {
    background-color: var(--kemet-color-error);
  }

  .status--better .indicator li:nth-child(1),
  .status--better .indicator li:nth-child(2) {
    background-color: var(--kemet-color-error);
  }

  .status--strong .indicator li {
    background-color: var(--kemet-color-success);
  }

  .rules {
    color: var(--kemet-color-primary);
    list-style: none;
    font-size: 90%;
    padding-left: 2rem;
  }

  .rules li {
    position: relative;
  }

  .rules kemet-icon {
    color: var(--kemet-color-success);
    position: absolute;
    left: -2.4rem;
  }
`;

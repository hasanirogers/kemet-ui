import { css } from 'lit';

export const stylesBase = css`
  :host {
    --color: rgb(var(--kemet-color-gray-600));
    --min-width: 3rem;
    --font-size: 2rem;
    --border: 1px solid rgb(var(--kemet-color-gray-300));
    --border-radius: var(--kemet-border-radius-md);

    display: grid;
    gap: var(--kemet-spacer-md);
    grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 1fr));
  }

  label {
    display: flex;
    aspect-ratio: 4/3;
  }

  span {
    position: absolute;
    margin: -1px;
    width: 1px;
    height: 1px;
    display: block;
    overflow: hidden;
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  [part="input"] {
    color: var(--color);
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: var(--font-size);
    border: var(--border);
    border-radius: var(--border-radius);
  }
`;

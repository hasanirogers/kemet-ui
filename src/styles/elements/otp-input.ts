import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-otp-input-color: rgb(var(--kemet-color-gray-600));
    --kemet-otp-input-min-width: 3rem;
    --kemet-otp-input-font-size: 2rem;
    --kemet-otp-input-border: 1px solid rgb(var(--kemet-color-gray-300));
    --kemet-otp-input-border-radius: var(--kemet-border-radius-md);

    display: grid;
    gap: var(--kemet-spacer-md);
    grid-template-columns: repeat(auto-fit, minmax(var(--kemet-otp-input-min-width), 1fr));
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
    color: var(--kemet-otp-input-color);
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: var(--kemet-otp-input-font-size);
    border: var(--kemet-otp-input-border);
    border-radius: var(--kemet-otp-input-border-radius);
  }
`;

import { css } from 'lit';

export const stylesUpload = css`
  :host {
    color: var(--kemet-upload-color, var(--kemet-color-white));
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: var(--kemet-upload-height, 364px);
    border: var(--kemet-upload-border, 1rem solid var(--kemet-color-gray1-to-transparent));
    background-color: var(--kemet-upload-background-color, var(--kemet-color-primary-to-transparent));
  }

  :host([mobile]) {
    display: block;
    height: auto;
  }

  input {
    display: none;
  }

  .button {
    cursor: pointer;
    font-size: 1rem;
    display: block;
    color: var(--kemet-color-white);
    padding: 0.5rem 1rem;
    border: 1px solid var(--kemet-color-white);
    background-color: transparent;
  }

  .upload {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--kemet-upload-margin);
    flex-direction: column;
    border: 2px dashed var(--kemet-color-white);
  }

  :host([over]) .upload {
    background-color: green;
  }

  :host([mobile]) .upload {
    height: 280px;
  }

  .files {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: 0 1rem;
    overflow: auto;
    background-color: var(--kemet-color-gray1-to-transparent);
  }

  :host([mobile]) .files {
    padding: 0;
    max-height: 280px;
  }

  .heading {
    font-size: 1.25rem;
    margin: 0 0 2rem 0;
  }

  :host([no-drag-drop]) .heading {
    display: none;
  }
`;

export const stylesUploadFile = css`
  :host {
    --kemet-upload-file-ripple-color: var(--kemet-color-primary);

    color: var(--kemet-upload-file-color, var(--kemet-color-text));
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    height: 100%;
    max-height: 50%;
    padding: var(--kemet-upload-file-padding, 0.5rem 1rem);
    border: var(--kemet-upload-file-border, 1px solid var(--kemet-color-primary));
  }

  :host([status='error']) {
    border: 1px solid var(--kemet-color-error);
  }

  :host([status='complete']) {
    border: 1px solid var(--kemet-color-success);
  }

  h3 {
    margin: 0;
  }

  .percentage {
    font-size: clamp(2rem, 3vw, 2.5rem);
    align-self: center;
    justify-self: center;
  }

  .indicator {
    transform: scale(0.8);
  }

  :host([status='complete']) .message,
  :host([status='complete']) .indicator {
    color: var(--kemet-color-success);
  }

  :host([status='error']) .message,
  :host([status='error']) .indicator {
    color: var(--kemet-color-error);
  }
`;

export const stylesLoaders = css`
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ripple div {
    position: absolute;
    border: 4px solid var(--kemet-upload-file-ripple-color);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

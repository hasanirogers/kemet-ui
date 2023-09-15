import { css } from 'lit';

export const stylesUpload = css`
  :host {
    --kemet-upload-color: rgb(var(--kemet-color-white));
    --kemet-upload-height: 364px;
    --kemet-upload-border: 1rem solid rgb(var(--kemet-color-gray-50-to-transparent));
    --kemet-upload-background-color: rgb(var(--kemet-color-primary-to-transparent));


    color: var(--kemet-upload-color);
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: var(--kemet-upload-height);
    border: var(--kemet-upload-border);
    background-color: var(--kemet-upload-background-color);
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
    color: rgb(var(--kemet-color-white));
    padding: 0.5rem 1rem;
    border: 1px solid rgb(var(--kemet-color-white));
    background-color: transparent;
  }

  .upload {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--kemet-upload-margin);
    flex-direction: column;
    border: 2px dashed rgb(var(--kemet-color-white));
  }

  :host([over]) .upload {
    background-color: rgb(var(--kemet-color-green-600));
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
    background-color: rgb(var(--kemet-color-gray-50-to-transparent));
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
    --kemet-upload-file-ripple-color: rgb(var(--kemet-color-primary));
    --kemet-upload-file-color: rgb(var(--kemet-color-text));
    --kemet-upload-file-padding: 0.5rem 1rem;
    --kemet-upload-file-border: 1px solid rgb(var(--kemet-color-primary));

    color: var(--kemet-upload-file-color);
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    height: 100%;
    max-height: 50%;
    padding: var(--kemet-upload-file-padding);
    border: var(--kemet-upload-file-border);
  }

  :host([status='error']) {
    border: 1px solid rgb(var(--kemet-color-error));
  }

  :host([status='complete']) {
    border: 1px solid rgb(var(--kemet-color-success));
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
    color: rgb(var(--kemet-color-success));
  }

  :host([status='error']) .message,
  :host([status='error']) .indicator {
    color: rgb(var(--kemet-color-error));
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

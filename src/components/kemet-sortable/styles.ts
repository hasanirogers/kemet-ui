import { css } from 'lit';

export const stylesSortable = css`
  :host {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`;

export const stylesSortableItem = css`
  :host {
    cursor: grab;
    display: block;
    padding: 1rem;
    border: 1px solid var(--kemet-color-background);
  }

  :host([ghost]) {
    opacity: 0.5;
    border-style: dashed;
  }
`;

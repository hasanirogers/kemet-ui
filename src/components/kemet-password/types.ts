export type TypeStatus = 'standard' | 'error' | 'success' | 'warning';

export interface KemetPasswordInterface extends HTMLElement {
  rules?: any[],
  show?: boolean,
  value?: string,
  message?: string,
  strength?: string,
  icon?: string,
  iconSize?: number,
}

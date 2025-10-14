export type TypeStatus = 'standard' | 'error' | 'success' | 'warning';

export interface KemetFieldInterface extends HTMLElement {
  slug?: string,
  label?: string,
  message?: string,
  focused?: boolean,
  status?: string,
  filled?: boolean,
  length?: number,
  disabled?: boolean,
  errorIcon?: string,
  successIcon?: string,
}

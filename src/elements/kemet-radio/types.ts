export type TypeStatus = 'standard' | 'error' | 'success' | 'warning';
export type TypeAxis = 'horizontal' | 'vertical';

export interface KemetRadioInterface extends HTMLElement {
  label?: string,
  checked?: boolean,
  name?: string,
  value?: string,
  disabled?: boolean,
  focused?: boolean,
  filled?: boolean,
}

export interface KemetRadiosInterface extends HTMLElement {
  legend?: string,
  axis?: string,
  value?: string,
  name?: string,
  status?: TypeStatus,
  message?: string,
  required?: boolean,
}

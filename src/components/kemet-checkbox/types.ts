export type TypeStatus = 'standard' | 'error' | 'success' | 'warning';

export interface KemetCheckboxInterface extends HTMLElement {
  label?: string,
  checked?: boolean,
  indeterminate?: boolean,
  name?: string,
  value?: string,
  disabled?: boolean,
  required?: boolean,
  focused?: boolean,
  rounded?: boolean,
  filled?: boolean,
  status?: string,
  message?: string,
}

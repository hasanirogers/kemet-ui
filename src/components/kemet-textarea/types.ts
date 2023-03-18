export type TypeStatus = 'standard' | 'error' | 'success' | 'warning';

export interface KemetTextareaInterface extends HTMLElement {
  slug?: string,
  name?: string,
  placeholder?: string,
  minlength?: number,
  maxlength?: number,
  inputmode?: string,
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean,
  value?: string,
  invalid?: boolean,
  status?: TypeStatus,
  validateOnBlur?: boolean,
  rounded?: boolean,
  filled?: boolean,
  rows?: number,
  autocorrect?: boolean,
}

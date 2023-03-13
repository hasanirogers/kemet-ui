export interface KemetTextareaInterface extends HTMLElement {
  slug?: string;
  name?: string;
  placeholder?: string;
  minlength?: string;
  maxlength?: string;
  inputmode?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  value?: string;
  invalid?: boolean;
  status?: string;
  validateOnBlur?: boolean;
  rounded?: boolean;
  filled?: boolean;
  rows?: number;
}

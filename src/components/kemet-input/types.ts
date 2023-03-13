export interface KemetInputInterface extends HTMLElement {
  slug?: string;
  name?: string;
  placeholder?: string;
  minlength?: string;
  maxlength?: string;
  min?: string;
  max?: string;
  step?: string;
  autocomplete?: string;
  pattern?: string;
  inputmode?: string;
  // autofocus?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  type?: string;
  value?: string;
  invalid?: boolean;
  status?: string;
  validateOnBlur?: boolean;
  // ariaAutoComplete?: string;
  ariaControls?: string;
  ariaActiveDescendant?: string;
  rounded?: boolean;
  filled?: boolean;
  iconRight?: string;
  iconLeft?: string;
  iconSize?: number;
  validity?: object;
  isPasswordVisible?: boolean;
  inputType?: string;
  focused?: boolean;
}


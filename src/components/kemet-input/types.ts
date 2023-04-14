export type TypeStatus = 'standard' | 'error' | 'success' | 'warning';
export type TypeAriaAutoComplete = 'inline' | 'list' | 'both' | 'none';
export type TypeAutoComplete = 'on' | 'off' | 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-year' | 'bday-day' | 'bday-month' | 'billing' | 'cc-additional-name';

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


export interface KemetSelectInterface extends HTMLElement {
  slug?: string,
  name?: string,
  value?: string,
  options?: any[],
  status?: string,
  required?: boolean,
  disabled?: boolean,
  multiple?: boolean,
  icon?: string,
  iconSize?: number,
  filled?: boolean,
  rounded?: boolean,
}

export interface KemetOptionInterface extends HTMLElement {
  label?: string,
  value?: string,
  disabled?: boolean,
  selected?: boolean,
}

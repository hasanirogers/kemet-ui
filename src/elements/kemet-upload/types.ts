export interface KemetUploadInterface extends HTMLElement {
  slug?: string,
  accept?: string,
  multiple?: boolean,
  over?: boolean,
  heading?: string,
  mobile?: boolean,
  breakpoint?: string,
  noDragDrop?: boolean,
  maxSize?: number,
  buttonLabel?: string
}

export interface KemetUploadFile extends HTMLElement {
  name?: string,
  loaded?: number,
  size?: number,
  type?: string,
  status?: string,
  percent?: number,
  message?: string,
}

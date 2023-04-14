export type TypeEffect = 'sticky' | 'resize';

export interface KemetScrollNavInterface extends HTMLElement {
  effect?: TypeEffect,
  transform?: boolean,
  offset?: number
}

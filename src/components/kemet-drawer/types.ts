export type TypeEffect = 'slide' | 'reveal' | 'push' | 'scale';
export type TypeSide = 'left' | 'right' | 'top' | 'bottom';

export interface KemetDrawerInterface extends HTMLElement {
  opened?: boolean,
  effect?: TypeEffect,
  side?: TypeSide,
  overlay?: boolean,
}

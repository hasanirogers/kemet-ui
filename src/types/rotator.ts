export type TypeEffect = 'fade' | 'flip';

export interface KemetRotator extends HTMLElement {
  activeSlide?: number,
  width?: string,
  height?: string,
  messages?: any[],
  effect?: TypeEffect,
  rotationSpeed?: number,
}

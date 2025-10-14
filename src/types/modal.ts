export type TypeEffect = 'fadein-scaleup' | 'slide-right' | 'slide-bottom' | 'newspaper' | 'fall' | 'side-fall' | 'flip-horizontal' | 'flip-vertical' | 'sign-3d' | 'super-scaled' | 'slit' | 'rotate-bottom' | 'rotate-left';

export interface KemetModalInterface extends HTMLElement {
  opened?: boolean,
  effect?: TypeEffect,
  closeOnClick?: boolean,
  breakpoint?: string,
  mobile?: boolean,
}

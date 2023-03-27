export type TypeEffect = 'fade' | 'scale' | 'slide' | 'fall' | 'flip-horizontal' | 'flip-vertical' | 'sign' | 'super-scaled';
export type TypePosition = 'top' | 'right' | 'bottom' | 'left';
export type TypeFireOn = 'click' | 'hover';

export interface KemetPopoverInterface extends HTMLElement {
  opened: boolean,
  effect: TypeEffect,
  position: TypePosition,
  tooltip: boolean,
  customTooltip: boolean,
  fireOn: TypeFireOn,
  clickOutside: boolean,
  smart: boolean,
}

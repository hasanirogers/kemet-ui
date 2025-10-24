import KemetCount from "../elements/count";
import KemetInput from "../elements/input";

export const keyCodes = {
  ENTER: 13,
  SPACE: 32,
  ESC: 27,
};

export const directions = ['none','top', 'right', 'bottom', 'left'] as const;
export enum EnumDirections {
  None = 'none',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}
export type TypeDirection = typeof directions[number];

export const statuses = ['standard', 'primary', 'success', 'warning', 'error'] as const;
export enum EnumStatuses {
  Standard = 'standard',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}
export type TypeStatus = typeof statuses[number];

export const axis = ['horizontal', 'vertical'] as const;
export enum EnumAxis {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}
export type TypeAxis = typeof axis[number];

export const roundedSizes = ['sm', 'md', 'lg', 'xl', 'circle', 'pill'] as const;
export enum EnumRoundedSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  CIRCLE = 'circle',
  PILL = 'pill'
}
export type TypeRoundedSizes = typeof roundedSizes[number];

export interface InterfaceInputDetails {
  status: TypeStatus;
  validity: ValidityState;
  element: HTMLElement | KemetCount | KemetInput;
  value?: string;
}

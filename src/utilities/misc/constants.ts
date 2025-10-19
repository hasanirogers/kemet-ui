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
export type TypeDirection = EnumDirections;

export const statuses = ['standard', 'primary', 'success', 'warning', 'error'] as const;
export enum EnumStatuses {
  Standard = 'standard',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}
export type TypeStatus = EnumStatuses;

export const TypeAxis = ['horizontal', 'vertical'] as const;
export enum EnumAxis {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}
export type TypeAxis = EnumAxis;

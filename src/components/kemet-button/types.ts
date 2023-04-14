export type TypeType = 'standard' | 'text' | 'circle' | 'rounded' | 'pill';

export interface KemetButtonInterface {
  active: boolean,
  hover: boolean,
  focused: boolean,
  link: string,
  outlined: boolean,
  disabled: boolean,
  type: TypeType,
}

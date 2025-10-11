export type TypeAxis = 'horizontal' | 'vertical';
export type TypePagination = 'top' | 'right' | 'bottom' | 'left';

export interface KemetScrollSnapInterface extends HTMLElement {
  axis?: TypeAxis,
  pagination?: TypePagination,
}

export interface KemetScrollSnapSlideInterface extends HTMLElement {
 focused?: boolean,
 index?: number,
 label?: string,
}

export interface KemetScrollSnapPaginatorInterface extends HTMLElement {
  slides?: any[],
  icon?: string,
  size?: number,
  center?: boolean,
  hideFocusedLinks?: boolean,
  useNumberPages?: boolean,
  useLabelPages?: boolean,
}

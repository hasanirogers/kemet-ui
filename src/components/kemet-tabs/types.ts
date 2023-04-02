export type TypePanelEffect = 'none' | 'slide' | 'fade';
export type TypePlacement = 'top' | 'right' | 'bottom' | 'left';
export type TypeTabsAlign = 'center' | 'between' | 'around' | 'evenly' | 'start' | 'end';

export interface KemetTabsInterface extends HTMLElement {
  selected?: string,
  selectedIndex?: number,
  panelPosition?: number,
  panelEffect?: TypePanelEffect,
  swipe?: boolean,
  placement?: TypePlacement,
  divider?: boolean,
  tabsAlign?: TypeTabsAlign,
  ink?: any,
  hideInk?: boolean,
  overflow?: boolean,
  measureHeightOffset?: number,
}

export interface KemetTabInterface extends HTMLElement {
  selected?: boolean,
  link?: string,
  closable?: boolean,
  index?: number,
}

export interface KemetTabPanelInterface extends HTMLElement {
  selected?: boolean,
  panel?: string,
  index?: number,
}

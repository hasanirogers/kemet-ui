export interface KemetTrackerInterface extends HTMLElement {
  total?: number,
  breakpoint?: string,
}

export interface KemetTrackerStepInterface extends HTMLElement {
  step?: number,
  completed?: boolean,
  current?: boolean,
  last?: boolean,
  mobile?: boolean,
  hideDotContent?: boolean,
  completedSize?: number,
}

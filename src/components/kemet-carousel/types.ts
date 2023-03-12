export interface KemetCarouselInterface extends HTMLElement {
  index?: number,
  total?: number,
  sliderWidth?: string,
  sliderTranslateX?: string,
  inner?: boolean,
  arrows?: boolean,
  options?: object
  breakpoints?: object,
}

export interface KemetCarouselCurrentInterface extends HTMLElement {
  current?: number,
}

export interface KemetCarouselSlideInterface extends HTMLElement {
  selected?: boolean,
}

export interface KemetCarouselLinkInterface extends HTMLElement {
  slide?: number,
  selected?: boolean,
  disabled?: boolean,
}

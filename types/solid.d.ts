import { LitElement } from 'lit';
import type { JSX as SolidJSX } from 'solid-js';

import KemetAccordionClass from '../dist/elements/accordion';
import KemetAccordionPanelClass from '../dist/elements/accordion-panel';
import KemetAlertClass from '../dist/elements/alert';
import KemetAvatarClass from '../dist/elements/avatar';
import KemetBadgeClass from '../dist/elements/badge';
import KemetButtonClass from '../dist/elements/button';
import KemetCardClass from '../dist/elements/card';
import KemetCarouselClass from '../dist/elements/carousel';
import KemetCarouselCurrentClass from '../dist/elements/carousel-current';
import KemetCarouselFirstClass from '../dist/elements/carousel-first';
import KemetCarouselLastClass from '../dist/elements/carousel-last';
import KemetCarouselNextClass from '../dist/elements/carousel-next';
import KemetCarouselPrevClass from '../dist/elements/carousel-prev';
import KemetCarouselLinkClass from '../dist/elements/carousel-link';
import KemetCarouselSlideClass from '../dist/elements/carousel-slide';
import KemetCarouselTotalClass from '../dist/elements/carousel-total';
import KemetCheckboxClass from '../dist/elements/checkbox';
import KemetComboClass from '../dist/elements/combo';
import KemetCountClass from '../dist/elements/count';
import KemetDraggableClass from '../dist/elements/draggable';
import KemetDrawerClass from '../dist/elements/drawer';
import KemetFabClass from '../dist/elements/fab';
import KemetFieldClass from '../dist/elements/field';
import KemetFlipcardClass from '../dist/elements/flipcard';
import KemetFlipcardTriggerClass from '../dist/elements/flipcard-trigger';
import KemetIconBootstrapClass from '../dist/elements/icon-bootstrap';
import KemetIconLucideClass from '../dist/elements/icon-lucide';
import KemetInputClass from '../dist/elements/input';
import KemetModalClass from '../dist/elements/modal';
import KemetMultiInputClass from '../dist/elements/multi-input';
import KemetPasswordClass from '../dist/elements/password';
import KemetPopperClass from '../dist/elements/popper';
import KemetRadioClass from '../dist/elements/radio';
import KemetRotatorClass from '../dist/elements/rotator';
import KemetSelectClass from '../dist/elements/select';
import KemetScrollNavClass from '../dist/elements/scroll-nav';
import KemetScrollSnapClass from '../dist/elements/scroll-snap';
import KemetScrollSnapPaginatorClass from '../dist/elements/scroll-snap-paginator';
import KemetScrollSnapSlideClass from '../dist/elements/scroll-snap-slide';
import KemetSortableClass from '../dist/elements/sortable';
import KemetSvgs from '../dist/elements/svgs';
import KemetTabClass from '../dist/elements/tab';
import KemetTabPanelClass from '../dist/elements/tab-panel';
import KemetTabsClass from '../dist/elements/tabs';
import KemetTextareaClass from '../dist/elements/textarea';
import KemetTimerClass from '../dist/elements/timer';
import KemetToggleClass from '../dist/elements/toggle';
import KemetTooltipClass from '../dist/elements/tooltip';
import KemetTrackerClass from '../dist/elements/tracker';
import KemetUpload from '../dist/elements/upload';

/**
 * Extract only data properties (no methods) from a type
 */
type DataProps<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? never : K]: T[K];
};

/**
 * Extract custom properties from a LitElement instance (excluding base LitElement props)
 */
type LitElementProps<T extends LitElement> = Omit<
  DataProps<T>,
  keyof LitElement
>;

/**
 * Create React-compatible props for a Lit custom element
 */
type SolidLitProps<T extends LitElement> =
  Omit<React.HTMLAttributes<T>, 'children' | 'ref'> &
  Partial<LitElementProps<T>> & {
    ref?: T | ((el: T) => void);
    children?: SolidJSX.Element;
    slot?: string;
  };

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'kemet-accordion': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetAccordionClass>;
      'kemet-accordion-panel': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetAccordionPanelClass>;
      'kemet-alert': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetAlertClass>;
      'kemet-avatar': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetAvatarClass>;
      'kemet-badge': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetBadgeClass>;
      'kemet-button': SolidJSX.IntrinsicElements['button'] & SolidLitProps<KemetButtonClass>;
      'kemet-card': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCardClass>;
      'kemet-carousel': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselClass>;
      'kemet-carousel-current': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselCurrentClass>;
      'kemet-carousel-first': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselFirstClass>;
      'kemet-carousel-last': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselLastClass>;
      'kemet-carousel-next': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselNextClass>;
      'kemet-carousel-prev': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselPrevClass>;
      'kemet-carousel-link': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselLinkClass>;
      'kemet-carousel-slide': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselSlideClass>;
      'kemet-carousel-total': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCarouselTotalClass>;
      'kemet-checkbox': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCheckboxClass>;
      'kemet-combo': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetComboClass>;
      'kemet-count': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetCountClass>;
      'kemet-draggable': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetDraggableClass>;
      'kemet-drawer': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetDrawerClass>;
      'kemet-fab': SolidJSX.IntrinsicElements['button'] & SolidLitProps<KemetFabClass>;
      'kemet-field': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetFieldClass>;
      'kemet-flipcard': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetFlipcardClass>;
      'kemet-flipcard-trigger': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetFlipcardTriggerClass>;
      'kemet-icon-bootstrap': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetIconBootstrapClass>;
      'kemet-icon-lucide' : SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetIconLucideClass>;
      'kemet-input': SolidJSX.IntrinsicElements['input'] & SolidLitProps<KemetInputClass>;
      'kemet-modal': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetModalClass>;
      'kemet-multi-input': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetMultiInputClass>;
      'kemet-password': SolidJSX.IntrinsicElements['input'] & SolidLitProps<KemetPasswordClass>;
      'kemet-popper': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetPopperClass>;
      'kemet-radio': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetRadioClass>;
      'kemet-rotator': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetRotatorClass>;
      'kemet-select': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetSelectClass>;
      'kemet-scroll-nav': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetScrollNavClass>;
      'kemet-scroll-snap': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetScrollSnapClass>;
      'kemet-scroll-snap-paginator': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetScrollSnapPaginatorClass>;
      'kemet-scroll-snap-slide': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetScrollSnapSlideClass>;
      'kemet-sortable': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetSortableClass>;
      'kemet-svgs': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetSvgs>;
      'kemet-tab': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetTabClass>;
      'kemet-tab-panel': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetTabPanelClass>;
      'kemet-tabs': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetTabsClass>;
      'kemet-textarea': SolidJSX.IntrinsicElements['textarea'] & SolidLitProps<KemetTextareaClass>;
      'kemet-timer': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetTimerClass>;
      'kemet-toggle': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetToggleClass>;
      'kemet-tooltip': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetTooltipClass>;
      'kemet-tracker': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetTrackerClass>;
      'kemet-upload': SolidJSX.IntrinsicElements['div'] & SolidLitProps<KemetUpload>;
    }
  }
}

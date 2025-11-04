import { LitElement } from 'lit';
import 'react';

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
type ReactLitProps<T extends LitElement> =
  Omit<React.HTMLAttributes<T>, 'children'> &
  Partial<LitElementProps<T>> & {
    ref?: React.Ref<T>;
    children?: React.ReactNode;
    slot?: string;
  };


declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'kemet-accordion': ReactLitProps<KemetAccordionClass>;
      'kemet-accordion-panel': ReactLitProps<KemetAccordionPanelClass>;
      'kemet-alert': ReactLitProps<KemetAlertClass>;
      'kemet-avatar': ReactLitProps<KemetAvatarClass>;
      'kemet-badge': ReactLitProps<KemetBadgeClass>;
      'kemet-button': ReactLitProps<KemetButtonClass>;
      'kemet-card': ReactLitProps<KemetCardClass>;
      'kemet-carousel': ReactLitProps<KemetCarouselClass>;
      'kemet-carousel-current': ReactLitProps<KemetCarouselCurrentClass>;
      'kemet-carousel-first': ReactLitProps<KemetCarouselFirstClass>;
      'kemet-carousel-last': ReactLitProps<KemetCarouselLastClass>;
      'kemet-carousel-next': ReactLitProps<KemetCarouselNextClass>;
      'kemet-carousel-prev': ReactLitProps<KemetCarouselPrevClass>;
      'kemet-carousel-link': ReactLitProps<KemetCarouselLinkClass>;
      'kemet-carousel-slide': ReactLitProps<KemetCarouselSlideClass>;
      'kemet-carousel-total': ReactLitProps<KemetCarouselTotalClass>;
      'kemet-checkbox': ReactLitProps<KemetCheckboxClass>;
      'kemet-combo': ReactLitProps<KemetComboClass>;
      'kemet-count': ReactLitProps<KemetCountClass>;
      'kemet-draggable': ReactLitProps<KemetDraggableClass>;
      'kemet-drawer': ReactLitProps<KemetDrawerClass>;
      'kemet-fab': ReactLitProps<KemetFabClass>;
      'kemet-field': ReactLitProps<KemetFieldClass>;
      'kemet-flipcard': ReactLitProps<KemetFlipcardClass>;
      'kemet-flipcard-trigger': ReactLitProps<KemetFlipcardTriggerClass>;
      'kemet-icon-bootstrap': ReactLitProps<KemetIconBootstrapClass>;
      'kemet-icon-lucide' : ReactLitProps<KemetIconLucideClass>;
      'kemet-input': ReactLitProps<KemetInputClass>;
      'kemet-modal': ReactLitProps<KemetModalClass>;
      'kemet-multi-input': ReactLitProps<KemetMultiInputClass>;
      'kemet-password': ReactLitProps<KemetPasswordClass>;
      'kemet-popper': ReactLitProps<KemetPopperClass>;
      'kemet-radio': ReactLitProps<KemetRadioClass>;
      'kemet-rotator': ReactLitProps<KemetRotatorClass>;
      'kemet-select': ReactLitProps<KemetSelectClass>;
      'kemet-scroll-nav': ReactLitProps<KemetScrollNavClass>;
      'kemet-scroll-snap': ReactLitProps<KemetScrollSnapClass>;
      'kemet-scroll-snap-paginator': ReactLitProps<KemetScrollSnapPaginatorClass>;
      'kemet-scroll-snap-slide': ReactLitProps<KemetScrollSnapSlideClass>;
      'kemet-sortable': ReactLitProps<KemetSortableClass>;
      'kemet-svgs': ReactLitProps<KemetSvgs>;
      'kemet-tab': ReactLitProps<KemetTabClass>;
      'kemet-tab-panel': ReactLitProps<KemetTabPanelClass>;
      'kemet-tabs': ReactLitProps<KemetTabsClass>;
      'kemet-textarea': ReactLitProps<KemetTextareaClass>;
      'kemet-timer': ReactLitProps<KemetTimerClass>;
      'kemet-toggle': ReactLitProps<KemetToggleClass>;
      'kemet-tooltip': ReactLitProps<KemetTooltipClass>;
      'kemet-tracker': ReactLitProps<KemetTrackerClass>;
      'kemet-upload': ReactLitProps<KemetUpload>;
    }
  }
}

export {};

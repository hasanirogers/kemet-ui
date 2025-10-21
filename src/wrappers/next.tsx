'use client';

import React, { useEffect, useState } from "react";
import { ReactLitProps } from "../utilities/type-helpers";

import KemetAccordionClass from "../elements/accordion";
import KemetAccordionPanelClass from "../elements/accordion-panel";
import KemetAlertClass from "../elements/alert";
import KemetAvatarClass from "../elements/avatar";
import KemetBadgeClass from "../elements/badge";
import KemetButtonClass from '../elements/button';
import KemetCardClass from '../elements/card';
import KemetCarouselClass from '../elements/carousel';
import KemetCarouselCurrentClass from '../elements/carousel-current';
import KemetCarouselFirstClass from '../elements/carousel-first';
import KemetCarouselLastClass from '../elements/carousel-last';
import KemetCarouselNextClass from '../elements/carousel-next';
import KemetCarouselPrevClass from '../elements/carousel-prev';
import KemetCarouselSlideClass from '../elements/carousel-slide';
import KemetCarouselTotalClass from '../elements/carousel-total';
import KemetCheckboxClass from '../elements/checkbox';
import KemetComboClass from '../elements/combo';
import KemetCountClass from '../elements/count';
import KemetDrawerClass from '../elements/drawer';
import KemetDraggableClass from '../elements/draggable';
import KemetFabClass from '../elements/fab';
import KemetFieldClass from '../elements/field';
import KemetFlipcardClass from '../elements/flipcard';
import KemetFlipcardTriggerClass from '../elements/flipcard-trigger';
import KemetIconBootstrapClass from '../elements/icon-bootstrap';
import KemetIconLucideClass from '../elements/icon-lucide';
import KemetInputClass from '../elements/input';
import KemetModalClass from '../elements/modal';
import KemetModalCloseClass from '../elements/modal-close';
import KemetMultiInputClass from '../elements/multi-input';
import KemetOptionClass from '../elements/option';
import KemetPasswordClass from '../elements/password';
import KemetPopperClass from '../elements/popper';
import KemetPopperCloseClass from '../elements/popper-close';
import KemetRadioClass from '../elements/radio';
import KemetRadiosClass from '../elements/radios';
import KemetSortableClass from '../elements/sortable';
import KemetSortableItemClass from '../elements/sortable-item';
import KemetSvgClass from '../elements/svg';
import KemetSvgsClass from '../elements/svgs';
import KemetScrollNavClass from '../elements/scroll-nav';
import KemetScrollSnapClass from '../elements/scroll-snap';
import KemetScrollSnapPaginatorClass from '../elements/scroll-snap-paginator';
import KemetScrollSnapSlideClass from '../elements/scroll-snap-slide';
import KemetSelectClass from '../elements/select';
import KemetTabsClass from '../elements/tabs';
import KemetTabClass from '../elements/tab';
import KemetTabPanelClass from '../elements/tab-panel';
import KemetTooltipClass from '../elements/tooltip';
import KemetTextareaClass from '../elements/textarea';
import KemetTimerClass from '../elements/timer';
import KemetTimerDisplayClass from '../elements/timer-display';
import KemetToggleClass from '../elements/toggle';
import KemetTrackerClass from '../elements/tracker';
import KemetTrackerStepClass from '../elements/tracker-step';
import KemetUploadClass from '../elements/upload';
import KemetUploadFileClass from '../elements/upload-file';

interface CreateNextComponentProps extends React.HTMLAttributes<HTMLElement> {
  element: string;
  children?: React.ReactNode;
}

function CreateNextComponent ({ element, children, ...props }: CreateNextComponentProps) {
  const tagName = `kemet-${element}`;
  const [ready, setReady] = useState(false);

  // define each element statically so that tree shaking does not remove them
  const elementLoaders = {
    'accordion': () => import('../elements/accordion'),
    'accordion-panel': () => import('../elements/accordion-panel'),
    'alert': () => import('../elements/alert'),
    'avatar': () => import('../elements/avatar'),
    'badge': () => import('../elements/badge'),
    'button': () => import('../elements/button'),
    'card': () => import('../elements/card'),
    'carousel': () => import('../elements/carousel'),
    'carousel-current': () => import('../elements/carousel-current'),
    'carousel-first': () => import('../elements/carousel-first'),
    'carousel-last': () => import('../elements/carousel-last'),
    'carousel-next': () => import('../elements/carousel-next'),
    'carousel-prev': () => import('../elements/carousel-prev'),
    'carousel-slide': () => import('../elements/carousel-slide'),
    'carousel-total': () => import('../elements/carousel-total'),
    'checkbox': () => import('../elements/checkbox'),
    'combo': () => import('../elements/combo'),
    'count': () => import('../elements/count'),
    'drawer': () => import('../elements/drawer'),
    'draggable': () => import('../elements/draggable'),
    'fab': () => import('../elements/fab'),
    'field': () => import('../elements/field'),
    'flipcard': () => import('../elements/flipcard'),
    'flipcard-trigger': () => import('../elements/flipcard-trigger'),
    'icon-bootstrap': () => import('../elements/icon-bootstrap'),
    'icon-lucide': () => import('../elements/icon-lucide'),
    'input': () => import('../elements/input'),
    'modal': () => import('../elements/modal'),
    'modal-close': () => import('../elements/modal-close'),
    'multi-input': () => import('../elements/multi-input'),
    'option': () => import('../elements/option'),
    'password': () => import('../elements/password'),
    'popper': () => import('../elements/popper'),
    'popper-close': () => import('../elements/popper-close'),
    'radio': () => import('../elements/radio'),
    'radios': () => import('../elements/radios'),
    'scroll-nav': () => import('../elements/scroll-nav'),
    'scroll-snap': () => import('../elements/scroll-snap'),
    'scroll-snap-paginator': () => import('../elements/scroll-snap-paginator'),
    'scroll-snap-slide': () => import('../elements/scroll-snap-slide'),
    'select': () => import('../elements/select'),
    'sortable': () => import('../elements/sortable'),
    'sortable-item': () => import('../elements/sortable-item'),
    'svg': () => import('../elements/svg'),
    'svgs': () => import('../elements/svgs'),
    'tabs': () => import('../elements/tabs'),
    'tab-panel': () => import('../elements/tab-panel'),
    'tab': () => import('../elements/tab'),
    'textarea' : () => import('../elements/textarea'),
    'timer': () => import('../elements/timer'),
    'timer-display': () => import('../elements/timer-display'),
    'toggle': () => import('../elements/toggle'),
    'tooltip': () => import('../elements/tooltip'),
    'tracker': () => import('../elements/tracker'),
    'tracker-step': () => import('../elements/tracker-step'),
    'upload': () => import('../elements/upload'),
    'upload-file': () => import('../elements/upload-file')
  } as const;

  useEffect(() => {
    const load = elementLoaders[element];
    if (!load) {
      console.error(`Unknown element "kemet-${element}"`);
      return;
    }
    load().then(() => setReady(true)).catch((event) => {
      console.error(`Failed to load kemet-${element}`, event);
    });
  }, [element]);

  if (!ready) return null;

  return React.createElement(tagName, props, children);
}

export const KemetAccordion = (props: ReactLitProps<KemetAccordionClass>) => <CreateNextComponent element="accordion" {...props} />
export const KemetAccordionPanel = (props: ReactLitProps<KemetAccordionPanelClass>) => <CreateNextComponent element="accordion-panel" {...props} />
export const KemetAlert = (props: ReactLitProps<KemetAlertClass>) => <CreateNextComponent element="alert" {...props} />
export const KemetAvatar = (props: ReactLitProps<KemetAvatarClass>) => <CreateNextComponent element="avatar" {...props} />
export const KemetBadge = (props: ReactLitProps<KemetBadgeClass>) => <CreateNextComponent element="badge" {...props} />
export const KemetButton = (props: ReactLitProps<KemetButtonClass>) => <CreateNextComponent element="button" {...props} />
export const KemetCard = (props: ReactLitProps<KemetCardClass>) => <CreateNextComponent element="card" {...props} />
export const KemetCarousel = (props: ReactLitProps<KemetCarouselClass>) => <CreateNextComponent element="carousel" {...props} />
export const KemetCarouselCurrent = (props: ReactLitProps<KemetCarouselCurrentClass>) => <CreateNextComponent element="carousel-current" {...props} />
export const KemetCarouselFirst = (props: ReactLitProps<KemetCarouselFirstClass>) => <CreateNextComponent element="carousel-first" {...props} />
export const KemetCarouselLast = (props: ReactLitProps<KemetCarouselLastClass>) => <CreateNextComponent element="carousel-last" {...props} />
export const KemetCarouselNext = (props: ReactLitProps<KemetCarouselNextClass>) => <CreateNextComponent element="carousel-next" {...props} />
export const KemetCarouselPrev = (props: ReactLitProps<KemetCarouselPrevClass>) => <CreateNextComponent element="carousel-prev" {...props} />
export const KemetCarouselSlide = (props: ReactLitProps<KemetCarouselSlideClass>) => <CreateNextComponent element="carousel-slide" {...props} />
export const KemetCarouselTotal = (props: ReactLitProps<KemetCarouselTotalClass>) => <CreateNextComponent element="carousel-total" {...props} />
export const KemetCheckbox = (props: ReactLitProps<KemetCheckboxClass>) => <CreateNextComponent element="checkbox" {...props} />
export const KemetCombo = (props: ReactLitProps<KemetComboClass>) => <CreateNextComponent element="combo" {...props} />
export const KemetCount = (props: ReactLitProps<KemetCountClass>) => <CreateNextComponent element="count" {...props} />
export const KemetDrawer = (props: ReactLitProps<KemetDrawerClass>) => <CreateNextComponent element="drawer" {...props} />
export const KemetDraggable = (props: ReactLitProps<KemetDraggableClass>) => <CreateNextComponent element="draggable" {...props} />
export const KemetFab = (props: ReactLitProps<KemetFabClass>) => <CreateNextComponent element="fab" {...props} />
export const KemetField = (props: ReactLitProps<KemetFieldClass>) => <CreateNextComponent element="field" {...props} />
export const KemetFlipcard = (props: ReactLitProps<KemetFlipcardClass>) => <CreateNextComponent element="flipcard" {...props} />
export const KemetFlipcardTrigger = (props: ReactLitProps<KemetFlipcardTriggerClass>) => <CreateNextComponent element="flipcard-trigger" {...props} />
export const KemetIconBootstrap = (props: ReactLitProps<KemetIconBootstrapClass>) => <CreateNextComponent element="icon-bootstrap" {...props} />
export const KemetIconLucide = (props: ReactLitProps<KemetIconLucideClass>) => <CreateNextComponent element="icon-lucide" {...props} />
export const KemetInput = (props: ReactLitProps<KemetInputClass>) => <CreateNextComponent element="input" {...props} />
export const KemetModal = (props: ReactLitProps<KemetModalClass>) => <CreateNextComponent element="modal" {...props} />
export const KemetModalClose = (props: ReactLitProps<KemetModalCloseClass>) => <CreateNextComponent element="modal-close" {...props} />
export const KemetMultiInput = (props: ReactLitProps<KemetMultiInputClass>) => <CreateNextComponent element="multi-input" {...props} />
export const KemetOption = (props: ReactLitProps<KemetOptionClass>) => <CreateNextComponent element="option" {...props} />
export const KemetPassword = (props: ReactLitProps<KemetPasswordClass>) => <CreateNextComponent element="password" {...props} />
export const KemetPopper = (props: ReactLitProps<KemetPopperClass>) => <CreateNextComponent element="popper" {...props} />
export const KemetPopperClose = (props: ReactLitProps<KemetPopperCloseClass>) => <CreateNextComponent element="popper-close" {...props} />
export const KemetRadio = (props: ReactLitProps<KemetRadioClass>) => <CreateNextComponent element="radio" {...props} />
export const KemetRadios = (props: ReactLitProps<KemetRadiosClass>) => <CreateNextComponent element="radios" {...props} />
export const KemetScrollNav = (props: ReactLitProps<KemetScrollNavClass>) => <CreateNextComponent element="scroll-nav" {...props} />
export const KemetScrollSnap = (props: ReactLitProps<KemetScrollSnapClass>) => <CreateNextComponent element="scroll-snap" {...props} />
export const KemetScrollSnapPaginator = (props: ReactLitProps<KemetScrollSnapPaginatorClass>) => <CreateNextComponent element="scroll-snap-paginator" {...props} />
export const KemetScrollSnapSlide = (props: ReactLitProps<KemetScrollSnapSlideClass>) => <CreateNextComponent element="scroll-snap-slide" {...props} />
export const KemetSelect = (props: ReactLitProps<KemetSelectClass>) => <CreateNextComponent element="select" {...props} />
export const KemetSortable = (props: ReactLitProps<KemetSortableClass>) => <CreateNextComponent element="sortable" {...props} />
export const KemetSortableItem = (props: ReactLitProps<KemetSortableItemClass>) => <CreateNextComponent element="sortable-item" {...props} />
export const KemetSvg = (props: ReactLitProps<KemetSvgClass>) => <CreateNextComponent element="svg" {...props} />
export const KemetSvgs = (props: ReactLitProps<KemetSvgsClass>) => <CreateNextComponent element="svgs" {...props} />
export const KemetTabs = (props: ReactLitProps<KemetTabsClass>) => <CreateNextComponent element="tabs" {...props} />
export const KemetTabPanel = (props: ReactLitProps<KemetTabPanelClass>) => <CreateNextComponent element="tab-panel" {...props} />
export const KemetTab = (props: ReactLitProps<KemetTabClass>) => <CreateNextComponent element="tab" {...props} />
export const KemetTextarea = (props: ReactLitProps<KemetTextareaClass>) => <CreateNextComponent element="textarea" {...props} />
export const KemetTimer = (props: ReactLitProps<KemetTimerClass>) => <CreateNextComponent element="timer" {...props} />
export const KemetTimerDisplay = (props: ReactLitProps<KemetTimerDisplayClass>) => <CreateNextComponent element="timer-display" {...props} />
export const KemetToggle = (props: ReactLitProps<KemetToggleClass>) => <CreateNextComponent element="toggle" {...props} />
export const KemetTooltip = (props: ReactLitProps<KemetTooltipClass>) => <CreateNextComponent element="tooltip" {...props} />
export const KemetTracker = (props: ReactLitProps<KemetTrackerClass>) => <CreateNextComponent element="tracker" {...props} />
export const KemetTrackerStep = (props: ReactLitProps<KemetTrackerStepClass>) => <CreateNextComponent element="tracker-step" {...props} />
export const KemetUpload = (props: ReactLitProps<KemetUploadClass>) => <CreateNextComponent element="upload" {...props} />
export const KemetUploadFile = (props: ReactLitProps<KemetUploadFileClass>) => <CreateNextComponent element="upload-file" {...props} />


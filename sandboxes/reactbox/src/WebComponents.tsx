import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import KemetAccordionClass from './build/components/kemet-accordion/kemet-accordion';
import KemetAccordionPanelClass from './build/components/kemet-accordion/kemet-accordion-panel';
import KemetAlertClass from './build/components/kemet-alert/kemet-alert';
import KemetAvatarClass from './build/components/kemet-avatar/kemet-avatar';
import KemetAvatarsClass from './build/components/kemet-avatar/kemet-avatars';
import KemetBadgeClass from './build/components/kemet-badge/kemet-badge';
import KemetButtonClass from './build/components/kemet-button/kemet-button';
import KemetCardClass from './build/components/kemet-card/kemet-card';
import KemetCarouselClass from './build/components/kemet-carousel/kemet-carousel';
import KemetCarouselCurrentClass from './build/components/kemet-carousel/kemet-carousel-current';
import KemetCarouselFirstClass from './build/components/kemet-carousel/kemet-carousel-first';
import KemetCarouselLastClass from './build/components/kemet-carousel/kemet-carousel-last';
import KemetCarouselLinkClass from './build/components/kemet-carousel/kemet-carousel-link';
import KemetCarouselNextClass from './build/components/kemet-carousel/kemet-carousel-next';
import KemetCarouselPrevClass from './build/components/kemet-carousel/kemet-carousel-prev';
import KemetCarouselSlideClass from './build/components/kemet-carousel/kemet-carousel-slide';
import KemetCarouselTotalClass from './build/components/kemet-carousel/kemet-carousel-total';
import KemetCheckboxClass from './build/components/kemet-checkbox/kemet-checkbox';
import KemetComboClass from './build/components/kemet-combo/kemet-combo';
import KemetCountClass from './build/components/kemet-count/kemet-count';
import KemetDraggableClass from './build/components/kemet-draggable/kemet-draggable';
import KemetDrawerClass from './build/components/kemet-drawer/kemet-drawer';
import KemetFABClass from './build/components/kemet-fab/kemet-fab';
import KemetFieldClass from './build/components/kemet-field/kemet-field';
import KemetFlipcardClass from './build/components/kemet-flipcard/kemet-flipcard';
import KemetFlipcardTriggerClass from './build/components/kemet-flipcard/kemet-flipcard-trigger';
import KemetIconClass from './build/components/kemet-icon/kemet-icon';
import KemetInputClass from './build/components/kemet-input/kemet-input';
import KemetModalClass from './build/components/kemet-modal/kemet-modal';
import KemetModalCloseClass from './build/components/kemet-modal/kemet-modal-close';
import KemetPasswordClass from './build/components/kemet-password/kemet-password';
import KemetPopperClass from './build/components/kemet-popper/kemet-popper';
import KemetPopperCloseClass from './build/components/kemet-popper/kemet-popper-close';
import KemetRadioClass from './build/components/kemet-radio/kemet-radio';
import KemetRadiosClass from './build/components/kemet-radio/kemet-radios';
import KemetRotatorClass from './build/components/kemet-rotator/kemet-rotator';
import KemetScrollLinkClass from './build/components/kemet-scroll-link/kemet-scroll-link';
import KemetScrollNavClass from './build/components/kemet-scroll-nav/kemet-scroll-nav';
import KemetScrollSnapClass from './build/components/kemet-scroll-snap/kemet-scroll-snap';
import KemetScrollSnapSlideClass from './build/components/kemet-scroll-snap/kemet-scroll-snap-slide';
import KemetScrollSnapPaginatorClass from './build/components/kemet-scroll-snap/kemet-scroll-snap-paginator';
import KemetSelectClass from './build/components/kemet-select/kemet-select';
import KemetOptionClass from './build/components/kemet-select/kemet-option';
import KemetSortableClass from './build/components/kemet-sortable/kemet-sortable';
import KemetSortableItemClass from './build/components/kemet-sortable/kemet-sortable-item';
import KemetSVGsClass from './build/components/kemet-svgs/kemet-svgs';
import KemetSVGClass from './build/components/kemet-svgs/kemet-svg';
import KemetTabsClass from './build/components/kemet-tabs/kemet-tabs';
import KemetTabClass from './build/components/kemet-tabs/kemet-tab';
import KemetTabPanelClass from './build/components/kemet-tabs/kemet-tab-panel';
import KemetTextareaClass from './build/components/kemet-textarea/kemet-textarea';
import KemetToggleClass from './build/components/kemet-toggle/kemet-toggle';
import KemetTooltipClass from './build/components/kemet-tooltip/kemet-tooltip';
import KemetTrackerClass from './build/components/kemet-tracker/kemet-tracker';
import KemetTrackerStepClass from './build/components/kemet-tracker/kemet-tracker-step';
import KemetUploadClass from './build/components/kemet-upload/kemet-upload';
import KemetUploadFileClass from './build/components/kemet-upload/kemet-upload-file';

const events = {
  KemetAccordionPanel: {
    onOpened: 'kemet-accordion-panel-opened',
    onClosed: 'kemet-accordion-panel-closed',
  },
  kemetDrawer: {
    onOpened: 'kemet-drawer-opened',
    onClosed: 'kemet-drawer-closed',
  },
  KemetModal: {
    onOpened: 'kemet-modal-opened',
    onClosed: 'kemet-modal-closed',
  }
};

export const KemetAccordion = createComponent({ tagName: 'kemet-accordion', elementClass: KemetAccordionClass, react: React });
export const KemetAccordionPanel = createComponent({ tagName: 'kemet-accordion-panel', elementClass: KemetAccordionPanelClass, react: React, events: events.KemetAccordionPanel });
export const KemetAlert = createComponent({ tagName: 'kemet-alert', elementClass: KemetAlertClass, react: React });
export const KemetAvatar = createComponent({ tagName: 'kemet-avatar', elementClass: KemetAvatarClass, react: React });
export const KemetAvatars = createComponent({ tagName: 'kemet-avatars', elementClass: KemetAvatarsClass, react: React });
export const KemetBadge = createComponent({ tagName: 'kemet-badge', elementClass: KemetBadgeClass, react: React });
export const KemetButton = createComponent({ tagName: 'kemet-button', elementClass: KemetButtonClass, react: React });
export const KemetCard = createComponent({ tagName: 'kemet-card', elementClass: KemetCardClass, react: React });
export const KemetCarousel = createComponent({ tagName: 'kemet-carousel', elementClass: KemetCarouselClass, react: React });
export const KemetCarouselCurrent = createComponent({ tagName: 'kemet-carousel-current', elementClass: KemetCarouselCurrentClass, react: React });
export const KemetCarouselFirst = createComponent({ tagName: 'kemet-carousel-first', elementClass: KemetCarouselFirstClass, react: React });
export const KemetCarouselLast = createComponent({ tagName: 'kemet-carousel-last', elementClass: KemetCarouselLastClass, react: React });
export const KemetCarouselLink = createComponent({ tagName: 'kemet-carousel-link', elementClass: KemetCarouselLinkClass, react: React });
export const KemetCarouselNext = createComponent({ tagName: 'kemet-carousel-next', elementClass: KemetCarouselNextClass, react: React });
export const KemetCarouselPrev = createComponent({ tagName: 'kemet-carousel-prev', elementClass: KemetCarouselPrevClass, react: React });
export const KemetCarouselSlide = createComponent({ tagName: 'kemet-carousel-slide', elementClass: KemetCarouselSlideClass, react: React });
export const KemetCarouselTotal = createComponent({ tagName: 'kemet-carousel-total', elementClass: KemetCarouselTotalClass, react: React });
export const KemetCheckbox = createComponent({ tagName: 'kemet-checkbox', elementClass: KemetCheckboxClass, react: React });
export const KemetCombo = createComponent({ tagName: 'kemet-combo', elementClass: KemetComboClass, react: React });
export const KemetCount = createComponent({ tagName: 'kemet-count', elementClass: KemetCountClass, react: React });
export const KemetDraggable = createComponent({ tagName: 'kemet-draggable', elementClass: KemetDraggableClass, react: React });
export const KemetDrawer = createComponent({ tagName: 'kemet-drawer', elementClass: KemetDrawerClass, react: React, events: events.kemetDrawer });
export const KemetFAB = createComponent({ tagName: 'kemet-fab', elementClass: KemetFABClass, react: React });
export const KemetField = createComponent({ tagName: 'kemet-field', elementClass: KemetFieldClass, react: React });
export const KemetFlipcard = createComponent({ tagName: 'kemet-flipcard', elementClass: KemetFlipcardClass, react: React });
export const KemetFlipcardTrigger = createComponent({ tagName: 'kemet-flipcard-trigger', elementClass: KemetFlipcardTriggerClass, react: React });
export const KemetIcon = createComponent({ tagName: 'kemet-icon', elementClass: KemetIconClass, react: React });
export const KemetInput = createComponent({ tagName: 'kemet-input', elementClass: KemetInputClass, react: React });
export const KemetModal = createComponent({ tagName: 'kemet-modal', elementClass: KemetModalClass, react: React, events: events.KemetModal });
export const KemetModalClose = createComponent({ tagName: 'kemet-modal-close', elementClass: KemetModalCloseClass, react: React });
export const KemetPassword = createComponent({ tagName: 'kemet-password', elementClass: KemetPasswordClass, react: React });
export const KemetPopper = createComponent({ tagName: 'kemet-popper', elementClass: KemetPopperClass, react: React });
export const KemetPopperClose = createComponent({ tagName: 'kemet-popper-close', elementClass: KemetPopperCloseClass, react: React });
export const KemetRadio = createComponent({ tagName: 'kemet-radio', elementClass: KemetRadioClass, react: React });
export const KemetRadios = createComponent({ tagName: 'kemet-radios', elementClass: KemetRadiosClass, react: React });
export const KemetRotator = createComponent({ tagName: 'kemet-rotator', elementClass: KemetRotatorClass, react: React });
export const KemetScrollLink = createComponent({ tagName: 'kemet-scroll-link', elementClass: KemetScrollLinkClass, react: React });
export const KemetScrollNav = createComponent({ tagName: 'kemet-scroll-nav', elementClass: KemetScrollNavClass, react: React });
export const KemetScrollSnap = createComponent({ tagName: 'kemet-scroll-snap', elementClass: KemetScrollSnapClass, react: React });
export const KemetScrollSnapSlide = createComponent({ tagName: 'kemet-scroll-snap-slide', elementClass: KemetScrollSnapSlideClass, react: React });
export const KemetScrollSnapPaginator = createComponent({ tagName: 'kemet-scroll-snap-paginator', elementClass: KemetScrollSnapPaginatorClass, react: React });
export const KemetSelect = createComponent({ tagName: 'kemet-select', elementClass: KemetSelectClass, react: React });
export const KemetOption = createComponent({ tagName: 'kemet-option', elementClass: KemetOptionClass, react: React });
export const KemetSortable = createComponent({ tagName: 'kemet-sortable', elementClass: KemetSortableClass, react: React });
export const KemetSortableItem = createComponent({ tagName: 'kemet-sortable-item', elementClass: KemetSortableItemClass, react: React });
export const KemetSVGs = createComponent({ tagName: 'kemet-svgs', elementClass: KemetSVGsClass, react: React });
export const KemetSVG = createComponent({ tagName: 'kemet-svg', elementClass: KemetSVGClass, react: React });
export const KemetTabs = createComponent({ tagName: 'kemet-tabs', elementClass: KemetTabsClass, react: React });
export const KemetTab = createComponent({ tagName: 'kemet-tab', elementClass: KemetTabClass, react: React });
export const KemetTabPanel = createComponent({ tagName: 'kemet-tab-panel', elementClass: KemetTabPanelClass, react: React });
export const KemetTextarea = createComponent({ tagName: 'kemet-textarea', elementClass: KemetTextareaClass, react: React });
export const KemetToggle = createComponent({ tagName: 'kemet-toggle', elementClass: KemetToggleClass, react: React });
export const KemetTooltip = createComponent({ tagName: 'kemet-tooltip', elementClass: KemetTooltipClass, react: React });
export const KemetTracker = createComponent({ tagName: 'kemet-tracker', elementClass: KemetTrackerClass, react: React });
export const KemetTrackerStep = createComponent({ tagName: 'kemet-tracker-step', elementClass: KemetTrackerStepClass, react: React });
export const KemetUpload = createComponent({ tagName: 'kemet-upload', elementClass: KemetUploadClass, react: React });
export const KemetUploadFile = createComponent({ tagName: 'kemet-upload-file', elementClass: KemetUploadFileClass, react: React });

import * as React from 'react';
import {createComponent, EventName} from '@lit/react';

import Accordion from '../elements/accordion';
import AccordionPanel from '../elements/accordion-panel';
import Button from '../elements/button';
import Alert from '../elements/alert';
import Avatar from '../elements/avatar';
import Avatars from '../elements/avatars';
import Badge from '../elements/badge';
import Card from '../elements/card';
import Carousel from '../elements/carousel';
import CarouselCurrent from '../elements/carousel-current';
import CarouselFirst from '../elements/carousel-first';
import CarouselLast from '../elements/carousel-last';
import CarouselNext from '../elements/carousel-next';
import CarouselPrev from '../elements/carousel-prev';
import CarouselLink from '../elements/carousel-link';
import CarouselSlide from '../elements/carousel-slide';
import CarouselTotal from '../elements/carousel-total';
import Checkbox from '../elements/checkbox';
import Count from '../elements/count';
import Combo, { InterfaceKemetSelectionEvent as InterfaceSelectionDetails } from '../elements/combo';
import Draggable from '../elements/draggable';
import Drawer from '../elements/drawer';
import Fab from '../elements/fab';
import Field from '../elements/field';
import Flipcard from '../elements/flipcard';
import FlipcardTrigger from '../elements/flipcard-trigger';
import IconBootstrap from '../elements/icon-bootstrap';
import IconLucide from '../elements/icon-lucide';
import Input from '../elements/input';
import Modal from '../elements/modal';
import ModalClose from '../elements/modal-close';
import MultiInput from '../elements/multi-input';
import Password, { InterfacePasswordStatusChangeDetails } from '../elements/password';
import Popper from '../elements/popper';
import PopperClose from '../elements/popper-close';
import Radio from '../elements/radio';
import Radios from '../elements/radios';
import Rotator from '../elements/rotator';
import ScrollNav from '../elements/scroll-nav';
import ScrollSnap from '../elements/scroll-snap';
import ScrollSnapPaginator from '../elements/scroll-snap-paginator';
import ScrollSnapSlide from '../elements/scroll-snap-slide';
import Select from '../elements/select';
import SelectOption from '../elements/option';
import Sortable, { InterfaceSortableDragDetails } from '../elements/sortable';
import SortableItem from '../elements/sortable-item';
import Svg from '../elements/svg';
import Svgs from '../elements/svgs';
import Tab from '../elements/tab';
import TabPanel from '../elements/tab-panel';
import Tabs, { InterfaceTabsDetails } from '../elements/tabs';
import Toggle from '../elements/toggle';
import Timer from '../elements/timer';
import TimerDisplay from '../elements/timer-display';
import Tooltip from '../elements/tooltip';
import Tracker from '../elements/tracker';
import TrackerStep from '../elements/tracker-step';
import Upload, { InterfaceUploadChangeDetails } from '../elements/upload';
import UploadFile from '../elements/upload-file';
import { InterfaceInputDetails } from '../utilities/constants';


export const KemetAccordion = createComponent({
  tagName: 'kemet-accordion',
  elementClass: Accordion,
  react: React,
});

export const KemetAccordionPanel = createComponent({
  tagName: 'kemet-accordion-panel',
  elementClass: AccordionPanel,
  react: React,
  events: {
    onOpened: 'kemet-opened' as EventName<CustomEvent<AccordionPanel>>,
    onClosed: 'kemet-closed' as EventName<CustomEvent<AccordionPanel>>,
  },
});

export const KemetAlert = createComponent({
  tagName: 'kemet-alert',
  elementClass: Alert,
  react: React,
  events: {
    onOpened: 'kemet-opened' as EventName<CustomEvent<Alert>>,
    onClosed: 'kemet-closed' as EventName<CustomEvent<Alert>>,
  },
});

export const KemetAvatar = createComponent({
  tagName: 'kemet-avatar',
  elementClass: Avatar,
  react: React,
});

export const KemetAvatars = createComponent({
  tagName: 'kemet-avatars',
  elementClass: Avatars,
  react: React,
});

export const KemetBadge = createComponent({
  tagName: 'kemet-badge',
  elementClass: Badge,
  react: React,
});

export const KemetButton = createComponent({
  tagName: 'kemet-button',
  elementClass: Button,
  react: React,
});

export const KemetCard = createComponent({
  tagName: 'kemet-card',
  elementClass: Card,
  react: React,
});

export const KemetCarousel = createComponent({
  tagName: 'kemet-carousel',
  elementClass: Carousel,
  react: React,
  events: {
    onChangeStart: 'kemet-change-start' as EventName<CustomEvent<Carousel>>,
    onChangeFinished: 'kemet-change-finished' as EventName<CustomEvent<Carousel>>,
  },
});

export const KemetCarouselCurrent = createComponent({
  tagName: 'kemet-carousel-current',
  elementClass: CarouselCurrent,
  react: React,
});

export const KemetCarouselFirst = createComponent({
  tagName: 'kemet-carousel-first',
  elementClass: CarouselFirst,
  react: React,
  events: {
    onActivated: 'kemet-first-activated' as EventName<CustomEvent<CarouselFirst>>,
  },
});

export const KemetCarouselLast = createComponent({
  tagName: 'kemet-carousel-last',
  elementClass: CarouselLast,
  react: React,
  events: {
    onActivated: 'kemet-last-activated' as EventName<CustomEvent<CarouselLast>>,
  },
});

export const KemetCarouselNext = createComponent({
  tagName: 'kemet-carousel-next',
  elementClass: CarouselNext,
  react: React,
  events: {
    onActivated: 'kemet-next-activated' as EventName<CustomEvent<CarouselNext>>,
  },
});

export const KemetCarouselPrev = createComponent({
  tagName: 'kemet-carousel-prev',
  elementClass: CarouselPrev,
  react: React,
  events: {
    onActivated: 'kemet-prev-activated' as EventName<CustomEvent<CarouselPrev>>,
  },
});

export const KemetCarouselLink = createComponent({
  tagName: 'kemet-carousel-link',
  elementClass: CarouselLink,
  react: React,
  events: {
    onActivated: 'kemet-link-activated' as EventName<CustomEvent<CarouselLink>>,
  },
});

export const KemetCarouselSlide = createComponent({
  tagName: 'kemet-carousel-slide',
  elementClass: CarouselSlide,
  react: React,
});

export const KemetCarouselTotal = createComponent({
  tagName: 'kemet-carousel-total',
  elementClass: CarouselTotal,
  react: React,
});

export const KemetCheckbox = createComponent({
  tagName: 'kemet-checkbox',
  elementClass: Checkbox,
  react: React,
  events: {
    onChange: 'kemet-change' as EventName<CustomEvent<Checkbox>>,
    onFocus: 'kemet-focus' as EventName<CustomEvent<boolean>>,
    onBlur: 'kemet-blur' as EventName<CustomEvent<boolean>>,
  },
});

export const KemetCombo = createComponent({
  tagName: 'kemet-combo',
  elementClass: Combo,
  react: React,
  events: {
    onSelection: 'kemet-selection' as EventName<CustomEvent<InterfaceSelectionDetails>>,
  }
});

export const KemetCount = createComponent({
  tagName: 'kemet-count',
  elementClass: Count,
  react: React,
  events: {
    onStatusChange: 'kemet-status-change' as EventName<CustomEvent<InterfaceInputDetails>>,
  }
});

export const KemetDraggable = createComponent({
  tagName: 'kemet-draggable',
  elementClass: Draggable,
  react: React,
  events: {
    onStart: 'kemet-start' as EventName<CustomEvent<Draggable>>,
    onStop: 'kemet-stop' as EventName<CustomEvent<Draggable>>,
  }
});

export const KemetDrawer = createComponent({
  tagName: 'kemet-drawer',
  elementClass: Drawer,
  react: React,
  events: {
    onOpened: 'kemet-opened' as EventName<CustomEvent<Drawer>>,
    onClosed: 'kemet-closed' as EventName<CustomEvent<Drawer>>,
  }
});

export const KemetFab = createComponent({
  tagName: 'kemet-fab',
  elementClass: Fab,
  react: React,
});

export const KemetField = createComponent({
  tagName: 'kemet-field',
  elementClass: Field,
  react: React,
});

export const KemetFlipcardTrigger = createComponent({
  tagName: 'kemet-flipcard-trigger',
  elementClass: FlipcardTrigger,
  react: React,
  events: {
    onFlipped: 'kemet-flipped' as EventName<CustomEvent<FlipcardTrigger>>,
  }
});

export const KemetFlipcard = createComponent({
  tagName: 'kemet-flipcard',
  elementClass: Flipcard,
  react: React,
});

export const KemetIconBootstrap = createComponent({
  tagName: 'kemet-icon-bootstrap',
  elementClass: IconBootstrap,
  react: React,
});

export const KemetIconLucide = createComponent({
  tagName: 'kemet-icon-lucide',
  elementClass: IconLucide,
  react: React,
});

export const KemetInput = createComponent({
  tagName: 'kemet-input',
  elementClass: Input,
  react: React,
  events: {
    onInput: 'kemet-input' as EventName<CustomEvent<InterfaceInputDetails>>,
    onFocus: 'kemet-focus' as EventName<CustomEvent<Input>>,
    onBlur: 'kemet-blur' as EventName<CustomEvent<Input>>,
    onStatusChange: 'kemet-status-change' as EventName<CustomEvent<InterfaceInputDetails>>,
  }
});

export const KemetModal = createComponent({
  tagName: 'kemet-modal',
  elementClass: Modal,
  react: React,
  events: {
    onOpened: 'kemet-opened' as EventName<CustomEvent<Modal>>,
    onClosed: 'kemet-closed' as EventName<CustomEvent<Modal>>,
  }
});

export const KemetModalClose = createComponent({
  tagName: 'kemet-modal-close',
  elementClass: ModalClose,
  react: React,
  events: {
    onClosedPressed: 'kemet-closed-pressed' as EventName<CustomEvent<ModalClose>>,
  }
});

export const KemetMultiInput = createComponent({
  tagName: 'kemet-multi-input',
  elementClass: MultiInput,
  react: React,
  events: {
    onInput: 'kemet-input' as EventName<CustomEvent<MultiInput>>,
    onFocus: 'kemet-focus' as EventName<CustomEvent<MultiInput>>
  }
});

export const KemetOption = createComponent({
  tagName: 'kemet-option',
  elementClass: SelectOption,
  react: React,
});

export const KemetPassword = createComponent({
  tagName: 'kemet-password',
  elementClass: Password,
  react: React,
  events: {
    onStatusChange: 'kemet-status-change' as EventName<CustomEvent<InterfacePasswordStatusChangeDetails>>,
  }
});

export const KemetPopper = createComponent({
  tagName: 'kemet-popper',
  elementClass: Popper,
  react: React,
  events: {
    onOpened: 'kemet-opened' as EventName<CustomEvent<Popper>>,
    onClosed: 'kemet-closed' as EventName<CustomEvent<Popper>>,
  }
});

export const KemetPopperClose = createComponent({
  tagName: 'kemet-popper-close',
  elementClass: PopperClose,
  react: React,
  events: {
    onClosedPressed: 'kemet-closed-pressed' as EventName<CustomEvent<PopperClose>>,
  }
});

export const KemetRadio = createComponent({
  tagName: 'kemet-radio',
  elementClass: Radio,
  react: React,
  events: {
    onFocus: 'kemet-focus' as EventName<CustomEvent<boolean>>,
    onBlur: 'kemet-blur' as EventName<CustomEvent<boolean>>,
  }
});

export const KemetRadios = createComponent({
  tagName: 'kemet-radios',
  elementClass: Radios,
  react: React,
  events: {
    onChange: 'kemet-change' as EventName<CustomEvent<Radios>>,
  }
});

export const KemetRotator = createComponent({
  tagName: 'kemet-rotator',
  elementClass: Rotator,
  react: React,
});

export const KemetScrollNav = createComponent({
  tagName: 'kemet-scroll-nav',
  elementClass: ScrollNav,
  react: React,
});

export const KemetScrollSnap = createComponent({
  tagName: "kemet-scroll-snap",
  elementClass: ScrollSnap,
  react: React,
  events: {
    onMakeSlides: 'kemet-make-slides' as EventName<CustomEvent>,
  }
});

export const KemetScrollSnapSlide = createComponent({
  tagName: "kemet-scroll-snap-slide",
  elementClass: ScrollSnapSlide,
  react: React,
});

export const KemetScrollSnapPaginator = createComponent({
  tagName: "kemet-scroll-snap-paginator",
  elementClass: ScrollSnapPaginator,
  react: React,
  events: {
    onFocus: 'kemet-focus' as EventName<CustomEvent<number>>,
  }
});

export const KemetSelect = createComponent({
  tagName: 'kemet-select',
  elementClass: Select,
  react: React,
  events: {
    onChange: 'kemet-change' as EventName<CustomEvent<InterfaceInputDetails>>,
    onFocus: 'kemet-focus' as EventName<CustomEvent<Select>>,
    onBlur: 'kemet-blur' as EventName<CustomEvent<Select>>,
    onStatusChange: 'kemet-status-change' as EventName<CustomEvent<InterfaceInputDetails>>,
  }
});

export const KemetSortable = createComponent({
  tagName: 'kemet-sortable',
  elementClass: Sortable,
  react: React,
  events: {
    onDragStart: 'kemet-drag-start' as EventName<CustomEvent<InterfaceSortableDragDetails>>,
    onDragOver: 'kemet-drag-over' as EventName<CustomEvent<InterfaceSortableDragDetails>>,
    onDragEnd: 'kemet-drag-end' as EventName<CustomEvent<InterfaceSortableDragDetails>>,
  }
});

export const KemetSortableItem = createComponent({
  tagName: 'kemet-sortable-item',
  elementClass: SortableItem,
  react: React,
});

export const KemetSvg = createComponent({
  tagName: 'kemet-svg',
  elementClass: Svg,
  react: React,
});

export const KemetSvgs = createComponent({
  tagName: 'kemet-svgs',
  elementClass: Svgs,
  react: React,
});

export const KemetTab = createComponent({
  tagName: 'kemet-tab',
  elementClass: Tab,
  react: React,
  events: {
    onSelected: 'kemet-selected' as EventName<CustomEvent<Tab>>,
    onClosed: 'kemet-closed' as EventName<CustomEvent<Tab>>,
  }
});

export const KemetTabPanel = createComponent({
  tagName: 'kemet-tab-panel',
  elementClass: TabPanel,
  react: React,
});

export const KemetTabs = createComponent({
  tagName: 'kemet-tabs',
  elementClass: Tabs,
  react: React,
  events: {
    onChange: 'kemet-change' as EventName<CustomEvent<InterfaceTabsDetails>>,
  }
});

export const KemetToggle = createComponent({
  tagName: 'kemet-toggle',
  elementClass: Toggle,
  react: React,
  events: {
    onChange: 'kemet-change' as EventName<CustomEvent<Toggle>>,
  }
});

export const KemetTimer = createComponent({
  tagName: 'kemet-timer',
  elementClass: Timer,
  react: React,
  events: {
    onStart: 'kemet-start' as EventName<CustomEvent<Timer>>,
    onIncrement: 'kemet-increment' as EventName<CustomEvent<number>>,
    onComplete: 'kemet-complete' as EventName<CustomEvent<Timer>>,
  }
});

export const KemetTimerDisplay = createComponent({
  tagName: 'kemet-timer-display',
  elementClass: TimerDisplay,
  react: React,
});

export const KemetTooltip = createComponent({
  tagName: 'kemet-tooltip',
  elementClass: Tooltip,
  react: React,
});

export const KemetTracker = createComponent({
  tagName: 'kemet-tracker',
  elementClass: Tracker,
  react: React,
});

export const KemetTrackerStep = createComponent({
  tagName: 'kemet-tracker-step',
  elementClass: TrackerStep,
  react: React,
});

export const KemetUpload = createComponent({
  tagName: 'kemet-upload',
  elementClass: Upload,
  react: React,
  events: {
    onChange: 'kemet-change' as EventName<CustomEvent<InterfaceUploadChangeDetails>>,
  }
});

export const KemetUploadFile = createComponent({
  tagName: 'kemet-upload-file',
  elementClass: UploadFile,
  react: React,
});

export type KemetAccordionClass = Accordion;
export type KemetAccordionPanelClass = AccordionPanel;
export type KemetAlertClass = Alert;
export type KemetAvatarClass = Avatar;
export type KemetAvatarsClass = Avatars;
export type KemetBadgeClass = Badge;
export type KemetButtonClass = Button;
export type KemetCardClass = Card;
export type KemetCarouselClass = Carousel;
export type KemetCarouselCurrentClass = CarouselCurrent;
export type KemetCarouselFirstClass = CarouselFirst;
export type KemetCarouselLastClass = CarouselLast;
export type KemetCarouselNextClass = CarouselNext;
export type KemetCarouselPrevClass = CarouselPrev;
export type KemetCarouselSlideClass = CarouselSlide;
export type KemetCarouselTotalClass = CarouselTotal;
export type KemetCheckboxClass = Checkbox;
export type KemetComboClass = Combo;
export type KemetCountClass = Count;
export type KemetDraggableClass = Draggable;
export type KemetDrawerClass = Drawer;
export type KemetFabClass = Fab;
export type KemetFieldClass = Field;
export type KemetFlipcardClass = Flipcard;
export type KemetFlipcardTriggerClass = FlipcardTrigger;
export type KemetIconBootstrapClass = IconBootstrap;
export type KemetIconLucideClass = IconLucide;
export type KemetInputClass = Input;
export type KemetModalClass = Modal;
export type KemetModalCloseClass = ModalClose;
export type KemetMultiInputClass = MultiInput;
export type KemetOptionClass = SelectOption;
export type KemetPasswordClass = Password;
export type KemetPopperClass = Popper;
export type KemetPopperCloseClass = PopperClose;
export type KemetRadioClass = Radio;
export type KemetRadiosClass = Radios;
export type KemetRotatorClass = Rotator;
export type KemetScrollNavClass = ScrollNav;
export type KemetScrollSnapClass = ScrollSnap;
export type KemetScrollSnapSlideClass = ScrollSnapSlide;
export type KemetScrollSnapPaginatorClass = ScrollSnapPaginator;
export type KemetSelectClass = Select;
export type KemetSortableClass = Sortable;
export type KemetSortableItemClass = SortableItem;
export type KemetSvgClass = Svg;
export type KemetSvgsClass = Svgs;
export type KemetTabClass = Tab;
export type KemetTabPanelClass = TabPanel;
export type KemetTabsClass = Tabs;
export type KemetToggleClass = Toggle;
export type KemetTimerClass = Timer;
export type KemetTimerDisplayClass = TimerDisplay;
export type KemetTooltipClass = Tooltip;
export type KemetTrackerClass = Tracker;
export type KemetTrackerStepClass = TrackerStep;
export type KemetUploadClass = Upload;
export type KemetUploadFileClass = UploadFile;


export type KemetEventDetailsSelection = InterfaceSelectionDetails;
export type KemetEventDetailsStatusChange = InterfaceInputDetails;
export type KemetEventDetailsPasswordStatusChange = InterfacePasswordStatusChangeDetails;
export type KemetEventDetailsSortableDrag = InterfaceSortableDragDetails;
export type KemetEventDetailsTabs = InterfaceTabsDetails;
export type KemetEventDetailsUploadChange = InterfaceUploadChangeDetails;

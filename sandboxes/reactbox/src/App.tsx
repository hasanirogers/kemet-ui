import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteNav from './components/SiteNav/SiteNav';
import ViewAccordion from './views/Accordion/Accordion';
import ViewAlert from './views/Alert/Alert';
import ViewAvatar from './views/Avatar/Avatar';
import ViewBadge from './views/Badge/Badge';
import ViewButton from './views/Button/Button';
import ViewCard from './views/Card/Card';
import ViewCarousel from './views/Carousel/Carousel';
import ViewCheckbox from './views/Checkbox/Checkbox';
import ViewCombo from './views/Combo/Combo';
import ViewCount from './views/Count/Count';
import ViewDraggable from './views/Draggable/Draggable';
import ViewDrawer from './views/Drawer/Drawer';
import ViewFAB from './views/FAB/FAB';
import ViewField from './views/Field/Field';
import ViewFlipcard from './views/Flipcard/Flipcard';
import ViewHome from './views/Home/Home';
import ViewIcon from './views/Icon/Icon';
import ViewInput from './views/Input/Input';
import ViewModal from './views/Modal/Modal';
import ViewPassword from './views/Password/Password';
import ViewPopper from './views/Popper/Popper';
import ViewRadio from './views/Radio/Radio';
import ViewRotator from './views/Rotator/Rotator';
import ViewScrollLink from './views/ScrollLink/ScrollLink';
import ViewScrollNav from './views/ScrollNav/ScrollNav';
import ViewScrollSnap from './views/ScrollSnap/ScrollSnap';
import ViewSelect from './views/Select/Select';
import ViewSortable from './views/Sortable/Sortable';
import ViewSVGs from './views/SVGs/SVGs';
import ViewTabs from './views/Tabs/Tabs';
import ViewTextarea from './views/Textarea/Textarea';
import ViewToggle from './views/Toggle/Toggle';
import ViewTooltip from './views/Tooltip/Tooltip';
import ViewTracker from './views/Tracker/Tracker';
import ViewUpload from './views/Upload/Upload';
import { KemetDrawer, KemetIcon } from './WebComponents';

declare global {
  namespace JSX {
      interface IntrinsicElements {
          // define your custom elements here
          'content-wrapper': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}

function App() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const router = createBrowserRouter([
    { path: "/", element: <ViewHome /> },
    { path: "/accordion", element: <ViewAccordion /> },
    { path: "/alert", element: <ViewAlert /> },
    { path: "/avatar", element: <ViewAvatar /> },
    { path: "/badge", element: <ViewBadge /> },
    { path: "/button", element: <ViewButton /> },
    { path: "/card", element: <ViewCard /> },
    { path: "/carousel", element: <ViewCarousel /> },
    { path: "/checkbox", element: <ViewCheckbox /> },
    { path: "/combo", element: <ViewCombo /> },
    { path: "/count", element: <ViewCount /> },
    { path: "/draggable", element: <ViewDraggable /> },
    { path: "/drawer", element: <ViewDrawer /> },
    { path: "/fab", element: <ViewFAB /> },
    { path: "/field", element: <ViewField /> },
    { path: "/flipcard", element: <ViewFlipcard /> },
    { path: "/icon", element: <ViewIcon /> },
    { path: "/input", element: <ViewInput /> },
    { path: "/modal", element: <ViewModal /> },
    { path: "/password", element: <ViewPassword /> },
    { path: "/popper", element: <ViewPopper /> },
    { path: "/radio", element: <ViewRadio />},
    { path: "/rotator", element: <ViewRotator /> },
    { path: "/scrolllink", element: <ViewScrollLink /> },
    { path: "/scrollnav", element: <ViewScrollNav /> },
    { path: "/scrollsnap", element: <ViewScrollSnap /> },
    { path: "/select", element: <ViewSelect /> },
    { path: "/sortable", element: <ViewSortable /> },
    { path: "/svgs", element: <ViewSVGs /> },
    { path: "/tabs", element: <ViewTabs /> },
    { path: "/textarea", element: <ViewTextarea /> },
    { path: "/toggle", element: <ViewToggle /> },
    { path: "/tooltip", element: <ViewTooltip /> },
    { path: "/tracker", element: <ViewTracker /> },
    { path: "/upload", element: <ViewUpload /> }
  ]);

  return (
    <>
      <KemetDrawer effect="push" side="right" opened={isDrawerOpened} onOpened={() => setIsDrawerOpened(true)} onClosed={() => setIsDrawerOpened(false)}>
        <nav slot="navigation"><SiteNav /></nav>
        <main slot="content">
          <button onClick={() => setIsDrawerOpened(!isDrawerOpened)}><KemetIcon icon="list" size={32} /></button>
          <RouterProvider router={router} />
        </main>
      </KemetDrawer>
    </>

  );
}

export default App;

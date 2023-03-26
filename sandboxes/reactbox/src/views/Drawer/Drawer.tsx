import React from 'react';
import {  KemetButton } from '../../WebComponents';
import { KemetDrawerInterface } from '../../../../../src/components/kemet-drawer/types';

const ViewDrawer = () => {
  const toggleDrawer = () => {
    const drawer = document.querySelector('kemet-drawer') as KemetDrawerInterface;
    drawer.opened = !drawer.opened;
  }

  return (
    <content-wrapper>
      <KemetButton onClick={() => toggleDrawer()}>Toggle Drawer</KemetButton>
    </content-wrapper>
  );
}

export default ViewDrawer;

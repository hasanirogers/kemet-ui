import * as React from 'react';
import {createComponent} from '@lit/react';
import elementClass from '../elements/button';

export const KemetButton = createComponent({
  tagName: 'kemet-button',
  elementClass,
  react: React,
});

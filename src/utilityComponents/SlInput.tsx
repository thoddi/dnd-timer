import * as React from 'react';
import {createComponent} from '@lit/react';
import { SlInput as _slInput } from '@shoelace-style/shoelace';

export const SlInput = createComponent({
  tagName: 'sl-input',
  elementClass: _slInput,
  react: React,
  events: {
    onSlInput: 'sl-input',
  },
});
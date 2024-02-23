import * as React from 'react';
import {
  component,
  prefab,
  variable,
  Icon,
  font,
  size,
  buttongroup,
  color,
  ThemeColor,
} from '@betty-blocks/component-sdk';
import { showOn } from '../utils';

const attributes = {
  category: 'Local',
  icon: Icon.TextInputIcon,
};

const options = {
  size: size('Circle size', {
    value: '1rem',
    configuration: {
      as: 'UNIT',
    },
  }),
  color: color('Color', {
    value: ThemeColor.BLACK,
    ...showOn('styles'),
  }),
};

export default prefab('TimelineItem', attributes, undefined, [
  component('TimelineItem', { options }, []),
]);

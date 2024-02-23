import * as React from 'react';

import {
  component,
  prefab,
  variable,
  Icon,
  font,
  buttongroup,
  color,
  ThemeColor,
  number,
  modelAndRelation,
} from '@betty-blocks/component-sdk';
import { showOn } from '../utils';

const attributes = {
  category: 'Local',
  icon: Icon.UnorderedListIcon,
};

const options = {
  model: modelAndRelation('Model', { value: ''}),
  take: number('Rows per page (max 50)', {
    value: '5',
    configuration: {
      dependsOn: 'model',
    },
  }),

};

export default prefab('List', attributes, undefined, [
  component('List', { options }, []),
]);
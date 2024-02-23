import { prefab, Icon } from '@betty-blocks/component-sdk';
import { Div } from './structures/Div';

const attributes = {
  category: 'LAYOUT',
  icon: Icon.ContainerIcon,
  keywords: ['Layout', 'container'],
};

export default prefab('Div', attributes, undefined, [Div({})]);

import { prefab, Icon } from '@betty-blocks/component-sdk';
import { Flexbox } from './structures';

const attributes = {
  category: 'Local',
  icon: Icon.ContainerIcon,
  keywords: ['Layout', 'box'],
};

export default prefab('Flexbox', attributes, undefined, [Flexbox({})]);

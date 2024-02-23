import { prefab, Icon } from '@betty-blocks/component-sdk';
import { Gridbox } from './structures';

const attributes = {
  category: 'Local',
  icon: Icon.ContainerIcon,
  keywords: ['Layout', 'box'],
};

export default prefab('Gridbox', attributes, undefined, [Gridbox({})]);

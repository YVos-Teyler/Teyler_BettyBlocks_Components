import { prefab, Icon, font } from '@betty-blocks/component-sdk';
import { Map } from './structures';
import { mapOptions } from './structures/Map/options';

const attr = {
  icon: Icon.LabelIcon,
  category: 'Local',
  keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};

export default prefab('Map', attr, undefined, [
  Map(
    {
      options: {
        ...mapOptions
      }
    },
    [],
  ),
]);

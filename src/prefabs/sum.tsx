import { prefab, Icon, font } from '@betty-blocks/component-sdk';
import { Sum } from './structures/Sum';
import { sumOptions } from './structures/Sum/options';

const attr = {
  icon: Icon.LabelIcon,
  category: 'Local',
  keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};

export default prefab('Sum', attr, undefined, [
  Sum(
    {
      options: {
        ...sumOptions,
        type: font('Text style', {
          ...sumOptions.type('type'),
          value: ['Body1'],
        }),
      },
    },
    [],
  ),
]);

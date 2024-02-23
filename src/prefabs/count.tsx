import { prefab, Icon, font } from '@betty-blocks/component-sdk';
import { Count } from './structures/Count';
import { countOptions } from './structures/Count/options';

const attr = {
  icon: Icon.LabelIcon,
  category: 'Local',
  keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};

export default prefab('Count', attr, undefined, [
  Count(
    {
      options: {
        ...countOptions,
        type: font('Text style', {
          ...countOptions.type('type'),
          value: ['Body1'],
        }),
      },
    },
    [],
  ),
]);

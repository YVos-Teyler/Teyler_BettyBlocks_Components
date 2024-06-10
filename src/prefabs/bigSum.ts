import { prefab, Icon, font } from '@betty-blocks/component-sdk';
import { BigSum } from './structures/BigSum';
import { bigSumOptions } from './structures/BigSum/options';

const attr = {
  icon: Icon.LabelIcon,
  category: 'Local',
  keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};

export default prefab('BigSum', attr, undefined, [
  BigSum(
    {
      options: {
        ...bigSumOptions,
        type: font('Text style', {
          ...bigSumOptions.type('type'),
          value: ['Body1'],
        }),
      },
    },
    [],
  ),
]);

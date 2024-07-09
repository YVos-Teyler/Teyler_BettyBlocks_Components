import { prefab, Icon, font } from '@betty-blocks/component-sdk';
import { Chart } from './structures';
import { chartOptions } from './structures/Chart/options';

const attr = {
  icon: Icon.FormIcon,
  category: 'Local',
  keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};

export default prefab('Chart', attr, undefined, [
  Chart(
    {
      options: {
        ...chartOptions,
        type: font('Text style', {
          ...chartOptions.type('type'),
          value: ['Body1'],
        }),
      },
    },
    [],
  ),
]);

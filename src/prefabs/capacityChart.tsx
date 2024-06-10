import { prefab, Icon, font } from '@betty-blocks/component-sdk';
import { CapacityChart } from './structures';
import { capacityChartOptions } from './structures/CapacityChart/options';

const attr = {
  icon: Icon.LabelIcon,
  category: 'Local',
  keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};

export default prefab('CapacityChart', attr, undefined, [
  CapacityChart(
    {
      options: {
        ...capacityChartOptions,
        type: font('Text style', {
          ...capacityChartOptions.type('type'),
          value: ['Body1'],
        }),
      },
    },
    [],
  ),
]);

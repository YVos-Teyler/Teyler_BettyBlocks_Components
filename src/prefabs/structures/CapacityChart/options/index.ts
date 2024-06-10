import {
  variable,
  font,
  option,
  sizes,
  toggle,
  ThemeColor,
  color,
  modelAndRelation,
  filter,
  property,
  hideIf,
} from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Styling',
    expanded: false,
    members: ['textColor', 'fontWeight', 'useInnerHtml'],
  },
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const capacityChartOptions = {
  title: variable('Titel', {
    value: ['Chart title'],
  }),
  model: modelAndRelation('Model', { value: '' }),
  filter: filter('Filter', {
    value: {},
    configuration: {
      dependsOn: 'model',
    },
  }),
  orderBy: property('Order by', {
    value: '',
    configuration: {
      dependsOn: 'model',
    },
  }),
  order: option('CUSTOM', {
    label: 'Sort order',
    value: 'asc',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      dependsOn: 'model',
      condition: hideIf('orderBy', 'EQ', ''),
      allowedInput: [
        { name: 'Ascending', value: 'asc' },
        { name: 'Descending', value: 'desc' },
      ],
    },
  }),
  datasetProperty: property('Dataset Label Property', {
    value: '',
    configuration: {
      dependsOn: 'model'
    },
  }),
  labelProperty: property('X axis Property', {
    value: '',
    configuration: {
      dependsOn: 'model'
    },
  }),
  valueProperty: property('Value Property', {
    value: '',
    configuration: {
      dependsOn: 'model',
      allowedKinds: ['INTEGER', 'DECIMAL'],
    },
  }),
  datasetTypeProperty: property('dataset Type Property', {
    value: '',
    configuration: {
      dependsOn: 'model'
    },
  }),
  axisIDProperty: property('Y Axis ID Property', {
    value: '',
    configuration: {
      dependsOn: 'model'
    },
  }),
  axisPositionProperty: property('Axis position Property', {
    value: '',
    configuration: {
      dependsOn: 'model'
    },
  }),
  axisStackedProperty: property('Axis stacked Property', {
    value: '',
    configuration: {
      dependsOn: 'model'
    },
  }),
  datasetStackProperty: property('dataset stack Property', {
    value: '',
    configuration: {
      dependsOn: 'model'
    },
  }),


  chartType: option('CUSTOM', {
    label: 'Chart type',
    value: 'bar',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'Bar', value: 'bar' },
        { name: 'Line', value: 'line' },
        { name: 'Pie', value: 'pie' },
      ],
    },
  }),

  useInnerHtml: toggle('Display Rich Text', {
    value: false,
  }),
  type: font('Text style', { value: ['Title2'] }),
  textAlignment: option('CUSTOM', {
    label: 'Text Alignment',
    value: 'left',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'Left', value: 'left' },
        { name: 'Center', value: 'center' },
        { name: 'Right', value: 'right' },
      ],
    },
  }),
  outerSpacing: sizes('Outer space', {
    value: ['0rem', '0rem', '0rem', '0rem'],
  }),

  textColor: color('Text color', {
    value: ThemeColor.BLACK,
  }),

  fontWeight: option('CUSTOM', {
    label: 'Font weight',
    value: '400',
    configuration: {
      as: 'DROPDOWN',
      dataType: 'string',
      allowedInput: [
        { name: '[Theme Weight]', value: '[Inherit]' },
        { name: '100', value: '100' },
        { name: '200', value: '200' },
        { name: '300', value: '300' },
        { name: '400', value: '400' },
        { name: '500', value: '500' },
        { name: '600', value: '600' },
        { name: '700', value: '700' },
        { name: '800', value: '800' },
        { name: '900', value: '900' },
      ],
    },
  }),

  ...advanced('Text'),
};

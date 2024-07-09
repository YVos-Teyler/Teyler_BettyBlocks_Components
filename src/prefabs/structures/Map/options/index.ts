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
  size,
} from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Map',
    expanded: true,
    members: [
      'model', 
      'filter', 
      'orderBy', 
      'order', 
      'dataFormat', 
      'geometry', 
      'geojsonLayer', 
      'layerGroup', 
      'layerLegendColor',
      'popupcontent',
    ],
  },
  {
    label: 'Options',
    expanded: true,
    members: [
      'centerLat',
      'centerLng',
      'defaultZoom',
      'legend',
      'fullscreen',
      'fitBoundsOnLoad',
      'userLocation',
      'ZoomToUserLocation',
    ],
  },
  {
    label: 'Baselayers',
    expanded: true,
    members: [
      'baselayerLuchtfoto', 
      'baselayerBrtStandaard', 
      'baselayerBrtGrijs', 
      'baselayerBrtPastel', 
      'baselayerBrtWater',
      'baselayerBgt',
    ],
  },
  {
    label: 'Sizing',
    expanded: true,
    members: ['height', 'width'],
  },
];


export const mapOptions = {
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

  dataFormat: option('CUSTOM', {
    label: 'Data Format',
    value: 'features',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'Features', value: 'features' },
        { name: 'Layers', value: 'layers' },
      ],
    },
  }),
  geometry: property('Geometry', {
    value: '',
    configuration: {
      dependsOn: 'model',
      condition: { 
        type: 'SHOW', 
        option: 'dataFormat', 
        comparator: 'EQ', 
        value: 'features'
      }
    },
  }),
  geojsonLayer: property('Geojson', {
    value: '',
    configuration: {
      dependsOn: 'model',
      condition: { 
        type: 'SHOW', 
        option: 'dataFormat', 
        comparator: 'EQ', 
        value: 'layers'
      }
    },
  }),
  layerGroup: property('Layer name', {
    value: '',
    configuration: {
      dependsOn: 'model',
    },
  }),
  layerLegendColor: property('Layer Legend color', {
    value: '',
    configuration: {
      dependsOn: 'model',
    },
  }),
  popupcontent: property('Popup content', {
    value: '',
    configuration: {
      dependsOn: 'model',
      condition: { 
        type: 'SHOW', 
        option: 'dataFormat', 
        comparator: 'EQ', 
        value: 'features'
      }
    },
  }),


  centerLat: variable('Default center Latitude', {
    value: [ '52.3867431' ],
  }),
  centerLng: variable('Default center Longituede', {
    value: [ '4.6347241' ],
  }),
  defaultZoom: variable('Default zoom', {
    value: [ '10' ],
  }),

  fullscreen: toggle('Fullscreen', {
    value: true,
  }),
  legend: toggle('Legenda', {
    value: true,
  }),
  fitBoundsOnLoad: toggle('Fit bounds on load', {
    value: true,
  }),
  userLocation: toggle('Display User location', {
    value: false,
  }),
  ZoomToUserLocation: toggle('Zoom to User location', {
    value: false,
    configuration: {
      condition: { 
        type: 'SHOW', 
        option: 'userLocation', 
        comparator: 'EQ', 
        value: true
      }
    },
  }),

  baselayerLuchtfoto: toggle('Luchtfoto', {
    value: true,
  }),
  baselayerBrtStandaard: toggle('Brt standaard', {
    value: true,
  }),
  baselayerBrtGrijs: toggle('Brt grijs', {
    value: true,
  }),
  baselayerBrtPastel: toggle('Brt pastel', {
    value: true,
  }),
  baselayerBrtWater: toggle('Brt water', {
    value: true,
  }),
  baselayerBgt: toggle('BGT', {
    value: false,
  }),

 
 
  height: size('Height', {
    value: '100%',
    configuration: {
      as: 'UNIT',
    },
  }),
  width: size('Width', {
    value: '100%',
    configuration: {
      as: 'UNIT',
    },
  }),
  
};

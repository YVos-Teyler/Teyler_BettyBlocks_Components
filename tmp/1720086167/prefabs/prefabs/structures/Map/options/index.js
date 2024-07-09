"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.categories = [
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
            'popupcontent'
        ],
    },
    {
        label: 'Options',
        expanded: true,
        members: [
            'fullscreen',
            'fitBoundsOnLoad',
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
exports.mapOptions = {
    model: component_sdk_1.modelAndRelation('Model', { value: '' }),
    filter: component_sdk_1.filter('Filter', {
        value: {},
        configuration: {
            dependsOn: 'model',
        },
    }),
    orderBy: component_sdk_1.property('Order by', {
        value: '',
        configuration: {
            dependsOn: 'model',
        },
    }),
    order: component_sdk_1.option('CUSTOM', {
        label: 'Sort order',
        value: 'asc',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            dependsOn: 'model',
            condition: component_sdk_1.hideIf('orderBy', 'EQ', ''),
            allowedInput: [
                { name: 'Ascending', value: 'asc' },
                { name: 'Descending', value: 'desc' },
            ],
        },
    }),
    dataFormat: component_sdk_1.option('CUSTOM', {
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
    geometry: component_sdk_1.property('Geometry', {
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
    geojsonLayer: component_sdk_1.property('Geojson', {
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
    layerGroup: component_sdk_1.property('Layer name', {
        value: '',
        configuration: {
            dependsOn: 'model',
        },
    }),
    popupcontent: component_sdk_1.property('Popup content', {
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
    fullscreen: component_sdk_1.toggle('Fullscreen', {
        value: 'true',
    }),
    fitBoundsOnLoad: component_sdk_1.toggle('Fit bounds on load', {
        value: 'true',
    }),
    userLocation: component_sdk_1.toggle('Display User location', {
        value: 'false',
    }),
    baselayerLuchtfoto: component_sdk_1.toggle('Luchtfoto', {
        value: 'true',
    }),
    baselayerBrtStandaard: component_sdk_1.toggle('Brt standaard', {
        value: 'true',
    }),
    baselayerBrtGrijs: component_sdk_1.toggle('Brt grijs', {
        value: 'true',
    }),
    baselayerBrtPastel: component_sdk_1.toggle('Brt pastel', {
        value: 'true',
    }),
    baselayerBrtWater: component_sdk_1.toggle('Brt water', {
        value: 'true',
    }),
    baselayerBgt: component_sdk_1.toggle('BGT', {
        value: 'true',
    }),
    height: component_sdk_1.size('Height', {
        value: '100%',
        configuration: {
            as: 'UNIT',
        },
    }),
    width: component_sdk_1.size('Width', {
        value: '100%',
        configuration: {
            as: 'UNIT',
        },
    }),
};

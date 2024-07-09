"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.categories = [
    {
        label: 'Map',
        expanded: true,
        members: ['model', 'filer', 'orderBy', 'order', 'dataFormat', 'geometry', 'geojsonLayer', 'layerGroup', 'popupcontent'],
    },
    {
        label: 'Sizing',
        expanded: true,
        members: ['height', 'width', 'outerSpacing', 'innerSpacing'],
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
    layerGroup: component_sdk_1.property('Layer', {
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
    height: component_sdk_1.size('Height', {
        value: '25rem',
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
    outerSpacing: component_sdk_1.sizes('Outer space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
    }),
    innerSpacing: component_sdk_1.sizes('Inner space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
    }),
};

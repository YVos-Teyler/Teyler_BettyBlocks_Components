"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capacityChartOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
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
exports.capacityChartOptions = {
    title: component_sdk_1.variable('Titel', {
        value: ['Chart title'],
    }),
    model: component_sdk_1.modelAndRelation('Model', { value: '' }),
    filter: component_sdk_1.filter('Filter', {
        value: {},
        configuration: {
            dependsOn: 'model',
        },
    }),
    orderBy: component_sdk_1.property('Order', {
        value: '',
        configuration: {
            dependsOn: 'model',
        },
    }),
    datasetProperty: component_sdk_1.property('Dataset Property', {
        value: '',
        configuration: {
            dependsOn: 'model'
        },
    }),
    labelProperty: component_sdk_1.property('Label Property', {
        value: '',
        configuration: {
            dependsOn: 'model'
        },
    }),
    valueProperty: component_sdk_1.property('Value Property', {
        value: '',
        configuration: {
            dependsOn: 'model',
            allowedKinds: ['INTEGER', 'DECIMAL'],
        },
    }),
    datasetTypeProperty: component_sdk_1.property('Value Property', {
        value: '',
        configuration: {
            dependsOn: 'model'
        },
    }),
    chartType: component_sdk_1.option('CUSTOM', {
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
    useInnerHtml: component_sdk_1.toggle('Display Rich Text', {
        value: false,
    }),
    type: component_sdk_1.font('Text style', { value: ['Title2'] }),
    textAlignment: component_sdk_1.option('CUSTOM', {
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
    outerSpacing: component_sdk_1.sizes('Outer space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
    }),
    textColor: component_sdk_1.color('Text color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    fontWeight: component_sdk_1.option('CUSTOM', {
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
    ...advanced_1.advanced('Text'),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingInputOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Styling',
        expanded: false,
        members: [
            'hideLabel',
            'emptyColor',
            'filledColor',
            'helperColor',
            'errorColor',
            'labelColor',
        ],
    },
    {
        label: 'Validation Options',
        expanded: false,
        members: ['required', 'validationValueMissing'],
    },
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.ratingInputOptions = {
    actionVariableId: component_sdk_1.option('ACTION_JS_VARIABLE', {
        label: 'Action input variable',
        value: '',
        configuration: {
            condition: component_sdk_1.showIf('property', 'EQ', ''),
        },
    }),
    property: component_sdk_1.property('Property', {
        value: '',
        configuration: {
            allowedKinds: ['DECIMAL'],
            disabled: true,
            condition: component_sdk_1.hideIf('property', 'EQ', ''),
        },
    }),
    hideLabel: component_sdk_1.toggle('Hide label'),
    label: component_sdk_1.variable('Label', { value: ['Select'] }),
    value: component_sdk_1.variable('Value', { value: [''] }),
    required: component_sdk_1.toggle('Required'),
    validationValueMissing: component_sdk_1.variable('Validation error text', {
        value: ['This value is required'],
    }),
    disabled: component_sdk_1.toggle('Disabled'),
    readonly: component_sdk_1.toggle('Is read only'),
    helperText: component_sdk_1.variable('Helper text', { value: [''] }),
    numberOfIcons: component_sdk_1.dropdown('Number of icons', [
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
        ['7', '7'],
        ['8', '8'],
        ['9', '9'],
        ['10', '10'],
    ], {
        value: '5',
    }),
    precision: component_sdk_1.buttongroup('Precision', [
        ['Half', '0.5'],
        ['Full', '1.0'],
    ], {
        value: '1.0',
    }),
    size: component_sdk_1.buttongroup('Size', [
        ['Small', 'small'],
        ['Medium', 'medium'],
        ['Large', 'large'],
        ['Custom', 'custom'],
    ], {
        value: 'medium',
    }),
    customSize: component_sdk_1.size('Custom size', {
        value: '',
        configuration: {
            as: 'UNIT',
            condition: {
                type: 'SHOW',
                option: 'size',
                comparator: 'EQ',
                value: 'custom',
            },
        },
    }),
    outerSpacing: component_sdk_1.sizes('Outer space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
    }),
    icon: component_sdk_1.icon('Icon', { value: 'Star' }),
    emptyColor: component_sdk_1.color('Empty icon color', {
        value: component_sdk_1.ThemeColor.LIGHT,
    }),
    filledColor: component_sdk_1.color('Filled icon color', {
        value: component_sdk_1.ThemeColor.WARNING,
    }),
    helperColor: component_sdk_1.color('Helper color', {
        value: component_sdk_1.ThemeColor.ACCENT_2,
    }),
    errorColor: component_sdk_1.color('Error color', {
        value: component_sdk_1.ThemeColor.DANGER,
    }),
    labelColor: component_sdk_1.color('Label color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    ...advanced_1.advanced('RatingInput'),
};

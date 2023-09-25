"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chipOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Styling',
        expanded: false,
        members: ['font', 'color', 'textColor'],
    },
    {
        label: 'Spacing',
        expanded: false,
        members: ['margin'],
    },
    {
        label: 'State',
        expanded: false,
        members: ['disabled'],
    },
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.chipOptions = {
    label: component_sdk_1.variable('Label', {
        value: ['Label'],
    }),
    property: component_sdk_1.property('Styling property', {
        value: '',
    }),
    content: component_sdk_1.variable('Style variable', {
        value: ['Primary'],
        configuration: { as: 'MULTILINE', allowPropertyName: true },
    }),
    disabled: component_sdk_1.toggle('Disabled', {
        value: false,
    }),
    variant: component_sdk_1.option('CUSTOM', {
        label: 'Variant',
        value: 'default',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'Default', value: 'default' },
                { name: 'Outlined', value: 'outlined' },
            ],
        },
    }),
    size: component_sdk_1.option('CUSTOM', {
        value: 'medium',
        label: 'Size',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'Small', value: 'small' },
                { name: 'Medium', value: 'medium' },
            ],
        },
    }),
    font: component_sdk_1.font('Text style', { value: 'Body1' }),
    color: component_sdk_1.color('Color', {
        value: component_sdk_1.ThemeColor.PRIMARY,
    }),
    textColor: component_sdk_1.color('Text color', {
        value: component_sdk_1.ThemeColor.WHITE,
    }),
    avatarType: component_sdk_1.option('CUSTOM', {
        label: 'Avatar type',
        value: 'icon',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'Icon', value: 'icon' },
                { name: 'Text', value: 'text' },
                { name: 'Image', value: 'image' },
            ],
        },
    }),
    startIcon: component_sdk_1.icon('Start Icon', {
        value: 'None',
        configuration: {
            condition: component_sdk_1.showIf('avatarType', 'EQ', 'icon'),
        },
    }),
    avatar: component_sdk_1.text('Avatar text', {
        value: '',
        configuration: {
            condition: component_sdk_1.showIf('avatarType', 'EQ', 'text'),
        },
    }),
    imgUrl: component_sdk_1.variable('Image url', {
        value: [],
        configuration: {
            condition: component_sdk_1.showIf('avatarType', 'EQ', 'image'),
        },
    }),
    margin: component_sdk_1.sizes('Outer space', {
        value: ['M', 'M', 'M', 'M'],
    }),
    ...advanced_1.advanced('Chip'),
};

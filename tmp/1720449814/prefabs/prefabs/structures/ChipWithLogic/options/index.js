"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chipOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Styling',
        expanded: false,
        members: ['font', 'textColor'],
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
    backgroundColor: component_sdk_1.variable('Background color', {
        value: [''],
    }),
    disabled: component_sdk_1.toggle('Disabled', {
        value: false,
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
    hover: component_sdk_1.toggle('Hover feedback', {
        value: false,
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Styling',
        expanded: false,
        members: [
            'titleFont',
            'font',
            'textColor',
            'iconColor',
            'background',
            'borderColor',
        ],
    },
    {
        label: 'Alignment',
        expanded: false,
        members: ['horizontalAlignment', 'verticalAlignment'],
    },
    {
        label: 'Spacing',
        expanded: false,
        members: ['outerSpacing'],
    },
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.alertOptions = {
    visible: component_sdk_1.toggle('Toggle visibility', {
        value: true,
        configuration: { as: 'VISIBILITY' },
    }),
    titleText: component_sdk_1.variable('Title text', {
        value: [''],
    }),
    allowTitleServerResponse: component_sdk_1.toggle('Allow to overwrite by the server response', {
        value: false,
    }),
    bodyText: component_sdk_1.variable('Body text', {
        value: ['Type your content here...'],
    }),
    allowTextServerResponse: component_sdk_1.toggle('Allow to overwrite by the server response', {
        value: false,
    }),
    titleFont: component_sdk_1.font('Title text style', { value: 'Body1' }),
    font: component_sdk_1.font('Body text style', { value: 'Body1' }),
    textColor: component_sdk_1.color('Text color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    iconColor: component_sdk_1.color('Icon color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    background: component_sdk_1.color('Background color', {
        value: component_sdk_1.ThemeColor.SUCCESS,
    }),
    borderColor: component_sdk_1.color('Border color', {
        value: component_sdk_1.ThemeColor.TRANSPARENT,
    }),
    icon: component_sdk_1.icon('Icon', {
        value: 'None',
    }),
    collapsable: component_sdk_1.toggle('Collapsable', {
        value: false,
    }),
    horizontalAlignment: component_sdk_1.buttongroup('Horizontal Alignment', [
        ['Left', 'flex-start'],
        ['Center', 'center'],
        ['Right', 'flex-end'],
    ], {
        value: 'flex-start',
        configuration: {
            dataType: 'string',
            condition: component_sdk_1.hideIf('collapsable', 'EQ', true),
        },
    }),
    verticalAlignment: component_sdk_1.buttongroup('Vertical Alignment', [
        ['Top', 'flex-start'],
        ['Center', 'center'],
        ['Bottom', 'flex-end'],
        ['Justified', 'stretch'],
    ], {
        value: 'stretch',
        configuration: {
            dataType: 'string',
        },
    }),
    outerSpacing: component_sdk_1.sizes('Outer space', {
        value: ['0rem', '0rem', 'M', '0rem'],
    }),
    ...advanced_1.advanced('Alert'),
};

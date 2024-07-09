"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.tabOptions = {
    label: component_sdk_1.variable('Tab label', {
        value: ['Tab'],
        configuration: {
            showOnDrop: true,
        },
    }),
    height: component_sdk_1.size('Height', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    width: component_sdk_1.size('Width', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    icon: component_sdk_1.icon('Icon', {
        value: 'None',
        configuration: {
            showOnDrop: true,
        },
    }),
    iconAlignment: component_sdk_1.option('CUSTOM', {
        label: 'Icon Alignment',
        value: 'top',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'Left', value: 'left' },
                { name: 'Top', value: 'top' },
                { name: 'Right', value: 'right' },
                { name: 'Bottom', value: 'bottom' },
            ],
            condition: component_sdk_1.hideIf('icon', 'EQ', 'None'),
            showOnDrop: true,
        },
    }),
    disabled: component_sdk_1.toggle('Disabled', { value: false }),
    disabledRipple: component_sdk_1.toggle('Disable ripple', { value: false }),
    ...advanced_1.advanced('Tab'),
};

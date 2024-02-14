"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutSidebarLeftOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.layoutSidebarLeftOptions = {
    maxRowWidth: component_sdk_1.option('CUSTOM', {
        label: 'Width',
        value: 'XL',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'S', value: 'S' },
                { name: 'M', value: 'M' },
                { name: 'L', value: 'L' },
                { name: 'XL', value: 'XL' },
                { name: 'Full', value: 'Full' },
            ],
        },
    }),
    rowHeight: component_sdk_1.text('Height', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    mainWidth: component_sdk_1.text('Main Width', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    gap: component_sdk_1.text('Gap', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    backgroundColor: component_sdk_1.color('Background color', { value: component_sdk_1.ThemeColor.TRANSPARENT }),
    outerSpacing: component_sdk_1.sizes('Outer space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
    }),
    ...advanced_1.advanced('Row'),
};

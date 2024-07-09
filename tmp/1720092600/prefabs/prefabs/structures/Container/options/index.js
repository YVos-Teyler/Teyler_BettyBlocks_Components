"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.containerOptions = {
    maxWidth: component_sdk_1.option('CUSTOM', {
        label: 'Max width',
        value: 'lg',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'XS', value: 'xs' },
                { name: 'SM', value: 'sm' },
                { name: 'MD', value: 'md' },
                { name: 'LG', value: 'lg' },
                { name: 'XL', value: 'xl' },
                { name: 'None', value: 'false' },
            ],
        },
    }),
    disableGutters: component_sdk_1.toggle('Disable gutters', { value: false }),
    backgroundColor: component_sdk_1.color('Background color', { value: component_sdk_1.ThemeColor.TRANSPARENT }),
    height: component_sdk_1.text('Height', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    ...advanced_1.advanced('Container'),
};

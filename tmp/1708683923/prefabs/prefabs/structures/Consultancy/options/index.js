"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultancyOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.consultancyOptions = {
    content: component_sdk_1.variable('Content', {
        value: ['Hello world'],
        configuration: { as: 'MULTILINE' },
    }),
    tag: component_sdk_1.text('Tag', {
        value: 'h1',
        configuration: {
            as: 'DROPDOWN',
            allowedInput: [
                { value: 'h1', name: 'h1' },
                { value: 'h2', name: 'h2' }
            ]
        }
    }),
    ...advanced_1.advanced('Consultancy'),
};

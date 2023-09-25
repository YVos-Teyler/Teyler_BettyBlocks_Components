"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textWithHoverOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Styling',
        expanded: false,
        members: ['textColor', 'fontWeight', 'useInnerHtml'],
    },
    {
        label: 'Hover',
        expanded: false,
        members: ['hoverActive', 'hoverTextColor', 'hoverBackgroundColor', 'hoverScale'],
    },
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.textWithHoverOptions = {
    content: component_sdk_1.variable('Content', {
        value: [],
        configuration: { as: 'MULTILINE', allowPropertyName: true },
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
        value: ['M', 'M', 'M', 'M'],
    }),
    innerSpacing: component_sdk_1.sizes('Inner space', {
        value: ['M', 'M', 'M', 'M'],
    }),
    linkType: component_sdk_1.option('CUSTOM', {
        label: 'Link to',
        value: 'internal',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'Internal page', value: 'internal' },
                { name: 'External page', value: 'external' },
            ],
        },
    }),
    linkTarget: component_sdk_1.option('CUSTOM', {
        value: '_self',
        label: 'Open in',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'Current Tab', value: '_self' },
                { name: 'New Tab', value: '_blank' },
            ],
        },
    }),
    linkTo: component_sdk_1.endpoint('Page', {
        value: '',
        configuration: {
            condition: component_sdk_1.showIf('linkType', 'EQ', 'internal'),
        },
    }),
    linkToExternal: component_sdk_1.variable('URL', {
        value: [''],
        configuration: {
            placeholder: 'Starts with https:// or http://',
            condition: component_sdk_1.showIf('linkType', 'EQ', 'external'),
        },
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
    hoverActive: component_sdk_1.toggle('Hover effect active', {
        value: false,
    }),
    hoverTextColor: component_sdk_1.color('Text color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    hoverBackgroundColor: component_sdk_1.color('Background color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    hoverScale: component_sdk_1.number('Scale', {
        value: 5,
    }),
    ...advanced_1.advanced('Text'),
};

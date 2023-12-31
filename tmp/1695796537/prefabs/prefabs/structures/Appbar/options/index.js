"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appBarOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Logo',
        expanded: true,
        members: ['type', 'urlFileSource', 'logoSource', 'logoWidth', 'endpoint'],
    },
    {
        label: 'Styling',
        expanded: false,
        members: [
            'position',
            'height',
            'appBarVariant',
            'elevation',
            'square',
            'toolbarVariant',
            'alignItems',
            'backgroundColor',
            'customBgColor',
            'font',
            'color',
        ],
    },
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.appBarOptions = {
    backgroundColor: component_sdk_1.color('Background color', { value: component_sdk_1.ThemeColor.PRIMARY }),
    color: component_sdk_1.color('Text color', { value: component_sdk_1.ThemeColor.WHITE }),
    height: component_sdk_1.size('Height', { value: '', configuration: { as: 'UNIT' } }),
    font: component_sdk_1.font('Title text style', { value: 'Body1' }),
    position: component_sdk_1.option('CUSTOM', {
        label: 'Position',
        value: 'static',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                {
                    name: 'Fixed',
                    value: 'fixed',
                },
                {
                    name: 'Absolute',
                    value: 'absolute',
                },
                {
                    name: 'Sticky',
                    value: 'sticky',
                },
                {
                    name: 'Static',
                    value: 'static',
                },
                {
                    name: 'Relative',
                    value: 'relative',
                },
            ],
        },
    }),
    title: component_sdk_1.variable('Title', { value: ['Nav Bar'] }),
    customBgColor: component_sdk_1.variable('Custom background color (HEX)', { value: [''] }),
    type: component_sdk_1.option('CUSTOM', {
        label: 'Media type',
        value: 'url',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'Image', value: 'img' },
                { name: 'URL', value: 'url' },
            ],
        },
    }),
    logoSource: component_sdk_1.option('PUBLIC_FILE', {
        label: 'Logo',
        value: '',
        configuration: {
            mediaType: 'IMAGE',
            allowedExtensions: ['image/*'],
            condition: component_sdk_1.showIf('type', 'EQ', 'img'),
        },
    }),
    urlFileSource: component_sdk_1.variable('Source', {
        value: [''],
        configuration: {
            placeholder: 'Starts with https:// or http://',
            as: 'MULTILINE',
            condition: component_sdk_1.showIf('type', 'EQ', 'url'),
        },
    }),
    logoWidth: component_sdk_1.size('Logo Width', {
        value: '150px',
        configuration: { as: 'UNIT' },
    }),
    alignItems: component_sdk_1.option('CUSTOM', {
        label: 'Align items',
        value: 'right',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                {
                    name: 'Left',
                    value: 'left',
                },
                {
                    name: 'Right',
                    value: 'right',
                },
            ],
        },
    }),
    endpoint: component_sdk_1.endpoint('Page', { value: '' }),
    appBarVariant: component_sdk_1.option('CUSTOM', {
        label: 'Variant',
        value: 'flat',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                {
                    name: 'Flat',
                    value: 'flat',
                },
                {
                    name: 'Elevation',
                    value: 'elevation',
                },
                {
                    name: 'Outlined',
                    value: 'outlined',
                },
            ],
        },
    }),
    elevation: component_sdk_1.option('CUSTOM', {
        label: 'Elevation',
        value: '1',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                { name: '1', value: '1' },
                { name: '2', value: '2' },
                { name: '3', value: '3' },
                { name: '4', value: '4' },
                { name: '5', value: '5' },
                { name: '6', value: '6' },
                { name: '7', value: '7' },
                { name: '8', value: '8' },
                { name: '9', value: '9' },
                { name: '10', value: '10' },
                { name: '11', value: '11' },
                { name: '12', value: '12' },
                { name: '13', value: '13' },
                { name: '14', value: '14' },
                { name: '15', value: '15' },
                { name: '16', value: '16' },
                { name: '17', value: '17' },
                { name: '18', value: '18' },
                { name: '19', value: '19' },
                { name: '20', value: '20' },
                { name: '21', value: '21' },
                { name: '22', value: '22' },
                { name: '23', value: '23' },
                { name: '24', value: '24' },
            ],
            condition: component_sdk_1.showIf('appBarVarient', 'EQ', 'elevation'),
        },
    }),
    square: component_sdk_1.toggle('Square', { value: true }),
    toolbarVariant: component_sdk_1.option('CUSTOM', {
        label: 'Size',
        value: 'regular',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                {
                    name: 'Regular',
                    value: 'regular',
                },
                {
                    name: 'Dense',
                    value: 'dense',
                },
            ],
        },
    }),
    ...advanced_1.advanced('AppBar'),
};

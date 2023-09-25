"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gridboxOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Alignment',
        expanded: true,
        members: ['alignment', 'valignment', 'gap'],
    },
    {
        label: 'Styling',
        expanded: false,
        members: ['innerSpacing', 'outerSpacing', 'transparent', 'height', 'width'],
    },
    {
        label: 'Positioning',
        expanded: false,
        members: ['position', 'top', 'right', 'bottom', 'left'],
    },
    {
        label: 'Background',
        expanded: false,
        members: [
            'backgroundColor',
            'backgroundColorAlpha',
            'backgroundUrl',
            'backgroundSize',
            'backgroundPosition',
            'backgroundRepeat',
            'backgroundAttachment',
            'borderColor',
            'borderWidth',
            'borderStyle',
            'borderRadius',
        ],
    },
    {
        label: 'Logic Option',
        expanded: false,
        members: ['displayLogic'],
    },
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute', 'emptyPlaceHolderText'],
    },
];
exports.gridboxOptions = {
    gridTemplateColumns: component_sdk_1.variable('Grid template colums', {
        value: ['none'],
    }),
    alignment: component_sdk_1.buttongroup('Alignment', [
        ['Left', 'start'],
        ['Center', 'center'],
        ['Right', 'end'],
    ], {
        value: 'none',
        configuration: {
            dataType: 'string',
        },
    }),
    valignment: component_sdk_1.buttongroup('Vertical alignment', [
        ['Top', 'start'],
        ['Center', 'center'],
        ['Bottom', 'end'],
    ], {
        value: 'none',
        configuration: {
            dataType: 'string',
        },
    }),
    gap: component_sdk_1.size('Gap', {
        value: '1rem',
        configuration: {
            as: 'UNIT',
        },
    }),
    displayLogic: component_sdk_1.displayLogic('Display logic', {
        value: {},
    }),
    transparent: component_sdk_1.toggle('Transparent', {
        value: false,
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
    outerSpacing: component_sdk_1.sizes('Outer space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
    }),
    innerSpacing: component_sdk_1.sizes('Inner space', {
        value: ['M', 'M', 'M', 'M'],
    }),
    position: component_sdk_1.buttongroup('Position', [
        ['Static', 'static'],
        ['Relative', 'relative'],
        ['Absolute', 'absolute'],
        ['Fixed', 'fixed'],
        ['Sticky', 'sticky'],
    ], {
        value: 'static',
        configuration: {
            dataType: 'string',
        },
    }),
    top: component_sdk_1.size('Top position', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    right: component_sdk_1.size('Right position', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    bottom: component_sdk_1.size('Bottom position', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    left: component_sdk_1.size('Left position', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    backgroundColor: component_sdk_1.color('Background color', {
        value: component_sdk_1.ThemeColor.TRANSPARENT,
    }),
    backgroundColorAlpha: component_sdk_1.option('NUMBER', {
        label: 'Background color opacity',
        value: 100,
    }),
    backgroundUrl: component_sdk_1.variable('Background url', {
        value: [''],
    }),
    backgroundSize: component_sdk_1.buttongroup('Background size', [
        ['Initial', 'initial'],
        ['Contain', 'contain'],
        ['Cover', 'cover'],
    ], {
        value: 'initial',
        configuration: {
            dataType: 'string',
        },
    }),
    backgroundPosition: component_sdk_1.dropdown('Background position', [
        ['Left top', 'left top'],
        ['Left center', 'left center'],
        ['Left bottom', 'left bottom'],
        ['Center top', 'center top'],
        ['Center center', 'center center'],
        ['Center bottom', 'center bottom'],
        ['Right top', 'right top'],
        ['Right center', 'right center'],
        ['Right bottom', 'right bottom'],
    ], {
        value: 'center center',
        configuration: {
            dataType: 'string',
        },
    }),
    backgroundRepeat: component_sdk_1.buttongroup('Background repeat', [
        ['None', 'no-repeat'],
        ['X', 'repeat-x'],
        ['Y', 'repeat-y'],
        ['All', 'repeat'],
    ], {
        value: 'no-repeat',
        configuration: {
            dataType: 'string',
        },
    }),
    backgroundAttachment: component_sdk_1.buttongroup('Background attachment', [
        ['Inherit', 'inherit'],
        ['Scroll', 'scroll'],
        ['Fixed', 'fixed'],
    ], {
        value: 'inherit',
        configuration: {
            dataType: 'string',
        },
    }),
    borderColor: component_sdk_1.color('Border color', {
        value: component_sdk_1.ThemeColor.TRANSPARENT,
    }),
    borderWidth: component_sdk_1.size('Border thickness', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    borderStyle: component_sdk_1.buttongroup('Border style', [
        ['None', 'none'],
        ['Solid', 'solid'],
        ['Dashed', 'dashed'],
        ['Dotted', 'dotted'],
    ], {
        value: 'solid',
        configuration: {
            dataType: 'string',
        },
    }),
    borderRadius: component_sdk_1.size('Border radius', {
        value: '',
        configuration: {
            as: 'UNIT',
        },
    }),
    emptyPlaceHolderText: component_sdk_1.variable('Empty placeholder text', {
        value: ['GridBox'],
    }),
    ...advanced_1.advanced('Box'),
};

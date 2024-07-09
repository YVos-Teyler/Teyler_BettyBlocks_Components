"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.richTextOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const styles_1 = require("./styles");
const validation_1 = require("./validation");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Toolbar options',
        expanded: false,
        members: [
            'showBold',
            'showItalic',
            'showUnderlined',
            'showStrikethrough',
            'showCodeInline',
            'showCodeBlock',
            'showNumberedList',
            'showBulletedList',
            'showLeftAlign',
            'showCenterAlign',
            'showRightAlign',
            'showJustifyAlign',
        ],
    },
    {
        label: 'Styling',
        expanded: false,
        members: [
            'hideLabel',
            'backgroundColor',
            'borderColor',
            'borderHoverColor',
            'borderFocusColor',
            'buttonColor',
            'buttonHoverColor',
            'buttonActiveColor',
            'buttonDisabledColor',
            'labelColor',
            'placeholderColor',
            'helperColor',
            'errorColor',
        ],
    },
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.richTextOptions = {
    actionVariableId: component_sdk_1.option('ACTION_JS_VARIABLE', {
        label: 'Action input variable',
        value: '',
        configuration: {
            condition: component_sdk_1.showIf('property', 'EQ', ''),
        },
    }),
    property: component_sdk_1.property('Property', {
        value: '',
        configuration: {
            allowedKinds: ['TEXT', 'URL', 'IBAN', 'STRING'],
            disabled: true,
            condition: component_sdk_1.hideIf('property', 'EQ', ''),
        },
    }),
    label: component_sdk_1.variable('Label', { value: [''] }),
    value: component_sdk_1.variable('Value', { value: [''] }),
    showBold: component_sdk_1.toggle('Bold', { value: true }),
    showItalic: component_sdk_1.toggle('Italic', { value: true }),
    showUnderlined: component_sdk_1.toggle('Underlined', { value: true }),
    showStrikethrough: component_sdk_1.toggle('Strikethrough', { value: true }),
    showCodeInline: component_sdk_1.toggle('Code inline', { value: true }),
    showCodeBlock: component_sdk_1.toggle('Code block', { value: true }),
    showNumberedList: component_sdk_1.toggle('NumberedList', { value: true }),
    showBulletedList: component_sdk_1.toggle('BulletedList', { value: true }),
    showLeftAlign: component_sdk_1.toggle('Left alignment', { value: true }),
    showCenterAlign: component_sdk_1.toggle('Center alignment', { value: true }),
    showRightAlign: component_sdk_1.toggle('Right alignment', { value: true }),
    showJustifyAlign: component_sdk_1.toggle('Justify alignment', { value: true }),
    ...validation_1.validation,
    ...styles_1.styles,
    ...advanced_1.advanced('RichTextEditor'),
};

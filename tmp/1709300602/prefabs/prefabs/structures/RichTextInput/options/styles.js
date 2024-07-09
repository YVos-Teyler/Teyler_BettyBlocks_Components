"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.styles = {
    height: component_sdk_1.size('Height', {
        value: '200px',
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
        value: ['S', '0rem', 'S', '0rem'],
    }),
    floatLabel: component_sdk_1.toggle('Place label above input', {
        value: true,
    }),
    hideLabel: component_sdk_1.toggle('Hide label'),
    backgroundColor: component_sdk_1.color('Background color', {
        value: component_sdk_1.ThemeColor.WHITE,
    }),
    borderColor: component_sdk_1.color('Border color', {
        value: component_sdk_1.ThemeColor.ACCENT_1,
    }),
    borderHoverColor: component_sdk_1.color('Border color (hover)', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    borderFocusColor: component_sdk_1.color('Border color (focus)', {
        value: component_sdk_1.ThemeColor.PRIMARY,
    }),
    buttonColor: component_sdk_1.color('Button color', {
        value: component_sdk_1.ThemeColor.DARK,
    }),
    buttonHoverColor: component_sdk_1.color('Button color (hover)', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    buttonActiveColor: component_sdk_1.color('Button color (active)', {
        value: component_sdk_1.ThemeColor.PRIMARY,
    }),
    buttonDisabledColor: component_sdk_1.color('Button color (disabled)', {
        value: component_sdk_1.ThemeColor.ACCENT_3,
    }),
    labelColor: component_sdk_1.color('Label color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    placeholderColor: component_sdk_1.color('Placeholder color', {
        value: component_sdk_1.ThemeColor.LIGHT,
    }),
    helperColor: component_sdk_1.color('Helper color', {
        value: component_sdk_1.ThemeColor.ACCENT_2,
    }),
    errorColor: component_sdk_1.color('Error color', {
        value: component_sdk_1.ThemeColor.DANGER,
    }),
};

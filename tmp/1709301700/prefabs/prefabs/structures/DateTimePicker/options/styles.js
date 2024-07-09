"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.styles = {
    margin: component_sdk_1.buttongroup('Margin', [
        ['None', 'none'],
        ['Dense', 'dense'],
        ['Normal', 'normal'],
    ], { value: 'normal' }),
    size: component_sdk_1.buttongroup('Size', [
        ['Medium', 'medium'],
        ['Small', 'small'],
    ], { value: 'medium' }),
    floatLabel: component_sdk_1.toggle('Place label above input', {
        value: true,
    }),
    fullWidth: component_sdk_1.toggle('Full width', { value: true }),
    variant: component_sdk_1.buttongroup('Picker Variant', [
        ['Dialog', 'dialog'],
        ['Inline', 'inline'],
        ['Static', 'static'],
    ], { value: 'inline' }),
    inputvariant: component_sdk_1.buttongroup('Variant', [
        ['Standard', 'standard'],
        ['Outlined', 'outlined'],
        ['Filled', 'filled'],
    ], { value: 'outlined' }),
    disableToolbar: component_sdk_1.toggle('Disable Toolbar', { value: false }),
    clearable: component_sdk_1.toggle('Clearable', {
        value: false,
        configuration: { condition: component_sdk_1.showIf('variant', 'EQ', 'dialog') },
    }),
    hideLabel: component_sdk_1.toggle('Hide label', {
        value: false,
    }),
    backgroundColor: component_sdk_1.color('Background color', {
        value: component_sdk_1.ThemeColor.WHITE,
    }),
    backgroundColorPopup: component_sdk_1.color('Background color popup', {
        value: component_sdk_1.ThemeColor.PRIMARY,
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
    labelColor: component_sdk_1.color('Label color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    textColor: component_sdk_1.color('Text color', {
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

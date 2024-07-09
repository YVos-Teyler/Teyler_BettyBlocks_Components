"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("./advanced");
const styles_1 = require("./styles");
const validation_1 = require("./validation");
exports.options = {
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
            allowedKinds: ['DATE'],
            disabled: true,
            allowFormatting: false,
            condition: component_sdk_1.hideIf('property', 'EQ', ''),
        },
    }),
    label: component_sdk_1.variable('Label', {
        value: [''],
        configuration: { allowFormatting: false, allowPropertyName: true },
    }),
    value: component_sdk_1.variable('Value', {
        value: [''],
        configuration: { allowFormatting: false },
    }),
    type: component_sdk_1.text('Type', {
        value: 'datetime',
        configuration: {
            condition: component_sdk_1.showIf('type', 'EQ', false),
        },
    }),
    autoComplete: component_sdk_1.toggle('Autocomplete', { value: true }),
    disabled: component_sdk_1.toggle('Disabled', { value: false }),
    placeholder: component_sdk_1.variable('Placeholder', { value: [] }),
    helperText: component_sdk_1.variable('Helper text', { value: [] }),
    timeFormat: component_sdk_1.text('Format', {
        value: 'MM/dd/yyyy HH:mm:ss',
        configuration: {
            placeholder: 'dd/MM/yyyy HH:mm:ss',
            condition: component_sdk_1.showIf('type', 'EQ', 'time'),
        },
    }),
    dateFormat: component_sdk_1.text('Format', {
        value: 'dd-MM-yyyy',
        configuration: {
            condition: component_sdk_1.showIf('type', 'EQ', 'date'),
        },
    }),
    datetimeFormat: component_sdk_1.text('Format', {
        value: 'MM/dd/yyyy HH:mm:ss',
        configuration: {
            placeholder: 'dd/MM/yyyy HH:mm:ss',
            condition: component_sdk_1.showIf('type', 'EQ', 'datetime'),
        },
    }),
    locale: component_sdk_1.buttongroup('Locale', [
        ['English', 'en'],
        ['Dutch', 'nl'],
    ], { value: 'en' }),
    use24HourClockTime: component_sdk_1.toggle('Use 24-hour format', { value: true }),
    disablePastDates: component_sdk_1.toggle('Disable past dates', { value: false }),
    closeOnSelect: component_sdk_1.toggle('Close picker after select', { value: true }),
    ...validation_1.validation,
    ...styles_1.styles,
    ...advanced_1.advanced,
};

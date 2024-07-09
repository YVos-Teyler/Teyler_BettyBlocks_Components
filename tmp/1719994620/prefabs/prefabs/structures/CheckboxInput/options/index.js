"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkboxInputOptions = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
const styles_1 = require("./styles");
const validation_1 = require("./validation");
exports.checkboxInputOptions = {
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
            allowedKinds: ['BOOLEAN'],
            disabled: true,
            condition: component_sdk_1.hideIf('property', 'EQ', ''),
        },
    }),
    label: component_sdk_1.variable('Label', {
        value: ['Checkbox'],
        configuration: { allowFormatting: false, allowPropertyName: true },
    }),
    value: component_sdk_1.variable('Value', { value: ['false'] }),
    disabled: component_sdk_1.toggle('Disabled'),
    helperText: component_sdk_1.variable('Helper text'),
    type: component_sdk_1.text('Type', {
        value: 'checkbox',
        configuration: { condition: component_sdk_1.showIf('actionVariableId', 'EQ', 'never') },
    }),
    position: component_sdk_1.option('CUSTOM', {
        value: 'end',
        label: 'Label position',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
                { name: 'Start', value: 'start' },
                { name: 'End', value: 'end' },
                { name: 'Top', value: 'top' },
                { name: 'Bottom', value: 'bottom' },
            ],
        },
    }),
    ...validation_1.validation,
    ...styles_1.styles,
    ...advanced_1.advanced('CheckboxInput'),
};

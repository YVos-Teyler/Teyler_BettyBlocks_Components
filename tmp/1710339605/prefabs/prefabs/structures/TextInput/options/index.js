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
            allowedKinds: ['TEXT', 'URL', 'IBAN', 'STRING'],
            disabled: true,
            condition: component_sdk_1.hideIf('property', 'EQ', ''),
        },
    }),
    label: component_sdk_1.variable('Label', {
        value: [''],
        configuration: { allowFormatting: false, allowPropertyName: true },
    }),
    value: component_sdk_1.variable('Value', { value: [''] }),
    ...validation_1.validation,
    ...styles_1.styles,
    ...advanced_1.advanced,
};

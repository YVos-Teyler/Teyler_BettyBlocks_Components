"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploadOptions = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const validation_1 = require("./validation");
const styles_1 = require("./styles");
const advanced_1 = require("./advanced");
exports.fileUploadOptions = {
    property: component_sdk_1.property('Property', {
        value: '',
        configuration: {
            allowedKinds: ['FILE'],
            disabled: true,
            condition: component_sdk_1.hideIf('property', 'EQ', ''),
        },
    }),
    label: component_sdk_1.variable('Label', {
        value: ['Select file(s)...'],
        configuration: { allowFormatting: false, allowPropertyName: true },
    }),
    value: component_sdk_1.property('Value'),
    disabled: component_sdk_1.toggle('Disabled', { value: false }),
    helperText: component_sdk_1.variable('Helper text', { value: [] }),
    ...validation_1.validation,
    ...styles_1.styles,
    ...advanced_1.advanced,
};

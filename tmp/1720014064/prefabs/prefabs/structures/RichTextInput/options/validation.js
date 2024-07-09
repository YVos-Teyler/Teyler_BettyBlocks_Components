"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.validation = {
    disabled: component_sdk_1.toggle('Disabled'),
    placeholder: component_sdk_1.variable('Placeholder'),
    helperText: component_sdk_1.variable('Helper text'),
    type: component_sdk_1.text('Type', {
        value: '',
        configuration: { condition: component_sdk_1.showIf('type', 'EQ', 'never') },
    }),
};

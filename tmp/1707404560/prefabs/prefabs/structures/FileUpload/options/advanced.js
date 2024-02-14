"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advanced = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.advanced = {
    nameAttribute: component_sdk_1.variable('name attribute', {
        value: [],
    }),
    dataComponentAttribute: component_sdk_1.variable('Test attribute', {
        value: ['FileUpload'],
    }),
    actionVariableId: component_sdk_1.option('ACTION_JS_VARIABLE', {
        label: 'Name',
        value: '',
        configuration: {
            condition: component_sdk_1.showIf('property', 'EQ', ''),
        },
    }),
};

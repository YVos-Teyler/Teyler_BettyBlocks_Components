"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const attributes = {
    category: 'CONTENT',
    icon: component_sdk_1.Icon.TextInputIcon,
};
const options = {
    content: component_sdk_1.variable('Content', { value: ['This is my first component!'] }),
};
exports.default = component_sdk_1.prefab('Test', attributes, undefined, [
    component_sdk_1.component('Test', { options }, []),
]);

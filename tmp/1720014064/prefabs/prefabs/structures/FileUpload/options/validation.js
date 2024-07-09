"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.validation = {
    required: component_sdk_1.toggle('Required'),
    hideDefaultError: component_sdk_1.toggle('Hide default error', {
        value: false,
    }),
    accept: component_sdk_1.variable('Accept files', {
        value: ['*'],
    }),
    maxFileSize: component_sdk_1.text('Max file size (mb)', {
        value: '',
    }),
    maxFileSizeMessage: component_sdk_1.variable('Invalid max file size message', {
        value: ['maximum size exceeded'],
    }),
};

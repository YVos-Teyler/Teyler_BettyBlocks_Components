"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Alert_1 = require("./structures/Alert");
const attributes = {
    category: 'CONTENT',
    icon: component_sdk_1.Icon.AlertIcon,
    keywords: ['Content', 'alert', 'notification'],
};
exports.default = component_sdk_1.prefab('Alert', attributes, undefined, [Alert_1.Alert({})]);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const structures_1 = require("./structures");
const attributes = {
    category: 'LAYOUT',
    icon: component_sdk_1.Icon.ContainerIcon,
    keywords: ['Layout', 'box'],
};
exports.default = component_sdk_1.prefab('Flexbox', attributes, undefined, [structures_1.Flexbox({})]);

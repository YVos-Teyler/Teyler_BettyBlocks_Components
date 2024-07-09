"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Div_1 = require("./structures/Div");
const attributes = {
    category: 'LAYOUT',
    icon: component_sdk_1.Icon.ContainerIcon,
    keywords: ['Layout', 'container'],
};
exports.default = component_sdk_1.prefab('Div', attributes, undefined, [Div_1.Div({})]);

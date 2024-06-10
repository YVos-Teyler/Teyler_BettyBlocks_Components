"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Container_1 = require("./structures/Container");
const LayoutContainer_1 = require("./structures/LayoutContainer");
const attributes = {
    category: 'LAYOUT',
    icon: component_sdk_1.Icon.ContainerIcon,
    keywords: ['Layout', 'container'],
};
exports.default = component_sdk_1.prefab('Layout Container', attributes, undefined, [
    LayoutContainer_1.LayoutContainer({}, [
        Container_1.Container({}), Container_1.Container({}), Container_1.Container({})
    ])
]);

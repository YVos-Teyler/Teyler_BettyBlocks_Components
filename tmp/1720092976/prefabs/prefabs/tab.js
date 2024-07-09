"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const structures_1 = require("./structures");
const attr = {
    icon: component_sdk_1.Icon.TabsIcon,
    category: 'Local',
    keywords: ['Navigation', 'tabs'],
};
exports.default = component_sdk_1.prefab('Tab', attr, undefined, [structures_1.Tab({}, [])]);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const structures_1 = require("./structures");
const attrs = {
    icon: component_sdk_1.Icon.DataList,
    category: 'DATA',
    keywords: ['Data', 'list', 'datalist', 'collection'],
};
exports.default = component_sdk_1.prefab('Data list', attrs, undefined, [structures_1.DataList({})]);

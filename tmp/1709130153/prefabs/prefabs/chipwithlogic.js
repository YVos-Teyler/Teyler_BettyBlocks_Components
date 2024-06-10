"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const ChipWithLogic_1 = require("./structures/ChipWithLogic");
const attr = {
    icon: component_sdk_1.Icon.ChipIcon,
    category: 'Local',
    keywords: ['Content', 'chip'],
};
exports.default = component_sdk_1.prefab('ChipWithLogic', attr, undefined, [ChipWithLogic_1.ChipWithLogic({}, [])]);

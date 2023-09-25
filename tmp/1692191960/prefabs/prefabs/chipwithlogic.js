"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Chip_1 = require("./structures/Chip");
const attr = {
    icon: component_sdk_1.Icon.ChipIcon,
    category: 'CONTENT',
    keywords: ['Content', 'chip'],
};
exports.default = component_sdk_1.prefab('Chip', attr, undefined, [Chip_1.Chip({}, [])]);

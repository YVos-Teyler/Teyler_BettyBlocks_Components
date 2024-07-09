"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const structures_1 = require("./structures");
const options_1 = require("./structures/Map/options");
const attr = {
    icon: component_sdk_1.Icon.LabelIcon,
    category: 'Local',
    keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};
exports.default = component_sdk_1.prefab('Map', attr, undefined, [
    structures_1.Map({
        options: {
            ...options_1.mapOptions
        },
    }, []),
]);

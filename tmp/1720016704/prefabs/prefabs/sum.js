"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Sum_1 = require("./structures/Sum");
const options_1 = require("./structures/Sum/options");
const attr = {
    icon: component_sdk_1.Icon.LabelIcon,
    category: 'Local',
    keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};
exports.default = component_sdk_1.prefab('Sum', attr, undefined, [
    Sum_1.Sum({
        options: {
            ...options_1.sumOptions,
            type: component_sdk_1.font('Text style', {
                ...options_1.sumOptions.type('type'),
                value: ['Body1'],
            }),
        },
    }, []),
]);

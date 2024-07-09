"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const BigSum_1 = require("./structures/BigSum");
const options_1 = require("./structures/BigSum/options");
const attr = {
    icon: component_sdk_1.Icon.LabelIcon,
    category: 'Local',
    keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};
exports.default = component_sdk_1.prefab('BigSum', attr, undefined, [
    BigSum_1.BigSum({
        options: {
            ...options_1.bigSumOptions,
            type: component_sdk_1.font('Text style', {
                ...options_1.bigSumOptions.type('type'),
                value: ['Body1'],
            }),
        },
    }, []),
]);

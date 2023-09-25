"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Count_1 = require("./structures/Count");
const options_1 = require("./structures/Count/options");
const attr = {
    icon: component_sdk_1.Icon.ParagraphIcon,
    category: 'CONTENT',
    keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};
exports.default = component_sdk_1.prefab('Count', attr, undefined, [
    Count_1.Count({
        options: {
            ...options_1.countOptions,
            type: component_sdk_1.font('Text style', {
                ...options_1.countOptions.type('type'),
                value: ['Body1'],
            }),
        },
    }, []),
]);

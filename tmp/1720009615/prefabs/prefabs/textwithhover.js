"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const TextWithHover_1 = require("./structures/TextWithHover");
const options_1 = require("./structures/TextWithHover/options");
const attr = {
    icon: component_sdk_1.Icon.ParagraphIcon,
    category: 'Local',
    keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};
exports.default = component_sdk_1.prefab('TextWithHover', attr, undefined, [
    TextWithHover_1.TextWithHover({
        options: {
            ...options_1.textWithHoverOptions,
            type: component_sdk_1.font('Text style', {
                ...options_1.textWithHoverOptions.type('type'),
                value: ['Body1'],
            }),
        },
    }, []),
]);

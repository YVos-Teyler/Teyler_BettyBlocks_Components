"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Chart_1 = require("./structures/Chart");
const options_1 = require("./structures/Chart/options");
const attr = {
    icon: component_sdk_1.Icon.LabelIcon,
    category: 'Local',
    keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};
exports.default = component_sdk_1.prefab('Chart', attr, undefined, [
    Chart_1.Chart({
        options: {
            ...options_1.chartOptions,
            type: component_sdk_1.font('Text style', {
                ...options_1.chartOptions.type('type'),
                value: ['Body1'],
            }),
        },
    }, []),
]);

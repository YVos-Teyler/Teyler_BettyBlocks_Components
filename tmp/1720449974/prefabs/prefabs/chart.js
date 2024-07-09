"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const structures_1 = require("./structures");
const options_1 = require("./structures/CapacityChart/options");
const attr = {
    icon: component_sdk_1.Icon.FormIcon,
    category: 'Local',
    keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};
exports.default = component_sdk_1.prefab('CapacityChart', attr, undefined, [
    structures_1.CapacityChart({
        options: {
            ...options_1.capacityChartOptions,
            type: component_sdk_1.font('Text style', {
                ...options_1.capacityChartOptions.type('type'),
                value: ['Body1'],
            }),
        },
    }, []),
]);

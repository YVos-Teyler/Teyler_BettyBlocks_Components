"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const structures_1 = require("./structures");
const attrs = {
    icon: component_sdk_1.Icon.AccordionItemIcon,
    category: 'Local',
    keywords: ['Layout', 'panel', 'expansion', 'expansionpanel', 'collapse'],
};
exports.default = component_sdk_1.prefab('Expansion Panel', attrs, undefined, [
    structures_1.ExpansionPanel({}, []),
]);

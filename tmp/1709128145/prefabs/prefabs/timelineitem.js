"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const utils_1 = require("../utils");
const attributes = {
    category: 'Local',
    icon: component_sdk_1.Icon.TextInputIcon,
};
const options = {
    size: component_sdk_1.size('Circle size', {
        value: '1rem',
        configuration: {
            as: 'UNIT',
        },
    }),
    color: component_sdk_1.color('Color', {
        value: component_sdk_1.ThemeColor.BLACK,
        ...utils_1.showOn('styles'),
    }),
};
exports.default = component_sdk_1.prefab('TimelineItem', attributes, undefined, [
    component_sdk_1.component('TimelineItem', { options }, []),
]);

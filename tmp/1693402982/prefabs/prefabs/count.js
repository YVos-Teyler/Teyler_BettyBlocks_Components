"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const attributes = {
    category: 'Local',
    icon: component_sdk_1.Icon.UnorderedListIcon,
};
const options = {
    model: component_sdk_1.modelAndRelation('Model', { value: '' }),
    filter: component_sdk_1.filter('Filter', {
        value: {},
        configuration: {
            dependsOn: 'model',
        },
    }),
};
exports.default = component_sdk_1.prefab('Count', attributes, undefined, [
    component_sdk_1.component('Count', { options }, []),
]);

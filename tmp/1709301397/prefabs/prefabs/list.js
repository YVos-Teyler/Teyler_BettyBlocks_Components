"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const attributes = {
    category: 'Local',
    icon: component_sdk_1.Icon.UnorderedListIcon,
};
const options = {
    model: component_sdk_1.modelAndRelation('Model', { value: '' }),
    take: component_sdk_1.number('Rows per page (max 50)', {
        value: '5',
        configuration: {
            dependsOn: 'model',
        },
    }),
};
exports.default = component_sdk_1.prefab('List', attributes, undefined, [
    component_sdk_1.component('List', { options }, []),
]);

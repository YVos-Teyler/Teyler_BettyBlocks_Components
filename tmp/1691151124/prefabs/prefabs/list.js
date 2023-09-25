"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const attributes = {
    category: 'CONTENT',
    icon: component_sdk_1.Icon.UnorderedListIcon,
    structure: [
        {
            name: 'List',
            options: [
                {
                    value: '',
                    label: 'Model',
                    key: 'model',
                    type: 'MODEL',
                },
                {
                    value: 15,
                    label: 'Rows per page (max 50)',
                    key: 'take',
                    type: 'NUMBER',
                },
            ],
            descendants: [],
        },
    ],
};
const options = {};
exports.default = component_sdk_1.prefab('List', attributes, undefined, [
    component_sdk_1.component('List', { options }, []),
]);

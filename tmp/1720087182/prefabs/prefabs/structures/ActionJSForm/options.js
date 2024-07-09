"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("./advanced");
const children_1 = require("./children");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['showDataOnLoad'],
    },
];
exports.options = {
    recordVariable: component_sdk_1.option('ACTION_JS_VARIABLE', {
        label: 'Record variable',
        value: '',
        configuration: { condition: component_sdk_1.showIf('recordVariable', 'EQ', 'never') },
    }),
    reconfigure: component_sdk_1.reconfigure('Reconfigure', {
        value: {
            children: children_1.children,
            reconfigureWizardType: 'ChildrenSelector',
        },
    }),
    actionId: component_sdk_1.option('ACTION_JS', { label: 'Action', value: '' }),
    model: component_sdk_1.model('Model'),
    filter: component_sdk_1.filter('Filter', { configuration: { dependsOn: 'model' } }),
    currentRecord: component_sdk_1.number('Current Record', {
        value: '',
        configuration: { condition: component_sdk_1.showIf('currentRecord', 'EQ', 'never') },
    }),
    ...advanced_1.advanced,
};

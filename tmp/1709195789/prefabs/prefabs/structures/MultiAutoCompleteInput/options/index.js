"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("./advanced");
const styles_1 = require("./styles");
const validation_1 = require("./validation");
exports.options = {
    actionVariableId: component_sdk_1.option('ACTION_JS_VARIABLE', {
        label: 'Action input variable',
        value: '',
        configuration: {
            condition: component_sdk_1.showIf('property', 'EQ', ''),
        },
    }),
    property: component_sdk_1.property('Property', {
        value: '',
        configuration: {
            allowedKinds: ['HAS_AND_BELONGS_TO_MANY', 'HAS_MANY'],
            allowRelations: true,
            disabled: true,
            condition: component_sdk_1.hideIf('property', 'EQ', ''),
        },
    }),
    label: component_sdk_1.variable('Label', {
        value: [],
        configuration: { allowFormatting: false, allowPropertyName: true },
    }),
    value: component_sdk_1.variable('Value', {
        value: [],
        configuration: {
            allowRelations: true,
        },
    }),
    optionType: component_sdk_1.buttongroup('Option type', [
        ['Model', 'model'],
        ['Property', 'property'],
        ['Variable', 'variable'],
    ], {
        value: 'variable',
        configuration: {
            condition: component_sdk_1.showIf('optionType', 'EQ', 'never'),
        },
    }),
    model: component_sdk_1.modelAndRelation('Model', {
        value: '',
        configuration: {
            condition: component_sdk_1.showIf('optionType', 'EQ', 'variable'),
        },
    }),
    filter: component_sdk_1.option('FILTER', {
        label: 'Filter for options',
        value: {},
        configuration: {
            dependsOn: 'model',
            condition: component_sdk_1.hideIf('optionType', 'EQ', 'property'),
        },
    }),
    groupBy: component_sdk_1.property('Group by for options', {
        value: '',
        configuration: {
            dependsOn: 'model',
            condition: component_sdk_1.hideIf('optionType', 'EQ', 'property'),
        },
    }),
    orderBy: component_sdk_1.property('Order by for options', {
        value: '',
        configuration: {
            dependsOn: 'model',
            condition: component_sdk_1.hideIf('optionType', 'EQ', 'property'),
        },
    }),
    labelProperty: component_sdk_1.property('Label for options', {
        value: '',
        configuration: {
            condition: component_sdk_1.hideIf('optionType', 'EQ', 'property'),
        },
    }),
    order: component_sdk_1.buttongroup('Sort order', [
        ['Ascending', 'asc'],
        ['Descending', 'desc'],
    ], {
        value: 'asc',
        configuration: {
            condition: component_sdk_1.hideIf('orderBy', 'EQ', ''),
        },
    }),
    renderCheckboxes: component_sdk_1.toggle('Add checkboxes', { value: false }),
    ...validation_1.validation,
    ...styles_1.styles,
    ...advanced_1.advanced,
};

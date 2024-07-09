"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("./advanced");
const validation_1 = require("./validation");
const styles_1 = require("./styles");
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
            allowedKinds: ['LIST', 'BELONGS_TO'],
            disabled: true,
            condition: component_sdk_1.hideIf('property', 'EQ', ''),
        },
    }),
    label: component_sdk_1.variable('Label', { value: ['Radio'] }),
    value: component_sdk_1.variable('Value', { value: [''] }),
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
    filter: component_sdk_1.filter('Filter', {
        value: {},
        configuration: {
            dependsOn: 'model',
            condition: component_sdk_1.hideIf('optionType', 'EQ', 'property'),
        },
    }),
    orderBy: component_sdk_1.property('Order by', {
        value: '',
        configuration: {
            dependsOn: 'model',
            condition: component_sdk_1.hideIf('optionType', 'EQ', 'property'),
        },
    }),
    labelProperty: component_sdk_1.property('Label for options', {
        value: '',
        configuration: { condition: component_sdk_1.hideIf('optionType', 'EQ', 'property') },
    }),
    order: component_sdk_1.buttongroup('Sort order', [
        ['Ascending', 'asc'],
        ['Descending', 'desc'],
    ], { value: 'asc', configuration: { condition: component_sdk_1.hideIf('orderBy', 'EQ', '') } }),
    showError: component_sdk_1.buttongroup('Error message', [
        ['Built in', 'built-in'],
        ['Interaction', 'interaction'],
    ], {
        value: 'built-in',
        configuration: { condition: component_sdk_1.showIf('optionType', 'EQ', 'model') },
    }),
    ...validation_1.validation,
    ...styles_1.styles,
    ...advanced_1.advanced,
};

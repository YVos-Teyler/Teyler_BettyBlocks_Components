"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const utils_1 = require("../../../utils");
const index_1 = require("./options/index");
exports.TextInput = (config, children = []) => {
    const options = { ...(config.options || index_1.options) };
    const ref = config.ref ? { ...config.ref } : undefined;
    const categories = [
        {
            label: 'Validation Options',
            expanded: false,
            members: [
                'required',
                'validationValueMissing',
                'pattern',
                'validationPatternMismatch',
                'minLength',
                'validationTooShort',
                'maxLength',
                'validationTooLong',
            ],
        },
        {
            label: 'Styling',
            expanded: false,
            members: [
                'hideLabel',
                'backgroundColor',
                'borderColor',
                'borderHoverColor',
                'borderFocusColor',
                'labelColor',
                'textColor',
                'placeholderColor',
                'helperColor',
                'errorColor',
            ],
        },
        {
            label: 'Advanced Options',
            expanded: false,
            members: ['dataComponentAttribute'],
        },
    ];
    if (config.type) {
        options.type = utils_1.updateOption(options.type, { value: config.type });
    }
    if (config.validationPattern) {
        options.pattern = utils_1.updateOption(options.pattern, {
            value: [config.validationPattern],
        });
    }
    if (config.inputLabel) {
        options.label = utils_1.updateOption(options.label, { value: [config.inputLabel] });
    }
    if (config.pattern) {
        options.pattern = utils_1.updateOption(options.pattern, {
            value: config.pattern,
            configuration: {
                ...options.pattern('pattern').configuration,
                placeholder: config.pattern,
            },
        });
    }
    if (config.adornmentIcon) {
        options.adornmentIcon = utils_1.updateOption(options.adornmentIcon, {
            value: config.adornmentIcon,
        });
    }
    return component_sdk_1.component('TextInput', { label: config.label, options, ref, optionCategories: categories }, children);
};

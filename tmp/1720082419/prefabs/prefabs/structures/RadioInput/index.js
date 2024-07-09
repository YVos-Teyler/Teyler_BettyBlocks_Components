"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioInput = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const options_1 = require("./options");
exports.RadioInput = (config, children = []) => {
    const options = { ...(config.options || options_1.options) };
    const style = { ...config.style };
    const ref = config.ref ? { ...config.ref } : undefined;
    const label = config.label ? config.label : undefined;
    const categories = [
        {
            label: 'Validation Options',
            expanded: false,
            members: ['required', 'validationValueMissing'],
        },
        {
            label: 'Styling',
            expanded: false,
            members: [
                'hideLabel',
                'radioColor',
                'radioColorChecked',
                'labelColor',
                'textColor',
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
    return component_sdk_1.component('RadioInput', { options, style, ref, label, optionCategories: categories }, children);
};

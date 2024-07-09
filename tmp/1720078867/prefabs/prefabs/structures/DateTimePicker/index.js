"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimePicker = exports.DateInputTypes = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const utils_1 = require("../../../utils");
const options_1 = require("./options");
var DateInputTypes;
(function (DateInputTypes) {
    DateInputTypes["DATE_TIME"] = "datetime";
    DateInputTypes["DATE"] = "date";
    DateInputTypes["TIME"] = "time";
})(DateInputTypes = exports.DateInputTypes || (exports.DateInputTypes = {}));
exports.DateTimePicker = (config, descendants = []) => {
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
                'backgroundColor',
                'backgroundColorPopup',
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
    if (config.inputType) {
        let format;
        switch (config.inputType) {
            case DateInputTypes.DATE_TIME:
                format = 'MM/dd/yyyy HH:mm:ss';
                break;
            case DateInputTypes.DATE:
                format = 'dd/MM/yyyy';
                break;
            case DateInputTypes.TIME:
                format = 'HH:mm:ss';
                break;
            default:
                format = '';
        }
        const update = {
            value: format,
            ...(config.placeholder
                ? { configuration: { placeholder: config.placeholder } }
                : {}),
        };
        const key = `${config.inputType}Format`;
        options[key] = utils_1.updateOption(options[key], update);
        options.type = utils_1.updateOption(options.type, { value: config.inputType });
        if (config.inputLabel) {
            options.label = utils_1.updateOption(options.label, {
                value: [config.inputLabel],
            });
        }
    }
    if (config.dataComponentAttribute) {
        options.dataComponentAttribute = utils_1.updateOption(options.dataComponentAttribute, {
            value: [config.dataComponentAttribute],
        });
    }
    return component_sdk_1.component('DateTimePickerInput', { options, style, ref, label, optionCategories: categories }, descendants);
};

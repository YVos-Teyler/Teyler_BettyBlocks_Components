"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const options_1 = require("./options");
const defaultCategories = [
    {
        label: 'Validation',
        expanded: false,
        members: [
            'required',
            'hideDefaultError',
            'accept',
            'maxFileSize',
            'maxFileSizeMessage',
        ],
    },
    {
        label: 'Styling',
        expanded: false,
        members: ['hideLabel', 'labelColor', 'helperColor', 'errorColor'],
    },
    {
        label: 'Advanced settings',
        expanded: false,
        members: ['nameAttribute', 'dataComponentAttribute', 'actionVariableId'],
    },
];
exports.FileUpload = (config = {}, descendants = []) => {
    const options = { ...(config.options || options_1.fileUploadOptions) };
    const categories = [...(config.optionCategories || defaultCategories)];
    return component_sdk_1.component('FileUploadInput', { options, label: config.label, optionCategories: categories }, descendants);
};

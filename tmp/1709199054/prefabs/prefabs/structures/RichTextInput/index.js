"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextInput = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const utils_1 = require("../../../utils");
const deleteActionVariable_1 = require("../../hooks/deleteActionVariable");
const options_1 = require("./options");
const $afterDelete = [deleteActionVariable_1.deleteActionVariable];
exports.RichTextInput = (config, children = []) => {
    const options = { ...(config.options || options_1.richTextOptions) };
    const ref = config.ref ? { ...config.ref } : undefined;
    const optionCategories = config.optionCategories
        ? config.optionCategories
        : options_1.categories;
    if (config.type) {
        options.type = utils_1.updateOption(options.type, { value: config.type });
    }
    if (config.inputLabel) {
        options.label = utils_1.updateOption(options.label, { value: [config.inputLabel] });
    }
    return component_sdk_1.component('RichTextInput', { label: config.label, options, ref, $afterDelete, optionCategories }, children);
};

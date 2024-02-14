"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Alert_1 = require("../Alert");
const options_1 = require("./options");
exports.Form = (label, showSuccessAlert) => {
    if (showSuccessAlert) {
        return component_sdk_1.component('Form', { label, options: options_1.options, optionCategories: options_1.categories, ref: { id: '#formId' } }, [
            Alert_1.FormSuccessAlert({ ref: { id: '#alertSuccessId' } }),
            Alert_1.FormErrorAlert({ ref: { id: '#alertErrorId' } }),
        ]);
    }
    return component_sdk_1.component('Form', { label, options: options_1.options, optionCategories: options_1.categories, ref: { id: '#formId' } }, [Alert_1.FormErrorAlert({ ref: { id: '#alertErrorId' } })]);
};

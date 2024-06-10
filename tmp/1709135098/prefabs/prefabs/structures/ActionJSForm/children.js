"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.children = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const __1 = require("..");
const defaultOptions = {
    property: component_sdk_1.property('Property', { value: '', showInReconfigure: true }),
    label: component_sdk_1.variable('Label', { value: [''], showInReconfigure: true }),
};
exports.children = [
    __1.TextInput({
        options: { ...__1.textInputOptions, ...defaultOptions },
    }),
    __1.SelectInput({
        options: { ...__1.selectInputOptions, ...defaultOptions },
    }),
    __1.CheckboxInput({
        options: { ...__1.checkboxInputOptions, ...defaultOptions },
    }),
    __1.AutocompleteInput({
        options: { ...__1.autocompleteInputOptions, ...defaultOptions },
    }),
    __1.DateTimePicker({
        options: { ...__1.dateTimePickerOptions, ...defaultOptions },
    }),
    __1.CheckboxGroup({
        options: { ...__1.checkboxGroupInputOptions, ...defaultOptions },
    }),
    __1.RadioInput({
        options: { ...__1.radioInputOptions, ...defaultOptions },
    }),
    __1.MultiAutocomplete({
        options: { ...__1.multiAutocompleteOptions, ...defaultOptions },
    }),
    __1.FileUpload({
        options: { ...__1.fileUploadOptions, ...defaultOptions },
    }),
    __1.RatingInput({
        options: { ...__1.ratingInputOptions, ...defaultOptions },
    }),
    __1.RichTextInput({
        options: { ...__1.richTextOptions, ...defaultOptions },
    }),
];

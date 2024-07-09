"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormErrorAlert = exports.FormSuccessAlert = exports.Alert = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const utils_1 = require("../../../utils");
const options_1 = require("./options");
exports.Alert = (config, descendants = []) => {
    const options = { ...(config.options || options_1.alertOptions) };
    const label = config.label ? config.label : undefined;
    const ref = config.ref ? { ...config.ref } : undefined;
    const optionCategories = config.optionCategories
        ? { ...config.optionCategories }
        : options_1.categories;
    return component_sdk_1.component('Alert', { options, label, ref, optionCategories }, descendants);
};
const baseFormAlertStyle = {
    textColor: utils_1.updateOption(options_1.alertOptions.textColor, {
        value: component_sdk_1.ThemeColor.WHITE,
    }),
    iconColor: utils_1.updateOption(options_1.alertOptions.iconColor, {
        value: component_sdk_1.ThemeColor.WHITE,
    }),
    collapsable: utils_1.updateOption(options_1.alertOptions.collapsable, { value: true }),
    visible: utils_1.updateOption(options_1.alertOptions.visible, { value: false }),
};
exports.FormSuccessAlert = (config) => {
    const successAlertOptions = {
        ...options_1.alertOptions,
        ...baseFormAlertStyle,
        icon: utils_1.updateOption(options_1.alertOptions.icon, {
            value: 'CheckCircle',
        }),
        titleText: utils_1.updateOption(options_1.alertOptions.titleText, {
            value: ['Success'],
        }),
        bodyText: utils_1.updateOption(options_1.alertOptions.bodyText, {
            value: ['Form has been submitted successfully.'],
        }),
    };
    return exports.Alert({
        ...config,
        options: { ...successAlertOptions },
    });
};
exports.FormErrorAlert = (config) => {
    const errorAlertOptions = {
        ...options_1.alertOptions,
        ...baseFormAlertStyle,
        allowTextServerResponse: component_sdk_1.toggle('Allow to overwrite by the server response', { value: true }),
        background: component_sdk_1.color('Background color', { value: component_sdk_1.ThemeColor.DANGER }),
        icon: utils_1.updateOption(options_1.alertOptions.icon, {
            value: 'Error',
        }),
        titleText: utils_1.updateOption(options_1.alertOptions.titleText, {
            value: ['Error'],
        }),
        bodyText: utils_1.updateOption(options_1.alertOptions.bodyText, {
            value: ['*Dynamic value from the Action response*'],
        }),
    };
    return exports.Alert({
        ...config,
        options: { ...errorAlertOptions },
    });
};

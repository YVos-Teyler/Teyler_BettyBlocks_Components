"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOption = exports.showOn = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.showOn = (key) => ({
    configuration: { condition: component_sdk_1.showIfTrue(key) },
});
exports.updateOption = (producer, attrs) => {
    return (key) => {
        return { ...producer(key), ...attrs };
    };
};

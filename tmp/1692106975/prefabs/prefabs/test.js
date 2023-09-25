"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const chart_js_1 = require("chart.js");
const attributes = {
    category: 'CONTENT',
    icon: component_sdk_1.Icon.PieChartIcon,
};
const options = {
    content: component_sdk_1.variable('Content', { value: ['This is my first component!'] }),
};
chart_js_1.Chart.register(chart_js_1.ArcElement, chart_js_1.Tooltip, chart_js_1.Legend);
exports.default = component_sdk_1.prefab('Test', attributes, undefined, [
    component_sdk_1.component('Test', { options }, []),
]);

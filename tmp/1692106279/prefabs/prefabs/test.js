"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
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
exports.data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};
exports.default = component_sdk_1.prefab('Test', attributes, undefined, [
    component_sdk_1.component('Test', { options }, []),
]);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltip = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.tooltip = {
    addTooltip: component_sdk_1.toggle('Toggle tooltip', { value: false }),
    hasVisibleTooltip: component_sdk_1.toggle('Toggle tooltip visibility', {
        value: true,
        configuration: {
            as: 'VISIBILITY',
        },
    }),
    tooltipContent: component_sdk_1.variable('Tooltip Content', {
        value: ['Tips'],
    }),
    tooltipPlacement: component_sdk_1.option('CUSTOM', {
        label: 'Tooltip Placement',
        value: 'bottom',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                {
                    name: 'Top Start',
                    value: 'top-start',
                },
                {
                    name: 'Top',
                    value: 'top',
                },
                {
                    name: 'Top End',
                    value: 'top-end',
                },
                {
                    name: 'Right',
                    value: 'right',
                },
                {
                    name: 'Left',
                    value: 'left',
                },
                {
                    name: 'Botttom Start',
                    value: 'bottom-start',
                },
                {
                    name: 'Bottom',
                    value: 'bottom',
                },
                {
                    name: 'Bottom End',
                    value: 'bottom-end',
                },
            ],
        },
    }),
    tooltipBackground: component_sdk_1.color('Tooltip Background', {
        value: component_sdk_1.ThemeColor.MEDIUM,
    }),
    tooltipText: component_sdk_1.color('Tooltip Text', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
};

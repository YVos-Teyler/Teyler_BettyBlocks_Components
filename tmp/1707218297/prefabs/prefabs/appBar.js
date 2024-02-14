"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Appbar_1 = require("./structures/Appbar");
const OpenPage_1 = require("./structures/OpenPage");
const options_1 = require("./structures/OpenPage/options");
const attr = {
    icon: component_sdk_1.Icon.NavbarIcon,
    category: 'NAVIGATION',
    keywords: ['Navigation', 'bar', 'navigationbar', 'menu', 'navbar', 'appbar'],
};
exports.default = component_sdk_1.prefab('Nav Sidebar', attr, undefined, [
    Appbar_1.AppBar({}, [
        OpenPage_1.OpenPageButton({
            options: {
                ...options_1.openPageButtonOptions,
                buttonText: component_sdk_1.variable('Button text', {
                    ...options_1.openPageButtonOptions.buttonText('buttonText'),
                    value: ['Menu 1'],
                }),
            },
            style: {
                overwrite: {
                    boxShadow: 'none',
                    textTransform: 'none',
                    fontWeight: '400',
                },
            },
        }),
        OpenPage_1.OpenPageButton({
            options: {
                ...options_1.openPageButtonOptions,
                buttonText: component_sdk_1.variable('Button text', {
                    ...options_1.openPageButtonOptions.buttonText('buttonText'),
                    value: ['Menu 2'],
                }),
            },
            style: {
                overwrite: {
                    boxShadow: 'none',
                    textTransform: 'none',
                    fontWeight: '400',
                },
            },
        }),
    ]),
]);

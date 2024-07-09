"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
exports.styles = {
    titleType: component_sdk_1.font('Title type', {
        value: 'Body1',
    }),
    titleTextColor: component_sdk_1.color('Title text color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    titleFontWeight: component_sdk_1.dropdown('Title font weight', [
        ['100', '100'],
        ['200', '200'],
        ['300', '300'],
        ['400', '400'],
        ['500', '500'],
        ['600', '600'],
        ['700', '700'],
        ['800', '800'],
        ['900', '900'],
    ], {
        value: '400',
    }),
    titleSpacing: component_sdk_1.sizes('Title outer space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
    }),
};

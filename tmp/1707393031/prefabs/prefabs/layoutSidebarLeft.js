"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const structures_1 = require("./structures");
const attrs = {
    icon: component_sdk_1.Icon.Layout66Icon,
    category: 'LAYOUT',
    keywords: ['Layout', 'column', 'columns', '2'],
};
const defaultOptions = {
    ...structures_1.columnOptions,
    columnWidth: component_sdk_1.option('CUSTOM', {
        ...structures_1.columnOptions.columnWidth('columnWidth'),
        value: '6',
    }),
    columnWidthTabletLandscape: component_sdk_1.option('CUSTOM', {
        ...structures_1.columnOptions.columnWidthTabletLandscape('columnWidthTabletLandscape'),
        value: '6',
    }),
    columnWidthTabletPortrait: component_sdk_1.option('CUSTOM', {
        ...structures_1.columnOptions.columnWidthTabletPortrait('columnWidthTabletPortrait'),
        value: '12',
    }),
    columnWidthMobile: component_sdk_1.option('CUSTOM', {
        ...structures_1.columnOptions.columnWidthMobile('columnWidthMobile'),
        value: '12',
    }),
};
// export default prefab('Layout Sidebar-Left', attrs, undefined, [
//   LayoutSidebarLeft({}, [
//     Column({ options: defaultOptions }),
//     Column({ options: defaultOptions }),
//   ]),
// ]);
exports.default = component_sdk_1.prefab('Layout Sidebar-Left', attrs, undefined, [
    structures_1.LayoutSidebarLeft({}, [
        structures_1.Container({}),
        structures_1.Container({}),
    ]),
]);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataListOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Pagination',
        expanded: false,
        members: ['pagination', 'labelNumberOfPages', 'take', 'placeholderTake'],
    },
    {
        label: 'Spacing',
        expanded: false,
        members: ['outerSpacing'],
    },
    {
        label: 'Messages',
        expanded: false,
        members: ['showError', 'loadingType', 'loadingText', 'noResultsText'],
    },
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.dataListOptions = {
    model: component_sdk_1.modelAndRelation('Model', { value: '' }),
    filter: component_sdk_1.filter('Filter', {
        value: {},
        configuration: {
            dependsOn: 'model',
        },
    }),
    orderBy: component_sdk_1.property('Order by', {
        value: '',
        configuration: {
            dependsOn: 'model',
        },
    }),
    order: component_sdk_1.option('CUSTOM', {
        label: 'Sort order',
        value: 'asc',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            dependsOn: 'model',
            condition: component_sdk_1.hideIf('orderBy', 'EQ', ''),
            allowedInput: [
                { name: 'Ascending', value: 'asc' },
                { name: 'Descending', value: 'desc' },
            ],
        },
    }),
    searchProperty: component_sdk_1.property('Search on property', {
        value: '',
        configuration: {
            dependsOn: 'model',
        },
    }),
    type: component_sdk_1.option('CUSTOM', {
        label: 'Type',
        value: 'list',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                {
                    name: 'List',
                    value: 'list',
                },
                {
                    name: 'Grid - Even columns',
                    value: 'grid-even-columns',
                },
                {
                    name: 'Grid - Autofit',
                    value: 'grid-autofit',
                },
                {
                    name: 'Grid - Custom',
                    value: 'grid-custom',
                },
                {
                    name: 'Inline',
                    value: 'inline',
                },
            ],
        },
    }),
    numberOfColumns: component_sdk_1.number('Number of columns', {
        value: 1,
        configuration: {
            condition: {
                type: 'SHOW',
                option: 'type',
                comparator: 'EQ',
                value: 'grid-even-columns'
            }
        },
    }),
    autofitMaxWidth: component_sdk_1.size('Max width per column', {
        value: '20rem',
        configuration: {
            as: 'UNIT',
            condition: {
                type: 'SHOW',
                option: 'type',
                comparator: 'EQ',
                value: 'grid-autofit'
            }
        },
    }),
    gridTemplateColumns: component_sdk_1.variable('Grid template columns', {
        value: ['none'],
        configuration: {
            condition: {
                type: 'SHOW',
                option: 'type',
                comparator: 'EQ',
                value: 'grid-custom'
            }
        },
    }),
    gridTemplateRows: component_sdk_1.variable('Grid template rows', {
        value: ['none'],
        configuration: {
            condition: {
                type: 'SHOW',
                option: 'type',
                comparator: 'EQ',
                value: 'grid-custom'
            }
        },
    }),
    gap: component_sdk_1.size('Gap', {
        value: '1rem',
        configuration: {
            as: 'UNIT',
        },
    }),
    pagination: component_sdk_1.option('CUSTOM', {
        label: 'Pagination',
        value: 'never',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            dependsOn: 'model',
            allowedInput: [
                { name: 'Always', value: 'always' },
                { name: 'When needed', value: 'whenNeeded' },
                { name: 'Never', value: 'never' },
            ],
        },
    }),
    take: component_sdk_1.number('Rows per page (max 50)', {
        value: '5',
        configuration: {
            dependsOn: 'model',
        },
    }),
    placeholderTake: component_sdk_1.number('Placeholder rows', {
        value: '',
    }),
    labelNumberOfPages: component_sdk_1.variable(`Pagination label (x 'of' y)`, {
        value: ['of'],
        configuration: {
            condition: component_sdk_1.hideIf('pagination', 'EQ', 'never'),
        },
    }),
    width: component_sdk_1.size('Min Width', {
        value: '200px',
        configuration: {
            as: 'UNIT',
            condition: component_sdk_1.showIf('type', 'EQ', 'grid'),
        },
    }),
    outerSpacing: component_sdk_1.sizes('Outer space', { value: ['0rem', '0rem', 'M', '0rem'] }),
    showError: component_sdk_1.option('CUSTOM', {
        value: 'built-in',
        label: 'Error message',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            dependsOn: 'model',
            allowedInput: [
                { name: 'Built in', value: 'built-in' },
                { name: 'Interaction', value: 'interaction' },
            ],
        },
    }),
    loadingType: component_sdk_1.option('CUSTOM', {
        value: 'default',
        label: 'Show on load',
        configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            dependsOn: 'model',
            allowedInput: [
                { name: 'Message', value: 'default' },
                { name: 'Content', value: 'showChildren' },
                { name: 'Skeleton', value: 'skeleton' },
            ],
        },
    }),
    loadingText: component_sdk_1.variable('Loading text', {
        value: ['Loading...'],
        configuration: {
            dependsOn: 'model',
            condition: {
                type: 'SHOW',
                option: 'loadingType',
                comparator: 'EQ',
                value: 'default',
            },
        },
    }),
    noResultsText: component_sdk_1.variable('No results text', {
        value: [''],
    }),
    ...advanced_1.advanced('DataList'),
};

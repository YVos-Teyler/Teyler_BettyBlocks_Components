"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const component_sdk_1 = require("@betty-blocks/component-sdk");
const ActionJSForm_1 = require("./structures/ActionJSForm");
const beforeCreate = ({ close, components: { Content, Field, Footer, Header, ModelSelector, PropertiesSelector, Text, Box, Toggle, BBTooltip, CircleQuestion, TextInput, FormField, }, prefab: originalPrefab, save, helpers, }) => {
    const { BettyPrefabs, PropertyKind, cloneStructure, createBlacklist, createUuid, makeBettyInput, prepareAction, getPageAuthenticationProfileId, getPageName, setOption, useModelQuery, } = helpers;
    const disabledKinds = createBlacklist([
        'BOOLEAN',
        'DATE',
        'DATE_TIME',
        'DECIMAL',
        'EMAIL_ADDRESS',
        'RICH_TEXT',
        'ENUM',
        'FILE',
        'FLOAT',
        'GOOGLE_DOCUMENT',
        'HAS_ONE',
        'HAS_AND_BELONGS_TO_MANY',
        'HAS_MANY',
        'IBAN',
        'IMAGE',
        'INTEGER',
        'LIST',
        'MINUTES',
        'PASSWORD',
        'PERIODIC_COUNT',
        'PHONE_NUMBER',
        'PRICE',
        'STRING',
        'TEXT',
        'TIME',
        'URL',
    ]);
    const [modelId, setModelId] = React.useState('');
    const [model, setModel] = React.useState('');
    const [idProperty, setIdProperty] = React.useState(null);
    const [properties, setProperties] = React.useState([]);
    const [modelBased, setmodelBased] = React.useState(true);
    const [actionName, setActionName] = React.useState('');
    const permissions = 'inherit';
    const pageAuthenticationProfileId = getPageAuthenticationProfileId();
    const pageName = getPageName();
    const [validationMessage, setValidationMessage] = React.useState('');
    const componentId = createUuid();
    const modelRequest = useModelQuery({
        variables: { id: modelId },
        onCompleted: (result) => {
            setModel(result.model);
            setIdProperty(result.model.properties.find(({ name }) => name === 'id'));
        },
    });
    const validate = () => {
        if (modelRequest.loading) {
            setValidationMessage('Model details are still loading, please try submitting again.');
            return false;
        }
        return true;
    };
    const inputStructure = (inputPrefab, prop) => {
        if (inputPrefab.type === 'COMPONENT') {
            setOption(inputPrefab, 'property', (options) => ({
                ...options,
                optionRef: {
                    id: `#PropertyInput${prop.id}`,
                },
            }));
            setOption(inputPrefab, 'label', (options) => ({
                ...options,
                value: [''],
                optionRef: {
                    sourceId: `#PropertyInput${prop.id}`,
                    inherit: [{ name: '$name', id: '$id', type: 'PROPERTY_LABEL' }],
                },
            }));
        }
        return inputPrefab;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { onClose: close, title: "Configure form" }),
        React.createElement(Box, { as: "header", direction: "row", justify: "between", align: "center", margin: "0 2rem" },
            React.createElement(Text, { size: "0.875rem", color: "grey700" },
                "You can set up a form based on a model and selected properties so that your form is created with matching inputs.",
                React.createElement("br", null),
                "You can turn off the switch to not base your form on a model within your app and manually configure it.")),
        React.createElement(Content, null,
            React.createElement(Box, { margin: "-0.5rem 0 0.5rem 0" },
                React.createElement(Field, { label: "Model based form" },
                    React.createElement(FormField, { onClick: () => setmodelBased(!modelBased) },
                        React.createElement(Toggle, { checked: modelBased, onChange: () => null, color: "purple" })))),
            modelBased ? (React.createElement(React.Fragment, null,
                React.createElement(Field, { label: "Select model", error: validationMessage && (React.createElement(Text, { color: "#e82600" }, validationMessage)) },
                    React.createElement(ModelSelector, { onChange: (id) => {
                            setModelId(id);
                        }, value: modelId, margin: true })),
                React.createElement(Field, { label: "Select properties" },
                    React.createElement(PropertiesSelector, { allowRelations: true, disabledKinds: disabledKinds, disabledNames: ['created_at', 'id', 'updated_at'], modelId: modelId, onChange: setProperties, scopedModels: false, value: properties })))) : (React.createElement(Box, { margin: "0 36.5rem 0 0", width: "20rem" },
                React.createElement(Box, { style: { flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Text, { color: "grey700", weight: "bold", style: {
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            marginRight: '0.1rem',
                        } }, "Action name"),
                    React.createElement(CircleQuestion, { color: "grey500", size: "small", "data-tip": "You can later find this action in the action <br /> overview with the name you now choose", "data-for": "action-tooltip" }),
                    React.createElement(BBTooltip, { id: "action-tooltip", place: "top", type: "dark", effect: "solid", multiline: true })),
                React.createElement(TextInput, { onChange: (e) => setActionName(e.target.value), color: "orange" })))),
        React.createElement(Footer, { onClose: close, canSave: (modelId && properties.length !== 0) || actionName, onSave: async () => {
                // eslint-disable-next-line no-param-reassign
                originalPrefab.structure[0].id = componentId;
                const result = await prepareAction(componentId, idProperty, properties, modelBased ? 'empty' : 'custom', null, actionName, permissions, pageAuthenticationProfileId, pageName);
                const structure = originalPrefab.structure[0];
                if (modelBased) {
                    Object.values(result.variables).map(([property, variable]) => {
                        const { kind } = property;
                        let input;
                        switch (kind) {
                            case PropertyKind.BELONGS_TO: {
                                input = makeBettyInput(BettyPrefabs.AUTO_COMPLETE, model, property, variable, result.relatedIdProperties, result.relatedModelIds);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.HAS_MANY:
                            case PropertyKind.HAS_AND_BELONGS_TO_MANY: {
                                input = makeBettyInput(BettyPrefabs.MULTI_AUTO_COMPLETE, model, property, variable, result.relatedIdProperties, result.relatedModelIds);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.DATE_TIME: {
                                input = makeBettyInput(BettyPrefabs.DATE_TIME, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.DATE: {
                                input = makeBettyInput(BettyPrefabs.DATE, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.TIME: {
                                input = makeBettyInput(BettyPrefabs.TIME, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.DECIMAL: {
                                input = makeBettyInput(BettyPrefabs.DECIMAL, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.EMAIL_ADDRESS: {
                                input = makeBettyInput(BettyPrefabs.EMAIL_ADDRESS, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.FILE: {
                                input = makeBettyInput(BettyPrefabs.FILE, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.IMAGE: {
                                input = makeBettyInput(BettyPrefabs.IMAGE, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.IBAN: {
                                input = makeBettyInput(BettyPrefabs.IBAN, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.LIST: {
                                input = makeBettyInput(BettyPrefabs.LIST, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.PASSWORD: {
                                input = makeBettyInput(BettyPrefabs.PASSWORD, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.PHONE_NUMBER: {
                                input = makeBettyInput(BettyPrefabs.PHONE_NUMBER, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.PRICE: {
                                input = makeBettyInput(BettyPrefabs.PRICE, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.URL: {
                                input = makeBettyInput(BettyPrefabs.URL, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.STRING: {
                                input = makeBettyInput(BettyPrefabs.STRING, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.TEXT: {
                                input = makeBettyInput(BettyPrefabs.TEXT, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.INTEGER: {
                                input = makeBettyInput(BettyPrefabs.INTEGER, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.BOOLEAN: {
                                input = makeBettyInput(BettyPrefabs.BOOLEAN, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            case PropertyKind.RICH_TEXT: {
                                input = makeBettyInput(BettyPrefabs.RICH_TEXT, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                                break;
                            }
                            default: {
                                input = makeBettyInput(BettyPrefabs.STRING, model, property, variable);
                                input = inputStructure(input, property);
                                structure.descendants.push(input);
                            }
                        }
                        // eslint-disable-next-line no-console
                        return console.warn('PropertyKind not found');
                    });
                }
                else {
                    structure.descendants.push(cloneStructure(BettyPrefabs.STRING));
                }
                structure.descendants.push(cloneStructure(BettyPrefabs.SUBMIT_BUTTON));
                setValidationMessage('');
                if (validate()) {
                    const newPrefab = { ...originalPrefab };
                    setOption(newPrefab.structure[0], 'actionId', (options) => ({
                        ...options,
                        value: result.action.actionId,
                        configuration: { disabled: true },
                    }));
                    setOption(newPrefab.structure[0], 'model', (options) => ({
                        ...options,
                        value: modelId,
                        configuration: {
                            disabled: true,
                        },
                    }));
                    if (!modelBased) {
                        const textInputprefab = structure.descendants.find((descendant) => descendant.name === 'TextInput');
                        const actionVariableOption = textInputprefab.options.find((option) => option.type === 'ACTION_JS_VARIABLE');
                        const textInputVariableId = result.variables[Object.keys(result.variables)[0]].find((varArray) => varArray?.kind === 'STRING').id;
                        setOption(textInputprefab, actionVariableOption.key, (option) => ({
                            ...option,
                            value: textInputVariableId,
                            configuration: {
                                condition: {
                                    type: 'SHOW',
                                    option: 'actionVariableOption',
                                    comparator: 'EQ',
                                    value: 'actionVariableOption',
                                },
                            },
                        }));
                    }
                    save(newPrefab);
                }
            } })));
};
const interactions = [
    {
        type: component_sdk_1.InteractionType.Custom,
        name: 'Show',
        sourceEvent: 'onActionError',
        ref: {
            targetComponentId: '#alertErrorId',
            sourceComponentId: '#formId',
        },
    },
    {
        type: component_sdk_1.InteractionType.Custom,
        name: 'Show',
        sourceEvent: 'onActionSuccess',
        ref: {
            targetComponentId: '#alertSuccessId',
            sourceComponentId: '#formId',
        },
    },
    {
        type: component_sdk_1.InteractionType.Custom,
        name: 'Hide',
        sourceEvent: 'onActionLoad',
        ref: {
            targetComponentId: '#alertSuccessId',
            sourceComponentId: '#formId',
        },
    },
    {
        type: component_sdk_1.InteractionType.Custom,
        name: 'Hide',
        sourceEvent: 'onActionLoad',
        ref: {
            targetComponentId: '#alertErrorId',
            sourceComponentId: '#formId',
        },
    },
];
const attributes = {
    category: 'FORM',
    icon: component_sdk_1.Icon.FormIcon,
    interactions,
};
exports.default = component_sdk_1.prefab('Form', attributes, beforeCreate, [ActionJSForm_1.Form('Form', true)]);

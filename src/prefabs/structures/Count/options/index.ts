import {
    font,
    option,
    sizes,
    toggle,
    ThemeColor,
    color,
    modelAndRelation,
    filter
  } from '@betty-blocks/component-sdk';
  import { advanced } from '../../advanced';
  
  export const categories = [
    {
      label: 'Styling',
      expanded: false,
      members: ['textColor', 'fontWeight', 'useInnerHtml'],
    },
    {
      label: 'Advanced Options',
      expanded: false,
      members: ['dataComponentAttribute'],
    },
  ];
  
  export const countOptions = {
    model: modelAndRelation('Model', { value: ''}),
    filter: filter('Filter', {
      value: {},
      configuration: {
        dependsOn: 'model',
      },
    }),

    useInnerHtml: toggle('Display Rich Text', {
      value: false,
    }),
    type: font('Text style', { value: ['Title2'] }),
    textAlignment: option('CUSTOM', {
      label: 'Text Alignment',
      value: 'left',
      configuration: {
        as: 'BUTTONGROUP',
        dataType: 'string',
        allowedInput: [
          { name: 'Left', value: 'left' },
          { name: 'Center', value: 'center' },
          { name: 'Right', value: 'right' },
        ],
      },
    }),
    outerSpacing: sizes('Outer space', {
      value: ['0rem', '0rem', '0rem', '0rem'],
    }),
  
    textColor: color('Text color', {
      value: ThemeColor.BLACK,
    }),
  
    fontWeight: option('CUSTOM', {
      label: 'Font weight',
      value: '400',
      configuration: {
        as: 'DROPDOWN',
        dataType: 'string',
        allowedInput: [
          { name: '[Theme Weight]', value: '[Inherit]' },
          { name: '100', value: '100' },
          { name: '200', value: '200' },
          { name: '300', value: '300' },
          { name: '400', value: '400' },
          { name: '500', value: '500' },
          { name: '600', value: '600' },
          { name: '700', value: '700' },
          { name: '800', value: '800' },
          { name: '900', value: '900' },
        ],
      },
    }),
  
    ...advanced('Text'),
  };
  
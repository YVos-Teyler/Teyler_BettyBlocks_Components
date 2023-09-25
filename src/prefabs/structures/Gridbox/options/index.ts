import {
    sizes,
    size,
    color,
    option,
    ThemeColor,
    toggle,
    variable,
    buttongroup,
    dropdown,
    displayLogic,
    number,
  } from '@betty-blocks/component-sdk';
  import { advanced } from '../../advanced';
import { text } from 'stream/consumers';
  
  export const categories = [
    {
      label: 'Grid',
      expanded: true,
      members: ['gridType', 'numberOfColumns', 'autofitMaxWidth', 'gridTemplateColumns', 'gridTemplateRows', 'gap'],
    },
    {
      label: 'Alignment',
      expanded: true,
      members: ['alignment', 'valignment'],
    },
    {
      label: 'Styling',
      expanded: false,
      members: ['innerSpacing', 'outerSpacing', 'transparent', 'height', 'width'],
    },
    {
      label: 'Positioning',
      expanded: false,
      members: ['position', 'top', 'right', 'bottom', 'left'],
    },
    {
      label: 'Background',
      expanded: false,
      members: [
        'backgroundColor',
        'backgroundColorAlpha',
        'backgroundUrl',
        'backgroundSize',
        'backgroundPosition',
        'backgroundRepeat',
        'backgroundAttachment',
        'borderColor',
        'borderWidth',
        'borderStyle',
        'borderRadius',
      ],
    },
    {
      label: 'Logic Option',
      expanded: false,
      members: ['displayLogic'],
    },
    {
      label: 'Advanced Options',
      expanded: false,
      members: ['dataComponentAttribute', 'emptyPlaceHolderText'],
    },
  ];
  
  export const gridboxOptions = {
    gridType: buttongroup(
        'gridType',
        [
          ['Even columns', 'Even columns'],
          ['Autofit', 'Autofit'],
          ['Custom', 'Custom'],
        ],
        {
          value: 'Even columns',
          configuration: {
            dataType: 'string',
          },
        },
      ),
    
    numberOfColumns: number('Number of columns',{
        value: 1,
        configuration: { 
            condition: { 
                type: 'SHOW', 
                option: 'gridType', 
                comparator: 'EQ', 
                value: 'Even columns'
            }
        },
    }),

    autofitMaxWidth: size('Max width per column',{
        value: '20rem',
        configuration: { 
            as: 'UNIT',
            condition: { 
                type: 'SHOW', 
                option: 'gridType', 
                comparator: 'EQ', 
                value: 'Autofit'
            }
        },
    }),

    gridTemplateColumns: variable('Grid template columns', {
        value: ['none'],
        configuration: { 
            condition: { 
                type: 'SHOW', 
                option: 'gridType', 
                comparator: 'EQ', 
                value: 'Custom'
            }
        },
      }),
    gridTemplateRows: variable('Grid template rows', {
        value: ['none'],
        configuration: { 
            condition: { 
                type: 'SHOW', 
                option: 'gridType', 
                comparator: 'EQ', 
                value: 'Custom'
            }
        },
    }),

    alignment: buttongroup(
      'Alignment',
      [
        ['Left', 'start'],
        ['Center', 'center'],
        ['Right', 'end'],
      ],
      {
        value: 'start',
        configuration: {
          dataType: 'string',
        },
      },
    ),
    valignment: buttongroup(
      'Vertical alignment',
      [
        ['Top', 'start'],
        ['Center', 'center'],
        ['Bottom', 'end'],
      ],
      {
        value: 'start',
        configuration: {
          dataType: 'string',
        },
      },
    ),
    gap: size('Gap', {
      value: '1rem',
      configuration: {
        as: 'UNIT',
      },
    }),
    displayLogic: displayLogic('Display logic', {
      value: {},
    }),
    transparent: toggle('Transparent', {
      value: false,
    }),
    height: size('Height', {
      value: '',
      configuration: {
        as: 'UNIT',
      },
    }),
    width: size('Width', {
      value: '',
      configuration: {
        as: 'UNIT',
      },
    }),
    outerSpacing: sizes('Outer space', {
      value: ['0rem', '0rem', '0rem', '0rem'],
    }),
    innerSpacing: sizes('Inner space', {
      value: ['M', 'M', 'M', 'M'],
    }),
    position: buttongroup(
      'Position',
      [
        ['Static', 'static'],
        ['Relative', 'relative'],
        ['Absolute', 'absolute'],
        ['Fixed', 'fixed'],
        ['Sticky', 'sticky'],
      ],
      {
        value: 'static',
        configuration: {
          dataType: 'string',
        },
      },
    ),
    top: size('Top position', {
      value: '',
      configuration: {
        as: 'UNIT',
      },
    }),
    right: size('Right position', {
      value: '',
      configuration: {
        as: 'UNIT',
      },
    }),
    bottom: size('Bottom position', {
      value: '',
      configuration: {
        as: 'UNIT',
      },
    }),
    left: size('Left position', {
      value: '',
      configuration: {
        as: 'UNIT',
      },
    }),
  
    backgroundColor: color('Background color', {
      value: ThemeColor.TRANSPARENT,
    }),
    backgroundColorAlpha: option('NUMBER', {
      label: 'Background color opacity',
      value: 100,
    }),
    backgroundUrl: variable('Background url', {
      value: [''],
    }),
    backgroundSize: buttongroup(
      'Background size',
      [
        ['Initial', 'initial'],
        ['Contain', 'contain'],
        ['Cover', 'cover'],
      ],
      {
        value: 'initial',
        configuration: {
          dataType: 'string',
        },
      },
    ),
    backgroundPosition: dropdown(
      'Background position',
      [
        ['Left top', 'left top'],
        ['Left center', 'left center'],
        ['Left bottom', 'left bottom'],
        ['Center top', 'center top'],
        ['Center center', 'center center'],
        ['Center bottom', 'center bottom'],
        ['Right top', 'right top'],
        ['Right center', 'right center'],
        ['Right bottom', 'right bottom'],
      ],
      {
        value: 'center center',
        configuration: {
          dataType: 'string',
        },
      },
    ),
    backgroundRepeat: buttongroup(
      'Background repeat',
      [
        ['None', 'no-repeat'],
        ['X', 'repeat-x'],
        ['Y', 'repeat-y'],
        ['All', 'repeat'],
      ],
      {
        value: 'no-repeat',
        configuration: {
          dataType: 'string',
        },
      },
    ),
    backgroundAttachment: buttongroup(
      'Background attachment',
      [
        ['Inherit', 'inherit'],
        ['Scroll', 'scroll'],
        ['Fixed', 'fixed'],
      ],
      {
        value: 'inherit',
        configuration: {
          dataType: 'string',
        },
      },
    ),
    borderColor: color('Border color', {
      value: ThemeColor.TRANSPARENT,
    }),
    borderWidth: size('Border thickness', {
      value: '',
      configuration: {
        as: 'UNIT',
      },
    }),
    borderStyle: buttongroup(
      'Border style',
      [
        ['None', 'none'],
        ['Solid', 'solid'],
        ['Dashed', 'dashed'],
        ['Dotted', 'dotted'],
      ],
      {
        value: 'solid',
        configuration: {
          dataType: 'string',
        },
      },
    ),
    borderRadius: size('Border radius', {
      value: '',
      configuration: {
        as: 'UNIT',
      },
    }),
    emptyPlaceHolderText: variable('Empty placeholder text', {
      value: ['GridBox'],
    }),
    ...advanced('Box'),
  };
  
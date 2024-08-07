import {
  variable,
  toggle,
  option,
  color,
  ThemeColor,
  showIf,
  text,
  sizes,
  icon,
  font,
  modelAndRelation,
  property,
} from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Styling',
    expanded: false,
    members: ['font', 'textColor'],
  },
  {
    label: 'Spacing',
    expanded: false,
    members: ['margin'],
  },
  {
    label: 'State',
    expanded: false,
    members: ['disabled'],
  },
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const chipOptions = {
  label: variable('Label', {
    value: ['Label'],
  }),
  backgroundColor: variable('Background color', {
    value: [''],
  }),

  disabled: toggle('Disabled', {
    value: false,
  }),
  size: option('CUSTOM', {
    value: 'medium',
    label: 'Size',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'Small', value: 'small' },
        { name: 'Medium', value: 'medium' },
      ],
    },
  }),
  font: font('Text style', { value: 'Body1' }),
  textColor: color('Text color', {
    value: ThemeColor.WHITE,
  }),
  avatarType: option('CUSTOM', {
    label: 'Avatar type',
    value: 'icon',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'Icon', value: 'icon' },
        { name: 'Text', value: 'text' },
        { name: 'Image', value: 'image' },
      ],
    },
  }),
  startIcon: icon('Start Icon', {
    value: 'None',
    configuration: {
      condition: showIf('avatarType', 'EQ', 'icon'),
    },
  }),
  hover: toggle('Hover feedback', {
    value: false,
  }),
  avatar: text('Avatar text', {
    value: '',
    configuration: {
      condition: showIf('avatarType', 'EQ', 'text'),
    },
  }),
  imgUrl: variable('Image url', {
    value: [],
    configuration: {
      condition: showIf('avatarType', 'EQ', 'image'),
    },
  }),
  margin: sizes('Outer space', {
    value: ['M', 'M', 'M', 'M'],
  }),

  ...advanced('Chip'),
};

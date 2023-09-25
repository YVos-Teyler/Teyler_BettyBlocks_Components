import { prefab, Icon, font } from '@betty-blocks/component-sdk';
import { TextWithHover } from './structures/TextWithHover';
import { textWithHoverOptions } from './structures/TextWithHover/options';

const attr = {
  icon: Icon.ParagraphIcon,
  category: 'Local',
  keywords: ['Content', 'text', 'type', 'typography', 'body', 'paragraph'],
};

export default prefab('TextWithHover', attr, undefined, [
  TextWithHover(
    {
      options: {
        ...textWithHoverOptions,
        type: font('Text style', {
          ...textWithHoverOptions.type('type'),
          value: ['Body1'],
        }),
      },
    },
    [],
  ),
]);

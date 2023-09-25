import { prefab, Icon } from '@betty-blocks/component-sdk';
import { ChipWithLogic } from './structures/ChipWithLogic';

const attr = {
  icon: Icon.ChipIcon,
  category: 'Local',
  keywords: ['Content', 'chip'],
};

export default prefab('ChipWithLogic', attr, undefined, [ChipWithLogic({}, [])]);

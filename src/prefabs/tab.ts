import { Icon, prefab } from '@betty-blocks/component-sdk';
import { Tab } from './structures';

const attr = {
  icon: Icon.TabsIcon,
  category: 'Local',
  keywords: ['Navigation', 'tabs'],
};

export default prefab('Tab', attr, undefined, [Tab({}, [])]);

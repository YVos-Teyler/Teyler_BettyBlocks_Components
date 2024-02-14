import { prefab, Icon } from '@betty-blocks/component-sdk';
import { Container } from './structures/Container';
import { LayoutContainer } from './structures/LayoutContainer';

const attributes = {
  category: 'LAYOUT',
  icon: Icon.ContainerIcon,
  keywords: ['Layout', 'container'],
};

export default prefab('Layout Container', attributes, undefined, [
    LayoutContainer({}, [
      Container({}), Container({}), Container({})
    ])
]);
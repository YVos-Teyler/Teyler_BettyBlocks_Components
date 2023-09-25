import { Icon, prefab, variable } from '@betty-blocks/component-sdk';
import { AppBar } from './structures/Appbar';
import { OpenPageButton } from './structures/OpenPage';
import { openPageButtonOptions } from './structures/OpenPage/options';

const attr = {
  icon: Icon.NavbarIcon,
  category: 'NAVIGATION',
  keywords: ['Navigation', 'bar', 'navigationbar', 'menu', 'navbar', 'appbar'],
};

export default prefab('Nav Sidebar', attr, undefined, [
  AppBar({}, [
    OpenPageButton({
      options: {
        ...openPageButtonOptions,
        buttonText: variable('Button text', {
          ...openPageButtonOptions.buttonText('buttonText'),
          value: ['Menu 1'],
        }),
      },
      style: {
        overwrite: {
          boxShadow: 'none',
          textTransform: 'none',
          fontWeight: '400',
        },
      },
    }),
    OpenPageButton({
      options: {
        ...openPageButtonOptions,
        buttonText: variable('Button text', {
          ...openPageButtonOptions.buttonText('buttonText'),
          value: ['Menu 2'],
        }),
      },
      style: {
        overwrite: {
          boxShadow: 'none',
          textTransform: 'none',
          fontWeight: '400',
        },
      },
    }),
  ]),
]);

import * as React from 'react';
import {
  component,
  prefab,
  variable,
  Icon,
  font,
  buttongroup,
  color,
  ThemeColor,
} from '@betty-blocks/component-sdk';
import { showOn } from '../utils';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const attributes = {
  category: 'Local',
  icon: Icon.PieChartIcon,
};

const options = {
  content: variable('Content', { value: ['This is my first component!'] }),
};

ChartJS.register(ArcElement, Tooltip, Legend);

export default prefab('TestChartJs', attributes, undefined, [
  component('TestChartJs', { options }, []),
]);

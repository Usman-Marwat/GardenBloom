import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const baseWidth = Math.max(375, width);
const baseHeight = Math.max(740, height);

export const ph = (percent: number) => (percent / 100) * height;

export const pw = (percent: number) => (percent / 100) * width;

export const pf = (percent: number) =>
	(percent / 100) * (baseHeight * 0.75 + baseWidth * 0.25);

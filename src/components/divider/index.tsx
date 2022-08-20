import React from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

interface IDivider {
	size: number;
	isHeight?: boolean;
}

export const Divider = ({ size, isHeight = false }: IDivider) => {
	return (
		<View
			style={
				isHeight ? { height: height * size } : { width: width * size }
			}
		/>
	);
};

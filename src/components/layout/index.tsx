import React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import {
	SafeAreaView,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { colors } from '../../utils';
import { styles } from './Styles';

const { width, height } = Dimensions.get('window');

export const Layout = (props: any) => {
	const insets = useSafeAreaInsets();

	return (
		<SafeAreaView
			style={[
				styles.container,
				{
					paddingBottom: insets.bottom,
					paddingTop: insets.top || height * 0.025,
					paddingLeft: insets.left || width * 0.025,
					paddingRight: insets.right || width * 0.025,
				},
			]}>
			<StatusBar
				animated
				barStyle='dark-content'
				backgroundColor={colors.white}
			/>
			{props.children}
		</SafeAreaView>
	);
};

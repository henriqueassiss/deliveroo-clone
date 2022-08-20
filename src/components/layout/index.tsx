import React from 'react';
import { StatusBar } from 'react-native';
import {
	SafeAreaView,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { styles } from './Styles';

export const Layout = (props: any) => {
	const insets = useSafeAreaInsets();

	return (
		<SafeAreaView
			style={[
				styles.container,
				{
					paddingTop: insets.top,
					paddingLeft: insets.left,
					paddingRight: insets.right,
					paddingBottom: insets.bottom,
				},
			]}>
			<StatusBar animated barStyle='light-content' />
			{props.children}
		</SafeAreaView>
	);
};

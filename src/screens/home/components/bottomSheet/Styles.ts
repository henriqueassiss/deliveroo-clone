import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../utils';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: { paddingHorizontal: width * 0.05 },

	title: {
		fontWeight: '700',
		color: colors.black,
		fontSize: RFValue(17),
	},

	row: {
		flexDirection: 'row',
	},

	text: {
		color: colors.gray,
		fontSize: RFValue(15),
	},
});

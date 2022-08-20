import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../../../utils';

const { height, width } = Dimensions.get('window');

const size = height * 0.04;

export const styles = StyleSheet.create({
	container: {
		height: size,
		flexDirection: 'row',
	},

	button: {
		height: size,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: height * 0.02,
		paddingHorizontal: width * 0.05,
	},

	buttonActive: { backgroundColor: colors.green },

	text: { color: colors.green, fontSize: RFValue(15) },

	textActive: { color: colors.white, fontWeight: '700' },
});

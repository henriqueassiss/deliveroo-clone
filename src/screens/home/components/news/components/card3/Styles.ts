import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../../../utils';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		aspectRatio: 16 / 9,
		width: width - width * 0.05,
	},

	containerActive: { opacity: 0.8 },

	image: {
		width: '100%',
		height: '100%',
		borderRadius: height * 0.015,
	},

	content: {
		...StyleSheet.absoluteFillObject,
		right: '50%',
		alignItems: 'center',
		paddingVertical: height * 0.02,
		justifyContent: 'space-between',
		borderTopLeftRadius: height * 0.015,
		backgroundColor: 'rgba(52,27, 14,0.9)',
		borderBottomLeftRadius: height * 0.015,
	},

	promo: {
		fontWeight: '600',
		color: colors.white,
		fontSize: RFValue(14),
	},

	title: {
		fontWeight: '800',
		color: colors.white,
		textAlign: 'center',
		fontSize: RFValue(26),
		// lineHeight: RFValue(20),
	},
});

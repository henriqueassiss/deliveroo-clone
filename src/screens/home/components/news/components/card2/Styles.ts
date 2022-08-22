import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../../../utils';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		padding: '1.8%',
		aspectRatio: 16 / 9,
		width: width - width * 0.05,
		borderRadius: height * 0.015,
		backgroundColor: colors.green,
	},

	containerActive: { opacity: 0.8 },

	title: {
		fontWeight: '700',
		color: colors.white,
		fontSize: RFValue(17),
		lineHeight: RFValue(22),
	},

	freeDelivery: {
		fontWeight: '300',
		color: colors.white,
		fontSize: RFValue(15.5),
		lineHeight: RFValue(20),
	},
});

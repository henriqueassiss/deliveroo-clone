import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../../../utils';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: { aspectRatio: 16 / 9, width: width - width * 0.05 },

	image: {
		width: '100%',
		height: '100%',
		borderRadius: height * 0.015,
	},

	content: {
		...StyleSheet.absoluteFillObject,
		top: '5%',
		left: '5%',
		right: '5%',
		bottom: '5%',
		justifyContent: 'space-between',
	},

	title: {
		fontWeight: '700',
		color: colors.white,
		fontSize: RFValue(17),
	},

	middle: { flexDirection: 'row', height: 60 },

	middleLeft: {
		flex: 1,
		justifyContent: 'space-between',
	},

	freeDelivery: {
		fontWeight: '400',
		color: colors.white,
		fontSize: RFValue(16),
	},

	redeemNow: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},

	arrow: {
		marginLeft: width * 0.02,
	},

	middleRight: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	logo: {
		flex: 1,
		height: '90%',
		resizeMode: 'contain',
	},

	divider: {
		width: 2,
		height: '100%',
		borderRadius: 2,
		backgroundColor: colors.white,
	},

	footer: {
		fontWeight: '300',
		color: colors.white,
		fontSize: RFValue(12),
	},
});

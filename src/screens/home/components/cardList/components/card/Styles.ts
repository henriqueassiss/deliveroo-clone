import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../../../utils';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		width: width - width * 0.05,
	},

	image: {
		flex: 1,
		width: '100%',
		alignSelf: 'center',
		height: height * 0.3,
		resizeMode: 'contain',
		borderTopLeftRadius: height * 0.015,
		borderTopRightRadius: height * 0.015,
	},

	bottom: {
		flex: 1,
		backgroundColor: colors.bright,
		paddingHorizontal: width * 0.05,
		paddingVertical: height * 0.0275,
		borderBottomLeftRadius: height * 0.015,
		borderBottomRightRadius: height * 0.015,
	},

	title: { fontSize: RFValue(22), fontWeight: '700' },

	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: height * 0.0075,
	},

	greenText: {
		fontWeight: '400',
		color: colors.green,
		fontSize: RFValue(16),
	},

	grayText: {
		fontWeight: '400',
		color: colors.gray,
		fontSize: RFValue(16),
	},

	icon: {
		marginRight: width * 0.015,
	},

	divider: {
		width: width * 0.0075,
		height: width * 0.0075,
		backgroundColor: colors.gray,
		marginHorizontal: width * 0.02,
		borderRadius: (width * 0.01) / 2,
	},
});

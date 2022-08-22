import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../../../utils';

const { height, width } = Dimensions.get('window');

const size = height * 0.05;

export const styles = StyleSheet.create({
	container: {
		height: size,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},

	image: {
		width: size,
		height: size,
		overflow: 'hidden',
		alignItems: 'center',
		borderRadius: size / 2,
		justifyContent: 'center',
		transform: [{ scaleX: -1 }],
		backgroundColor: colors.bright,
	},

	imageIcon: { resizeMode: 'center', transform: [{ scale: 1.5 }] },

	text: { marginLeft: width * 0.02, justifyContent: 'center' },

	textTime: { color: colors.gray, fontSize: RFValue(15) },

	textLocation: {
		alignItems: 'flex-end',
		flexDirection: 'row',
	},

	textLocationValue: {
		fontWeight: 'bold',
		color: colors.black,
		fontSize: RFValue(18),
		marginRight: width * 0.01,
	},

	button: {
		width: size,
		height: size,
		marginLeft: 'auto',
		alignItems: 'center',
		borderRadius: size / 2,
		justifyContent: 'center',
		backgroundColor: colors.lightGreen,
	},

	buttonActive: {
		opacity: 0.7,
	},
});

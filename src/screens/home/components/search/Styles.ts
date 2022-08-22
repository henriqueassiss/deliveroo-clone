import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

const { height, width } = Dimensions.get('window');

const searchSize = height * 0.065;

export const styles = StyleSheet.create({
	container: {
		height: searchSize,
		flexDirection: 'row',
	},

	input: {
		height: searchSize,
		width: width * 0.84,
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: height * 0.01,
		backgroundColor: colors.bright,
		paddingHorizontal: width * 0.025,
	},

	inputField: { marginLeft: width * 0.02, flex: 1 },

	button: {
		height: searchSize,
		marginLeft: 'auto',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonActive: {
		opacity: 0.7,
	},
});

import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../../../utils';

const { height } = Dimensions.get('window');

const cardSize = height * 0.15;

export const styles = StyleSheet.create({
	card: {
		height: cardSize,
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: cardSize + height * 0.02,
	},

	cardImage: {
		width: '100%',
		height: '77%',
		resizeMode: 'contain',
	},

	cardTitle: {
		fontWeight: '700',
		color: colors.black,
		fontSize: RFValue(16),
	},
});

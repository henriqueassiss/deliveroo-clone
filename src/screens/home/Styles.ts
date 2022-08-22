import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../utils';

export const styles = StyleSheet.create({
	container: { flexDirection: 'row' },

	title: {
		fontWeight: '700',
		color: colors.black,
		fontSize: RFValue(23),
	},
});

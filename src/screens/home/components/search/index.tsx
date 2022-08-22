import React from 'react';
import { Dimensions, Pressable, TextInput, View } from 'react-native';
import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline';

import { colors } from '../../../../utils';
import { styles } from './Styles';

const { height } = Dimensions.get('window');

export const Search = () => {
	return (
		<View style={styles.container}>
			<View style={styles.input}>
				<SearchIcon size={height * 0.03} color={colors.gray} />

				<TextInput
					style={styles.inputField}
					placeholder='Comidas, bebidas, serviços'
				/>
			</View>

			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed && styles.buttonActive,
				]}>
				<AdjustmentsIcon size={height * 0.035} color={colors.green} />
			</Pressable>
		</View>
	);
};

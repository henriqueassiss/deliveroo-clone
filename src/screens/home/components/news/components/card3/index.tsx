import React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import { ArrowCircleRightIcon } from 'react-native-heroicons/outline';

import Background from '../../../../../../assets/images/cards/2.jpg';
import { colors } from '../../../../../../utils';
import { styles } from './Styles';

const { height } = Dimensions.get('window');

export const Card3 = () => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.containerActive,
			]}>
			<Image style={styles.image} source={Background} />

			<View style={styles.content}>
				<Text style={styles.promo}>PROMOÇÕES</Text>

				<Text style={styles.title}>1 acheté {'\n'}= 1 oferta</Text>
				<ArrowCircleRightIcon
					size={height * 0.04}
					color={colors.white}
				/>
			</View>
		</Pressable>
	);
};

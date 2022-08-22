import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text } from 'react-native';

import { styles } from './Styles';

interface ICard {
	image: ImageSourcePropType;
	title: string;
}

export const Card = ({ image, title }: ICard) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.containerActive,
			]}>
			<Image style={styles.image} source={image} />
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};

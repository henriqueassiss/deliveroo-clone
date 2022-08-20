import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text } from 'react-native';

import { styles } from './Styles';

interface INews {
	image: ImageSourcePropType;
	title: string;
}

export const News = ({ image, title }: INews) => {
	return (
		<Pressable style={styles.card}>
			<Image style={styles.cardImage} source={image} />
			<Text style={styles.cardTitle}>{title}</Text>
		</Pressable>
	);
};

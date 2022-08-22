import React from 'react';
import {
	Dimensions,
	Image,
	ImageSourcePropType,
	Text,
	View,
} from 'react-native';
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid';

import { colors } from '../../../../../../utils';
import { styles } from './Styles';

const { height } = Dimensions.get('window');

export interface ICard {
	image: ImageSourcePropType;
	title: string;
	rate: number;
	orders: string;
	distance: string;
	promo: string;
}
export const Card = (props: { data: ICard }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={props.data.image} />

			<View style={styles.bottom}>
				<Text style={styles.title}>{props.data.title}</Text>

				<View style={styles.row}>
					<StarIcon
						style={styles.icon}
						size={height * 0.0325}
						color={colors.green}
					/>

					<Text style={styles.greenText}>
						{props.data.rate.toPrecision(2)}
						{props.data.rate <= 1 && ' Muito Ruim'}
						{props.data.rate > 1 && props.data.rate <= 2 && ' Ruim'}
						{props.data.rate > 2 &&
							props.data.rate <= 3 &&
							' Normal'}
						{props.data.rate > 3 && props.data.rate <= 4 && ' Bom'}
						{props.data.rate > 4 && ' Muito Bom'}
					</Text>

					<View style={styles.divider} />

					<Text style={styles.grayText}>({props.data.orders})</Text>
				</View>

				<View style={styles.row}>
					<LocationMarkerIcon
						style={styles.icon}
						size={height * 0.0325}
						color={colors.gray}
					/>

					<Text style={styles.grayText}>{props.data.distance}</Text>

					<View style={styles.divider} />

					<Text style={styles.grayText}>{props.data.promo}</Text>
				</View>
			</View>
		</View>
	);
};

import React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

import Delivery from '../../../../../../assets/images/other/Delivery.png';
import Pickup from '../../../../../../assets/images/other/Pickup.png';
import { colors } from '../../../../../../utils';
import { styles } from './Styles';

interface ITop {
	isDelivery: boolean;
}

const { height } = Dimensions.get('window');

export const Top = ({ isDelivery }: ITop) => {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<Image
					style={styles.imageIcon}
					source={isDelivery ? Delivery : Pickup}
				/>
			</View>

			<View style={styles.text}>
				<Text style={styles.textTime}>
					{isDelivery ? 'Entrega' : 'Retirada'} - Agora
				</Text>

				<View style={styles.textLocation}>
					<Text style={styles.textLocationValue}>
						Localização Atual
					</Text>

					<ChevronDownIcon size={height * 0.03} color={colors.blue} />
				</View>
			</View>

			<Pressable style={styles.button}>
				<UserIcon size={height * 0.04} color={colors.blue} />
			</Pressable>
		</View>
	);
};

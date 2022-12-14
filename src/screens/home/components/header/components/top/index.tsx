import React, { useState } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

import Delivery from '../../../../../../assets/images/other/Delivery.png';
import Pickup from '../../../../../../assets/images/other/Pickup.png';
import { colors } from '../../../../../../utils';
import { styles } from './Styles';

interface ITop {
	isDelivery: boolean;
	onPress: () => void;
}

const { height } = Dimensions.get('window');

export const Top = ({ isDelivery, onPress }: ITop) => {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<Image
					style={styles.imageIcon}
					source={isDelivery ? Delivery : Pickup}
				/>
			</View>

			<Pressable
				style={({ pressed }) => [
					styles.text,
					pressed && styles.buttonActive,
				]}
				onPress={onPress}>
				<Text style={styles.textTime}>
					{isDelivery ? 'Entrega' : 'Retirada'} - Agora
				</Text>

				<View style={styles.textLocation}>
					<Text style={styles.textLocationValue}>
						Localização Atual
					</Text>

					<ChevronDownIcon
						size={height * 0.03}
						color={colors.green}
					/>
				</View>
			</Pressable>

			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed && styles.buttonActive,
				]}>
				<UserIcon size={height * 0.04} color={colors.green} />
			</Pressable>
		</View>
	);
};

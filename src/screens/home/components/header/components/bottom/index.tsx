import React from 'react';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Divider } from '../../../../../../components';
import { styles } from './Styles';

interface IBottom {
	onChange: (isDelivery: boolean) => void;
}

export const Bottom = ({ onChange }: IBottom) => {
	const [isDelivery, setIsDelivery] = useState(true);

	const handleIsDelivery = (selectedStatus: string) => {
		if (selectedStatus === 'Delivery' && !isDelivery) {
			setIsDelivery(true);
			onChange(true);
		} else if (selectedStatus === 'Pickup' && isDelivery) {
			setIsDelivery(false);
			onChange(false);
		}
	};

	return (
		<View style={styles.container}>
			<Pressable
				style={[styles.button, isDelivery && styles.buttonActive]}
				onPress={() => handleIsDelivery('Delivery')}>
				<Text style={[styles.text, isDelivery && styles.textActive]}>
					Entrega
				</Text>
			</Pressable>

			<Divider size={0.01} />

			<Pressable
				style={[styles.button, !isDelivery && styles.buttonActive]}
				onPress={() => handleIsDelivery('Pickup')}>
				<Text style={[styles.text, !isDelivery && styles.textActive]}>
					Retirada
				</Text>
			</Pressable>
		</View>
	);
};

import React from 'react';
import { Pressable, Text } from 'react-native';

import { Divider } from '../../../../../../components';
import { styles } from './Styles';

export const Card2 = () => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.containerActive,
			]}>
			<Text style={styles.title}>
				14 dias de entregas GRÁTIS para novos clientes
			</Text>

			<Divider isHeight size={0.02} />

			<Text style={styles.freeDelivery}>
				Faça um pedido de R$30 para obter 14 dias de entregas grátis.
				Disponível até 29 de agosto.
			</Text>
		</Pressable>
	);
};

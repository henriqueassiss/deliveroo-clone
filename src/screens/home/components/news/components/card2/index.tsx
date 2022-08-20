import React from 'react';
import { Text, View } from 'react-native';

import { Divider } from '../../../../../../components';
import { styles } from './Styles';

export const Card2 = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				14 dias de entregas GRÁTIS para novos clientes
			</Text>

			<Divider isHeight size={0.02} />

			<Text style={styles.freeDelivery}>
				Faça um pedido de R$30 para obter 14 dias de entregas grátis.
				Disponível até 29 de agosto.
			</Text>
		</View>
	);
};

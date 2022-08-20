import React from 'react';
import { ScrollView } from 'react-native';

import { Divider } from '../../../../components';
import { Card1, Card2, Card3 } from './components';

export const News = () => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<Divider size={0.02} />

			<Card1 />

			<Divider size={0.03} />

			<Card2 />

			<Divider size={0.03} />

			<Card3 />

			<Divider size={0.02} />
		</ScrollView>
	);
};

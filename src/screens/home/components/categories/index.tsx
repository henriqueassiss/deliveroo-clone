import React from 'react';
import { FlatList } from 'react-native';

import { Divider } from '../../../../components';
import { images } from '../../../../utils';
import { Card } from './components';

export const Categories = () => {
	return (
		<FlatList
			data={images}
			horizontal
			alwaysBounceHorizontal
			keyExtractor={(_, i) => i.toString()}
			showsHorizontalScrollIndicator={false}
			ItemSeparatorComponent={() => <Divider size={0.02} />}
			renderItem={item => (
				<Card image={item.item.uri} title={item.item.name} />
			)}
		/>
	);
};

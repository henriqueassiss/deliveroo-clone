import React from 'react';
import { FlatList } from 'react-native';

import { Divider } from '../../../../components';
import { categoriesImages } from '../../../../data';
import { Card } from './components';

export const Categories = () => {
	return (
		<FlatList
			horizontal
			data={categoriesImages}
			alwaysBounceHorizontal
			keyExtractor={(_, i) => i.toString()}
			showsHorizontalScrollIndicator={false}
			ItemSeparatorComponent={() => <Divider size={0.02} />}
			renderItem={item => {
				if (item.index === 0) {
					return (
						<>
							<Divider size={0.02} />

							<Card
								image={item.item.uri}
								title={item.item.name}
							/>
						</>
					);
				} else if (categoriesImages.length === item.index + 1) {
					return (
						<>
							<Card
								image={item.item.uri}
								title={item.item.name}
							/>

							<Divider size={0.02} />
						</>
					);
				}

				return <Card image={item.item.uri} title={item.item.name} />;
			}}
		/>
	);
};

import React from 'react';
import { FlatList } from 'react-native';

import { Divider } from '../../../../components';
import { Card, ICard } from './components';

export const CardList = (props: { cards: ICard[] }) => {
	return (
		<FlatList
			horizontal
			data={props.cards}
			keyExtractor={(_, i) => i.toString()}
			showsHorizontalScrollIndicator={false}
			ItemSeparatorComponent={() => <Divider size={0.025} />}
			renderItem={({ item, index }) => {
				if (index === 0) {
					return (
						<>
							<Divider size={0.025} />

							<Card data={item} />
						</>
					);
				} else if (index === 2) {
					return (
						<>
							<Card data={item} />

							<Divider size={0.025} />
						</>
					);
				}

				return <Card data={item} />;
			}}
		/>
	);
};

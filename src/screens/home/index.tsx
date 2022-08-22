import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Divider, Layout } from '../../components';
import { features } from '../../data/Features';
import {
	BottomSheet,
	CardList,
	Categories,
	Header,
	News,
	Search,
} from './components';
import { ICard } from './components/cardList/components';
import { styles } from './Styles';
export interface IFeatures {
	title: string;
	cards: ICard[];
}

export const Home = () => {
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(0);

	return (
		<>
			<Layout>
				<Header onPress={() => setIsBottomSheetVisible(1)} />

				<Divider isHeight size={0.03} />

				<Search />

				<Divider isHeight size={0.03} />
			</Layout>

			<FlatList
				data={features}
				keyExtractor={(_, i) => i.toString()}
				ItemSeparatorComponent={() => <Divider isHeight size={0.025} />}
				ListHeaderComponent={() => (
					<>
						<Categories />

						<Divider isHeight size={0.03} />

						<News />

						<Divider isHeight size={0.03} />
					</>
				)}
				ListFooterComponent={() => (
					<>
						<Divider isHeight size={0.03} />
					</>
				)}
				renderItem={({ item }) => (
					<>
						<View style={styles.container}>
							<Divider size={0.025} />
							<Text style={styles.title}>{item.title}</Text>
						</View>

						<Divider isHeight size={0.02} />

						<CardList cards={item.cards} />
					</>
				)}
			/>

			<BottomSheet
				isVisible={isBottomSheetVisible}
				setIsVisible={setIsBottomSheetVisible}
			/>
		</>
	);
};

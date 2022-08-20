import React from 'react';
import { ScrollView, View } from 'react-native';

import { Divider, Layout } from '../../components';
import { Categories, Header, Search } from './components';
import { styles } from './Styles';

export const Home = () => {
	return (
		<Layout>
			<View style={styles.container}>
				<Header />

				<Divider isHeight size={0.03} />

				<Search />

				<Divider isHeight size={0.03} />

				<ScrollView showsVerticalScrollIndicator={false}>
					<Categories />

					<Divider isHeight size={0.03} />

					<Categories />

					<Divider isHeight size={0.03} />

					<Categories />

					<Divider isHeight size={0.03} />

					<Categories />

					<Divider isHeight size={0.03} />

					<Categories />

					<Divider isHeight size={0.03} />

					<Categories />

					<Divider isHeight size={0.03} />
				</ScrollView>
			</View>
		</Layout>
	);
};

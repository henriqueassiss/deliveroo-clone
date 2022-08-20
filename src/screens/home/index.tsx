import React from 'react';
import { ScrollView } from 'react-native';

import { Divider, Layout } from '../../components';
import { Categories, Header, Search } from './components';
import { News } from './components/news';

export const Home = () => {
	return (
		<Layout>
			<Header />

			<Divider isHeight size={0.03} />

			<Search />

			<Divider isHeight size={0.03} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />

				<Divider isHeight size={0.03} />

				<News />
			</ScrollView>
		</Layout>
	);
};

import React, { useState } from 'react';
import { View } from 'react-native';

import { Divider } from '../../../../components';
import { Bottom } from './components';
import { Top } from './components/top';

interface IHeader {
	onPress: () => void;
}

export const Header = ({ onPress }: IHeader) => {
	const [isDelivery, setIsDelivery] = useState(true);

	return (
		<View>
			<Top isDelivery={isDelivery} onPress={onPress} />

			<Divider isHeight size={0.03} />

			<Bottom onChange={setIsDelivery} />
		</View>
	);
};

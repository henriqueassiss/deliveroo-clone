import React, { useState } from 'react';
import { View } from 'react-native';

import { Divider } from '../../../../components';
import { Bottom } from './components';
import { Top } from './components/top';

export const Header = () => {
	const [isDelivery, setIsDelivery] = useState(true);

	return (
		<View>
			<Top isDelivery={isDelivery} />

			<Divider isHeight size={0.03} />

			<Bottom onChange={setIsDelivery} />
		</View>
	);
};

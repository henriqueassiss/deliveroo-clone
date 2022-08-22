import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './src/screens';

export default function App() {
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView>
				<Home />
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
}

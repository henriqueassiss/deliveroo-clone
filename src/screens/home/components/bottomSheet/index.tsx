import {
	BottomSheetView,
	default as DefaultBottomSheet,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { Dimensions, Text } from 'react-native';
import { ClockIcon, LocationMarkerIcon } from 'react-native-heroicons/outline';

import { Divider } from '../../../../components';
import { colors } from '../../../../utils';
import { styles } from './Styles';

interface IBottomSheet {
	isVisible: number;
	setIsVisible: () => void;
}
const { height } = Dimensions.get('window');

export const BottomSheet = ({ isVisible, setIsVisible }: IBottomSheet) => {
	const snapPoints = [1, '43%'];

	return (
		<DefaultBottomSheet
			index={isVisible}
			enablePanDownToClose
			style={styles.container}
			snapPoints={snapPoints}
			onClose={setIsVisible}>
			<BottomSheetView>
				<Text style={styles.title}>Sua localização</Text>

				<Divider isHeight size={0.03} />

				<BottomSheetView style={styles.row}>
					<LocationMarkerIcon
						size={height * 0.03}
						color={colors.gray}
					/>

					<Divider size={0.03} />

					<Text style={styles.text}>Sua localização</Text>
				</BottomSheetView>

				<Divider isHeight size={0.04} />

				<Text style={styles.title}>Sua localização</Text>

				<Divider isHeight size={0.03} />

				<BottomSheetView style={styles.row}>
					<ClockIcon size={height * 0.03} color={colors.gray} />

					<Divider size={0.03} />

					<Text style={styles.text}>Seus pedidos nesse endereço</Text>
				</BottomSheetView>
			</BottomSheetView>
		</DefaultBottomSheet>
	);
};

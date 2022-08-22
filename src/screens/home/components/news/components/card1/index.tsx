import React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import { ArrowNarrowRightIcon } from 'react-native-heroicons/outline';

import PrimeLogo from '../../../../../../assets/images/brand/PrimeWhiteLogo.png';
import Logo from '../../../../../../assets/images/brand/VerticalWhiteLogo.png';
import Background from '../../../../../../assets/images/cards/1.jpg';
import { Divider } from '../../../../../../components';
import { colors } from '../../../../../../utils';
import { styles } from './Styles';

const { height } = Dimensions.get('window');

export const Card1 = () => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.containerActive,
			]}>
			<Image style={styles.image} source={Background} />

			<View style={styles.content}>
				<Text style={styles.title}>
					Adquira o Deliveroo Plus de GRAÇA com assinatura da Amazon
					Prime
				</Text>

				<View style={styles.middle}>
					<View style={styles.middleLeft}>
						<Text style={styles.freeDelivery}>Entrega Grátis</Text>

						<View style={styles.redeemNow}>
							<Text style={styles.title}>Gerar agora</Text>

							<ArrowNarrowRightIcon
								style={styles.arrow}
								size={height * 0.0325}
								color={colors.white}
							/>
						</View>
					</View>

					<View style={styles.middleRight}>
						<Image style={styles.logo} source={Logo} />
						<Divider size={0.05} />

						<View style={styles.divider} />

						<Divider size={0.055} />

						<Image style={styles.logo} source={PrimeLogo} />
					</View>
				</View>

				<Text style={styles.footer}>
					Valor mínimo de compra é de R$ 50. Taxas de serviços e
					termos estão inclusos.
				</Text>
			</View>
		</Pressable>
	);
};

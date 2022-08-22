import { default as Burger1 } from '../assets/images/features/burger/1.png';
import { default as Burger2 } from '../assets/images/features/burger/2.png';
import { default as Burger3 } from '../assets/images/features/burger/3.png';
import { default as Plate1 } from '../assets/images/features/plates/1.png';
import { default as Plate2 } from '../assets/images/features/plates/2.png';
import { default as Plate3 } from '../assets/images/features/plates/3.png';
import { IFeatures } from '../screens/home';

export const features: IFeatures[] = [
	{
		title: 'Mais pedidos na sua vizinhança',
		cards: [
			{
				image: Burger1,
				title: 'Tasty Burger',
				rate: 4.0,
				orders: '100+',
				distance: 'Perto',
				promo: 'Entrega grátis',
			},
			{
				image: Burger2,
				title: 'Burger House',
				rate: 3.9,
				orders: '250+',
				distance: '1.2km',
				promo: 'Entrega grátis',
			},
			{
				image: Burger3,
				title: 'Burger Special',
				rate: 4.4,
				orders: '500+',
				distance: '2.5km',
				promo: 'Taxa de entrega R$7,99',
			},
		],
	},
	{
		title: '20% de desconto',
		cards: [
			{
				image: Plate1,
				title: 'BBQ',
				rate: 3.7,
				orders: '50+',
				distance: '1.2km',
				promo: 'Entrega grátis',
			},
			{
				image: Plate2,
				title: 'Jack Food',
				rate: 4.1,
				orders: '250+',
				distance: 'Perto',
				promo: 'Entrega grátis',
			},
			{
				image: Plate3,
				title: 'Brazilian Taste',
				rate: 4.3,
				orders: '100+',
				distance: '2.5km',
				promo: 'Taxa de entrega R$6,99',
			},
		],
	},
];

import { TrendingAssets } from '../types';
import { brands } from './brands';

const { bitcoin, binanace, ethereum, shiba, solana } = brands;

export const data: TrendingAssets[] = [
	{
		brand: bitcoin,
		price: 32812.8,
		changePercent: { percent: 10, type: 'increase' },
		tvl: 60_000,
		similar: [ethereum, solana, binanace],
	},
	{
		brand: solana,
		price: 32.83,
		changePercent: { percent: 12.32, type: 'decrease' },
		tvl: 60_000,
		similar: [bitcoin, ethereum, binanace],
	},
	{
		brand: ethereum,
		price: 1466.45,
		changePercent: { percent: 11.93, type: 'decrease' },
		tvl: 60_000,
		similar: [solana, bitcoin, binanace],
	},
	{
		brand: binanace,
		price: 1.0,
		changePercent: { percent: 0.26, type: 'increase' },
		tvl: 60_000,
		similar: [solana, ethereum, shiba],
	},
	{
		brand: shiba,
		price: 0.00000001948,
		changePercent: { percent: 8.1, type: 'decrease' },
		tvl: 60_000,
		similar: [solana, ethereum, binanace],
	},
];

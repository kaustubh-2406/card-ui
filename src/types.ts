export interface Brands {
	name: string;
	shortName: string;
	iconPath: string;
}

export interface TrendingAssets {
	brand: Brands;
	price: number;
	changePercent: { percent: number; type: 'increase' | 'decrease' };
	tvl: number;

	similar: Brands[];
}

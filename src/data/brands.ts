import { Brands } from '../types';

const bitcoin: Brands = {
	name: 'Bitcoin',
	shortName: 'BTC',
	iconPath: '/assets/bitcoin.svg',
};

const solana: Brands = {
	name: 'Solana',
	shortName: 'SOL',
	iconPath: '/assets/solana.svg',
};

const ethereum: Brands = {
	name: 'Ethereum',
	shortName: 'ETH',
	iconPath: '/assets/ethereum.svg',
};

const binanace: Brands = {
	name: 'Binanace USD',
	shortName: 'BUSD',
	iconPath: '/assets/binanance.svg',
};

const shiba: Brands = {
	name: 'Shiba Inu',
	shortName: 'SHIB',
	iconPath: '/assets/shiba.svg',
};

// data..
export const brands: Record<string, Brands> = {
	bitcoin,
	solana,
	ethereum,
	binanace,
	shiba,
};

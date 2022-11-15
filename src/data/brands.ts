import { Brands } from '../types';

// icons..
import bitcoinIcon from '../assets/bitcoin.svg';
import solanaIcon from '../assets/solana.svg';
import ethereumIcon from '../assets/ethereum.svg';
import binanaceIcon from '../assets/binanace.svg';
import shibaIcon from '../assets/shiba.svg';

const bitcoin: Brands = {
	name: 'Bitcoin',
	shortName: 'BTC',
	iconPath: bitcoinIcon,
};

const solana: Brands = {
	name: 'Solana',
	shortName: 'SOL',
	iconPath: solanaIcon,
};

const ethereum: Brands = {
	name: 'Ethereum',
	shortName: 'ETH',
	iconPath: ethereumIcon,
};

const binanace: Brands = {
	name: 'Binanace USD',
	shortName: 'BUSD',
	iconPath: binanaceIcon,
};

const shiba: Brands = {
	name: 'Shiba Inu',
	shortName: 'SHIB',
	iconPath: shibaIcon,
};

// data..
export const brands: Record<string, Brands> = {
	bitcoin,
	solana,
	ethereum,
	binanace,
	shiba,
};

import React from 'react';
import { data } from '../data/trending-assets';
import Card from './Card';

function TrendingAssets() {
	return (
		<div className='px-10'>
			<h1 className='mb-20'>Trending Assets</h1>
			<div className='flex gap-6 justify-start items-center'>
				{data.map((item) => (
					<Card data={item} />
				))}
			</div>
		</div>
	);
}

export default TrendingAssets;

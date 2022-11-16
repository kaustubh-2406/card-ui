import React from 'react';
import { data } from '../data/trending-assets';
import Card from './Card';

function TrendingAssets() {
	return (
		<div className='px-10'>
			<h1 className='mb-20 flex gap-4'>
				<img
					className='h-[40px] w-auto'
					src='/assets/activity.svg'
					alt='Activity svg'
				/>
				<span>Trending Assets</span>
			</h1>
			<div className='flex gap-6 justify-start items-center'>
				{data.map((item) => (
					<Card key={item.brand.shortName} data={item} />
				))}
			</div>
		</div>
	);
}

export default TrendingAssets;

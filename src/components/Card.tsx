import React from 'react';
import { TrendingAssets } from '../types';
import Semicircle from './Semicircle';

export const Card: React.FC<{ data: TrendingAssets }> = ({ data }) => {
	return (
		<div className='relative h-[350px] w-[290px] p-2 text-white bg-gradient rounded-2xl'>
			{/* rounded semicircle... with width 125px */}
			<div className='absolute left-1/2 top-0 w-[125px] h-[125px] transform -translate-x-1/2 -translate-y-1/2'>
				<Semicircle size='125px' />
			</div>

			{/* icons.. */}
			<div className='absolute left-1/2 top-0 w-[100px] h-[100px] flex justify-center items-center rounded-full icon-bg-gradient transform -translate-x-1/2 -translate-y-1/2'>
				<img src={data.brand.iconPath} alt='icon' />
			</div>

			{/* add some spacing to top, to push content down.. */}
			<div className='h-[50px]'></div>

			{/* brand names */}
			<p className='flex flex-col my-4 justify-center items-center text-[#737BAE] text-xs font-semibold'>
				{data.brand.name} ({data.brand.shortName})
			</p>

			{/* Price */}
			<div className='h-10 rounded-full relative px-4 bg-theme-dark text-sm flex justify-center items-center'>
				<div className='flex-1 text-base text-right'>$ {data.price}</div>
				<span
					className={`flex-1 text-xs text-right w-auto ${
						data.changePercent.type === 'increase'
							? 'text-green-600'
							: 'text-red-600'
					}`}>
					{data.changePercent.type === 'increase' ? '+ ' : '- '}
					{data.changePercent.percent}%
				</span>
			</div>
			<p className='flex flex-col py-2 justify-center items-center text-[#5A5F7D] text-xs font-semibold'>
				Price
			</p>

			{/* TVL */}
			<div className='h-10 rounded-full relative px-4 bg-theme-dark text-sm flex justify-center items-center'>
				$ {data.tvl}
			</div>
			<p className='flex py-2 justify-center items-center text-[#5A5F7D] text-xs font-semibold'>
				TVL
			</p>

			{/* similar */}
			<div className='mt-6 h-11 rounded-full py-2 bg-theme-dark flex justify-center items-center gap-4'>
				{data.similar.map((item) => (
					<img
						className={`h-full w-auto hover:scale-110`}
						src={item.iconPath}
					/>
				))}
			</div>
			<p className='pt-2 pb-8 text-center text-[#5A5F7D] text-xs font-semibold'>
				Popular Pairs
			</p>
		</div>
	);
};

export default Card;

import React, { useState, useEffect } from 'react';
import { IpynbRenderer } from "react-ipynb-renderer";
import "react-ipynb-renderer/dist/styles/monokai.css";
import ipynb1 from "../../../files/TTL_Bodhisatta_GooglePlayReviews.json";
import jsonData from '../../../data/content/Anwesha.json';

function Home() {
	const parts = Object.values(jsonData.texts);

	// Helper function to capitalize only the first letter of each word
	const capitalizeFirstLetter = (string) => {
		return string.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
	};

	return (
		<div className='min-h-[400px] p-2 md:p-8'>

			<div className='w-full'>
				
				{/* Rendering all parts */}
				<div className='p-2 md:p-8 bg-black/20 rounded-3xl'>
					{parts.map((part, partIndex) => (
						<div key={partIndex}>
							{part.map((item, itemIndex) => (
								<div 
									className='text-justify'
									key={itemIndex}
								>
									{item[1]==="" ? (
										<p className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mt-16'>{capitalizeFirstLetter(item[0])}</p>
									) : (
										item[0].length===2 ? (
											<span className='font-bold text-lg md:text-2xl w-fit '>{item[0]}</span>
										) : (
											<span className='font-bold text-lg md:text-2xl w-fit '>{capitalizeFirstLetter(item[0])}</span>
										)
									)}
									<span> - </span>
									<span className=''>{item[1]}</span>
								</div>
							))}
						</div>
					))}
				</div>

				{/* ipynb viewer */}
				<IpynbRenderer ipynb={ipynb1} />
			</div>
		</div>
	)
}

export default Home
import React, { useState } from 'react';
import { IpynbRenderer } from "react-ipynb-renderer";
import "react-ipynb-renderer/dist/styles/monokai.css";
import ipynb1 from "../../../files/TTL_Bodhisatta_GooglePlayReviews.json";
import jsonData from '../../../data/content/Anwesha.json';
import link_data from '../../../data/links.json';

function Home() {
	// const parts = Object.values(jsonData.texts);
	const parts = jsonData.texts;
	const [panelOpen, setPanelOpen] = useState(false);

	// clicking button opens / closes the panel 
  const ClickPanel = () => {
		setPanelOpen ((prev) => {
			return !prev;
		})
  }

	// Helper function to capitalize only the first letter of each word
	const capitalizeFirstLetter = (string) => {
		return string.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
	};

	return (
		<div className='min-h-[400px] p-2 md:p-8'>

			<div className='w-full'>
				
				{/* Read Button */}
				<button 
					className={`font-bold text-xl md:text-2xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mb-4 ${panelOpen ? 'sticky top-48 left-2' : ''}`}
					onClick={ClickPanel}
				>
					<span>Data Science </span>
					{panelOpen && (<span>(Collapse) &uarr;</span>)}
					{!panelOpen && (<span>(Expand) &darr;</span>)}
				</button>

				{/* Rendering all parts */}
				{panelOpen && (
					<div className='p-2 md:p-8 bg-black/20 rounded-3xl'>
						{parts.map((part, partIndex) => (
							<div key={partIndex}>
								{part.parts.map((item, itemIndex) => (
									<div 
										className='text-justify'
										key={itemIndex}
									>
										{item[1]==="" ? (
											<p className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mt-16'>
												{capitalizeFirstLetter(item[0])}
											</p>
										) : (
											item[0].length===2 ? (
												<p className='font-bold text-lg md:text-2xl w-fit mt-4'>{item[0]}</p>
											) : (
												<p className='font-bold text-lg md:text-2xl w-fit mt-4'>{capitalizeFirstLetter(item[0])}</p>
											)
										)}
										<p className=''>{item[1]}</p>
									</div>
								))}
							</div>
						))}
					</div>
				)}

				{/* ipynb viewer */}
				<div className='p-2 md:p-8 bg-black/20 rounded-3xl my-4'>
					<div className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mb-4'>Sentiment Analysis on Google Play Store Reviews</div>
					<div className='text-lg mb-4'>
						<span>Using play store reviews dataset from kaggle - </span>
						<span className='ml-1'>
							<button 
								className='underline'
								onClick={() => window.open(link_data.link_kaggleDataset, '_blank')}
							>
								dataset_reviews_2.csv
							</button>
						</span>
					</div>
					<IpynbRenderer ipynb={ipynb1} />

				</div>
			</div>
		</div>
	)
}

export default Home
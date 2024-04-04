import React, { useState } from 'react';
import { IpynbRenderer } from "react-ipynb-renderer";
import UsingHuggingFace from './UsingHuggingFace';
import SentimentPieChart from './SentimentPieChart';
import jsonData from '../../../data/content/Shreya.json';

// import ipynb file as json
import ipynb2 from "../../../files/TTL_HuggingFace.json";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";

function Content_WithHuggingFace({serverActive, getData, data}) {
  const parts = Object.values(jsonData.texts);
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
					<span>Sentiment Analysis with prebuilt models </span>
					{panelOpen && (<span>(Collapse) &uarr;</span>)}
					{!panelOpen && (<span>(Expand) &darr;</span>)}
				</button>

				{/* Rendering all parts */}
				{panelOpen && (
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
					<div className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto my-4'>Example : Sentiment Analysis using twitter-RoBERTa</div>
					<IpynbRenderer ipynb={ipynb2} />
				</div>

				<div className='p-2 md:p-8 bg-black/20 rounded-3xl my-4'>
					<div className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto my-4'>Test the Model</div>
					<UsingHuggingFace getData={getData} serverActive={serverActive}/>
					<SentimentPieChart data={data} serverActive={serverActive} />
				</div>
			</div>
    </div>
  )
}

export default Content_WithHuggingFace
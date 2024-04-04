import React, { useState } from 'react';
import { IpynbRenderer } from "react-ipynb-renderer";
// import UsingHuggingFace from './U';
import jsonData from '../../../data/content/Sankalp.json';

// import ipynb file as json
import ipynb4 from "../../../files/TTL_Sankalp_usingNLTK.json";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";

function Content_WithNLTK({serverActive, getData}) {
  const parts = Object.entries(jsonData.texts);
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
					<span>Sentiment Analysis with NLTK</span>
					{panelOpen && (<span>(Collapse) &uarr;</span>)}
					{!panelOpen && (<span>(Expand) &darr;</span>)}
				</button>

				{/* Rendering all parts */}
				{panelOpen && (
          <div className='p-2 md:p-8 bg-black/20 rounded-3xl'>
            {parts.map(([partKey, partData], partIndex) => (
              <div
                className='text-justify'
                key={partIndex}
              >
                {Array.isArray(partData) && partData.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {(item[1].length===1 && item[1][0]==="") ? (
                      <p className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mt-16'>{capitalizeFirstLetter(item[0])}</p>
                    ) : (
                      <p className='font-bold text-lg md:text-2xl w-fit mt-4'>{capitalizeFirstLetter(item[0])}</p>
                    )}
                    <ul>
                      {item[1][0]!=="" && item[1].map((sentence, sentenceIndex) => (
                        <li className=''>
                        <span>{sentenceIndex+1}. </span>
                        <span 
                          className=''
                          key={sentenceIndex}
                        >{sentence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

				{/* ipynb viewer */}
				<div className='p-2 md:p-8 bg-black/20 rounded-3xl my-4'>
					<div className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mb-4'>Example : Sentiment Analysis using NLTK</div>
					<IpynbRenderer ipynb={ipynb4} />
				</div>
			</div>
    </div>
  )
}

export default Content_WithNLTK
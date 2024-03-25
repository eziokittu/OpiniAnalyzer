import React from 'react'
import UsingHuggingFace from '../components/UsingHuggingFace';
import UsingMyModel1 from '../components/UsingMyModel1';

function Body() {
	return (
		<div className={`p-8 flex-col text-center`}>

			{/* Heading */}
			<div
				className='mx-auto flex flex-col'
			>
				<div className='text-4xl font-bold text-red-500'>OpiniAnalyzer</div>
				<div
					className='text-lg text-red-900'
				>Understanding the tone of your review (positive / neutral / negative)
				</div>
			</div>

			{/* Using Hugging-Face Inference API*/}
			<UsingHuggingFace disableTimeInMs={10000}/>

			{/* Using out own model */}
			<UsingMyModel1 />

		</div>
	)
}

export default Body
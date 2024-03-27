import React, { useState } from 'react'
import UsingHuggingFace from '../components/UsingHuggingFace';
import UsingMyModel1 from '../components/UsingMyModel1';
import SentimentPieChart from './SentimentPieChart';

function Body() {

	const [countPositive, setCountPositive] = useState(0);
	const [countNegative, setCountNegative] = useState(0);
	const [countNeutral, setCountNeutral] = useState(0);
	const [sentimentData, setSentimentData] = useState({ "neutral": 0, "positive": 0, "negative": 0 });

	const getData = async (data) => {
		if (data === 'neutral'){
			await setCountNeutral(countNeutral+1);
		}
		else if (data === 'positive'){
			await setCountPositive(countPositive+1);
		}
		else if (data === 'negative'){
			await setCountNegative(countNegative+1);
		}
		await setSentimentData({ "neutral": countNeutral, "positive": countPositive, "negative": countNegative });
	}

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
				<div
					className='text-sm text-red-900 my-4'
				><span>The server is </span><span className='font-bold'>hosted for free</span>, and takes some time to load (for the 1st time only), so please <span className='font-bold'>wait for 10-15 seconds</span> and then it will work!
				</div>
			</div>

			{/* Using Hugging-Face Inference API*/}
			<UsingHuggingFace getData={getData} />

			{/* Using out own model */}
			<UsingMyModel1 getData={getData} />

			<SentimentPieChart data={sentimentData} />

		</div>
	)
}

export default Body
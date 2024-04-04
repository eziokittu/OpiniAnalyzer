import React, { useState } from 'react';
import UsingHuggingFace from './UsingHuggingFace';
import UsingModelWithNltk from './UsingModelWithNltk';
import SentimentPieChart from './SentimentPieChart';

function Models({serverActive}) {
  const [countPositive, setCountPositive] = useState(0);
	const [countNegative, setCountNegative] = useState(0);
	const [countNeutral, setCountNeutral] = useState(0);
	const [sentimentData, setSentimentData] = useState({ "neutral": 0, "positive": 0, "negative": 0 });
	
	const getData = data => {
		if (data === 'neutral') {
			setCountNeutral((prev) => {
        return prev + 1
      });
		}
		else if (data === 'positive') {
			setCountPositive((prev) => {
        return prev + 1
      });
		}
		else if (data === 'negative') {
			setCountNegative((prev) => {
        return prev + 1
      });
		}
		// setSentimentData({ "neutral": countNeutral, "positive": countPositive, "negative": countNegative });
    setSentimentData(prevData => ({
      ...prevData,
      [data]: prevData[data] + 1
    }));
	}

	return (
		<div className={`p-2 md:p-8 flex-col text-center min-h-[400px]`}>
      {serverActive && (
      <>
        <UsingHuggingFace getData={getData} />
        <UsingModelWithNltk getData={getData} />
        <SentimentPieChart data={sentimentData} />
      </>
      )}
      {!serverActive && (
        <div className=''>Please be patient! Server is starting up!</div>
      )}
		</div>
	)
}

export default Models
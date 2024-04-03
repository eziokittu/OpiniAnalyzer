import React , { useState, useEffect } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

import { Pie } from 'react-chartjs-2';

function SentimentPieChart({ data }) {
  const [chartData, setChartData] = useState({
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [{
      data: [data.positive, data.neutral, data.negative],
      backgroundColor: ['green', 'yellow', 'red'],
    }]
  });

  useEffect(() => {
		console.log("DATA: Positive:",data.positive,", Neutral:", data.neutral,", Negative:", data.negative);
    setChartData({
      labels: ['Positive', 'Neutral', 'Negative'],
      datasets: [{
        data: [data.positive, data.neutral, data.negative],
        backgroundColor: ['green', 'yellow', 'red'],
      }]
    });
  }, [data]);

	return (
		<div className=' my-8 shadow-xl rounded-xl p-4 flex flex-col text-center items-center justify-center 
    bg-gradient-to-b from-black/10 via-black/20 to-black/5 border-1 border-bg-gray-400'>
			<div className='text-2xl'>Pie Chart for the review's sentiments</div>
      {chartData && (
			<div className='h-[300px]'>
				<Pie 
					data={chartData} 
				/>
			</div>
      )}
		</div>
	)
}
export default SentimentPieChart;
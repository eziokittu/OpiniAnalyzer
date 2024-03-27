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
		<div className='border-2 border-bg-gray-400 p-4 flex flex-col'>
			<div className='text-2xl'>Pie Chart for the review's sentiments</div>
			<div>
				<Pie 
					data={chartData} 
					width={400}
					height={400}
				/>
			</div>
		</div>
	)
}
export default SentimentPieChart;
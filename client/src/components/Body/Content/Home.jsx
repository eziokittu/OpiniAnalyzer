import React, { useState, useEffect } from 'react';
import { IpynbRenderer } from "react-ipynb-renderer";
import "react-ipynb-renderer/dist/styles/monokai.css";
import ipynb1 from "../../../files/TTL_Bodhisatta_GooglePlayReviews.json";

function Home() {

	return (
		<div className='min-h-[400px] p-2 md:p-8'>

			{/* ipynb viewer */}
			<div className='w-full'>
				<IpynbRenderer ipynb={ipynb1} />
			</div>
		</div>
	)
}

export default Home
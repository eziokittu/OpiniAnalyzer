import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Home from './components/Body/Content/Home';
import BackgroundTransition from './components/Body/Reusable/BackgroundTransition';
import Footer from './components/Footer/Footer';
import NotFound from './components/Body/Content/NotFound';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './components/Body/Reusable/Title';
import Content_WithHuggingFace from './components/Body/Content/Content_WithHuggingFace';
import Content_WithNLTK from './components/Body/Content/Content_WithNLTK';
import Content_WithoutNLTK from './components/Body/Content/Content_WithoutNLTK';
import Documentation from './components/Body/Content/Documentation';

function App() {
	const [serverActive, setServerActive] = useState(false);
	const [openSecondHeader, setOpenSecondHeader] = useState(2);

	const [countPositive, setCountPositive] = useState(0);
	const [countNegative, setCountNegative] = useState(0);
	const [countNeutral, setCountNeutral] = useState(0);
	const [sentimentData, setSentimentData] = useState({ "neutral": 0, "positive": 0, "negative": 0 });
	
	const openSecondNavbarCallback = (value) => {
		setOpenSecondHeader(() => {
			return value;
		})
	}
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

  // Function to format time
	const formatTime = (timestamp) => {
		// Create a new Date object using the timestamp
		const currentDate = new Date(timestamp);

		// Get hours, minutes, and seconds
		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes();
		const seconds = currentDate.getSeconds();

		// Format hours, minutes, and seconds to ensure they have leading zeros if necessary
		const formattedHours = hours < 10 ? `0${hours}` : hours;
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

		// Construct the HH:MM:SS string
		return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
	}
  
  // React useEffect hook to check server readiness
	useEffect(() => {
		const checkServerReady = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/working`);
				if (response.ok) {
					console.log("Server is ready at: " + formatTime(Date.now()));
					setServerActive(true); // Server is ready
				} else {
					console.log("Server not ready");
					setServerActive(false); // Server is not ready
				}
			} catch (error) {
				console.log("Error checking server status:", error);
				setServerActive(false); // Error occurred, assume server is not ready
			}
		};

		// Call the check immediately once
		checkServerReady();

		// Set the interval to continuously check server status
		const intervalId = setInterval(checkServerReady, 90002); // Check every 90 seconds , shagun ke 2 mili secs XD

		// Clean up interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

  return (
    <BackgroundTransition>
      <Title serverActive={serverActive}/>
      <div className='fixed -top-10 z-10 blur-xl h-[200px] bg-gray-200 w-full' />
      <BrowserRouter>
        <Header openSecondHeader={openSecondHeader} openSecondNavbarCallback={openSecondNavbarCallback}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/docs" element={<Documentation />} />
          <Route exact path="/without-nltk" element={<Content_WithoutNLTK serverActive={serverActive} getData={getData} data={sentimentData}/>} />
          <Route exact path="/with-nltk" element={<Content_WithNLTK serverActive={serverActive} getData={getData} data={sentimentData}/>} />
          <Route exact path="/with-huggingface" element={<Content_WithHuggingFace serverActive={serverActive} getData={getData} data={sentimentData}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BackgroundTransition>
  );
}

export default App;

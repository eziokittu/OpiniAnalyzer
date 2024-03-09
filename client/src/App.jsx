import React from 'react';
import UsingHuggingFace from './components/UsingHuggingFace';
import UsingAnotherModel from './components/UsingAnotherModel';
import BackgroundTransition from './components/BackgroundTransition';
import Footer from './components/Footer';

function App() {
  // Changing background colour
  // const [bgColor, setBgColor] = useState('bg-blue-500'); // Initial background color
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Generate a random color
  //     const randomColor = `bg-${['red', 'green', 'blue'][Math.floor(Math.random() * 3)]}-500`;
  //     setBgColor(randomColor);
  //   }, 3000); // Change color every 3 seconds

  //   return () => clearInterval(interval);
  // }, []); // Run only once on component mount

  

  return (
    <BackgroundTransition>
      <>
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
        <UsingHuggingFace />

        {/* Using out own model */}
        <UsingAnotherModel />

      </div>
      <div className='bg-gradient-to-t from-black/20 to-transparent h-20'></div>
      <Footer />
      </>
    </BackgroundTransition>
  );
}

export default App;

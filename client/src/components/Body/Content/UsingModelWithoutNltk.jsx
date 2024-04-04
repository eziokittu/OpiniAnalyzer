import React, { useState } from 'react';
import CountdownTimer from '../Reusable/CountdownTimer';
import link_data from '../../../data/links.json';

function UsingModelWithoutNltk({getData}) {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showTimer, setShowTimer] = useState(false); // State variable to control timer visibility
  const [timerTrigger, setTimerTrigger] = useState(false); // State variable to trigger the timer

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/analyze3`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      if (jsonResponse.ok === 1) {
        setResult(jsonResponse.result);
        setDisabled(true);
        setShowTimer(true); // Show the timer
        setTimerTrigger(true); // Trigger the timer
        getData(jsonResponse.result[2].split(': ')[1])
      } else {
        console.log(jsonResponse.message);
      }
    } else {
      console.log('Network response was not ok.');
    }
  };

  // Callback function to handle timer end event
  const handleTimerEnd = () => {
    setShowTimer(false); // Hide the timer
    setTimerTrigger(false); // Reset the timer trigger
    setDisabled(false); // Enable the button
  };

  return (
    <div
      className='mt-8 bg-white/80 p-4 rounded-xl'
    >
      {/* Form 1 */}
      <div 
        className="space-y-4 relative"
      >
        {/* Heading */}
        <div>
          {/* Using Another model - Incomplete [work in progress...] */}
          Model without using - 
          <span
            className='font-bold underline'
          >
            <button onClick={()=>{window.open(`${link_data.link_model_withoutNltk}`, '_blank')}}>
              NLTK Library
            </button>
          </span>
        </div>

        <textarea
          className="w-full p-4 border border-gray-300 rounded-xl"
          rows="2"
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button 
          disabled={disabled}
          onClick={handleSubmit}
          className={`px-4 py-2 ${disabled ? 'bg-gray-600' : 'bg-red-500 hover:bg-red-700'}
          text-white rounded-xl sm:flex `}
        >Analyze Review Sentiment</button>

        {/* Render the CountdownTimer component */}
        {showTimer && <CountdownTimer triggerTimer={timerTrigger} onTimerEnd={handleTimerEnd} timeInSeconds={1} />}
        
        {result && (
          <div className=''>
            <div>Output:</div>
            {result.map((r, index) => (
              <div key={index} className=''>{r}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default UsingModelWithoutNltk;
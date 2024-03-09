import React, { useState, useEffect } from 'react';

function UsingHuggingFace() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setResult(data);
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
          Using Another model - Incomplete [work in progress...]
          {/* <span
            className='font-bold underline'
          >
            <a href='https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest'>
              TWITTER-ROBERTA
            </a>
          </span> */}
        </div>
        {/* <textarea
          className="w-full p-4 border border-gray-300 rounded-xl"
          rows="4"
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea> */}
        {/* <button 
          onClick={handleSubmit}
          className="px-4 py-2 bg-red-500 hover:bg-red-700
          text-white rounded-xl sm:flex"
        >Analyze Review Sentiment</button> */}
        {result && (
          <div className="sm:absolute relative bottom-2 right-0">
            {/* For negative result */}
            {result.label==='negative' && (
              <div>
                <span>:( 👎</span>
                <span className='text-pink-700 font-bold'>NEGATIVE Review</span>
                <span className=''> ({Math.round(result.score * 100)}%)</span>
              </div>
            )}
            
            {/* For Positive result */}
            {result.label==='positive' && (
              <div>
                <span>:) 👍</span>
                <span className='text-green-700 font-bold'>POSITIVE Review</span>
                <span className=''> ({Math.round(result.score * 100)}%)</span>
              </div>
            )}

            {/* For Neutral result */}
            {result.label==='neutral' && (
              <div>
                <span>:| 😑</span>
                <span className='text-yellow-700 font-bold'>NEUTRAL Review</span>
                <span className=''>({Math.round(result.score * 100)}%)</span>
              </div>
            )} 
            
          </div>
        )}
      </div>
    </div>
  )
}

export default UsingHuggingFace
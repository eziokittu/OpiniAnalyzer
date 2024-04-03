import React from 'react';
import { Link } from 'react-router-dom';
import link_data from '../../data/links.json';

function Header() {
  return (
    <div 
      className='mx-4 md:mx-8 rounded-3xl bg-black/40 text-black 
      text-sm md:text-lg flex flex-row justify-between items-center 
      space-x-1 md:space-x-2 sticky top-32 md:top-28 z-20 shadow-lg'
    >
      {/* Home */}
      <div 
        className='p-1 md:p-2 rounded-3xl bg-black/40 text-black 
        text-sm md:text-lg flex flex-row justify-center 
        space-x-1 md:space-x-2 sticky top-32 md:top-28 z-20 shadow-lg'
      >
        <div className='bg-gray-200 rounded-3xl border-2 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-2 md:px-4 py-1 md:py-2 text-center'>
          <Link to={"/"}>Home</Link>
        </div>
      </div>

      {/* Models */}
      <div 
        className='p-1 md:p-2 rounded-3xl bg-black/40 text-black 
        text-sm md:text-lg flex flex-row justify-center 
        space-x-1 md:space-x-2 sticky top-32 md:top-28 z-20 shadow-lg'
      >
        <div className='bg-gray-200 rounded-3xl border-2 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-2 md:px-4 py-1 md:py-2 text-center'>
          <Link to={'/without-nltk'}>Without NLTK</Link>
        </div>
        <div className='bg-gray-200 rounded-3xl border-2 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-2 md:px-4 py-1 md:py-2 text-center'>
          <Link to={'/with-nltk'}>With NLTK</Link>
        </div>
        <div className='bg-gray-200 rounded-3xl border-2 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-2 md:px-4 py-1 md:py-2 text-center'>
          <Link to={'/with-huggingface'}>With HuggingFace</Link>
        </div>
      </div>

      {/* Docs */}
      <div 
        className='p-1 md:p-2 rounded-3xl bg-black/40 text-black 
        text-sm md:text-lg flex flex-row justify-center 
        space-x-1 md:space-x-2 sticky top-32 md:top-28 z-20 shadow-lg'
      >
        <div className='bg-gray-200 rounded-3xl border-2 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-2 md:px-4 py-1 md:py-2 text-center'>
          <button onClick={()=>{window.open(`${link_data.link_docs}`, '_blank')}}>Docs</button>
        </div>
      </div>
        

    </div>
  )
}

export default Header
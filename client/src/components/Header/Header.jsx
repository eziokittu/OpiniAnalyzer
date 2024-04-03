import React from 'react';
import { Link } from 'react-router-dom';
import link_data from '../../data/links.json';

function Header() {
  return (
    <div 
      className='py-2 mx-4 px-2 md:mx-8 rounded-3xl bg-black/40 text-black 
      text-sm md:text-lg flex flex-row justify-center 
      space-x-1 md:space-x-2 sticky top-32 md:top-28 z-20 shadow-lg'
    >
      <div 
        className='bg-gray-200 rounded-3xl border-2 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-4 py-2'
      >
        <Link to={"/"}>Home</Link>
      </div>

      <div 
        className='bg-gray-200 rounded-3xl border-2 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-4 py-2'
      >
        <Link to={'/models'}>Using Models</Link>
      </div>

      <div 
        className='bg-gray-200 rounded-3xl border-2 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-4 py-2'
      >
        <button 
          onClick={()=>{window.open(`${link_data.link_docs}`, '_blank')}}
        >Docs</button>
      </div>

    </div>
  )
}

export default Header
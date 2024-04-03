import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div className='cursor-default min-h-[400px] sm:min-h-[600px] flex items-center justify-center bg-slate-200/20'>
        <div 
          className='group/g1 px-2 py-8 text-slate-300 hover:text-slate-100 mx-auto text-xl sm:text-4xl text-center rounded-lg hover:rounded-2xl w-4/5
          shadow-[0_0_10px_black] hover:shadow-[0_0_20px_black] transition-all duration-300 bg-black/20 hover:bg-black/30
        '>
          <div className='text-3xl sm:text-7xl font-bold'>404 Not Found!</div>
          <div className='my-12'>Sorry, the page you are looking for does not exist.</div>
          <Link to={'/'} className='w-fit'>
            <button 
              className='p-4 text-slate-900 bg-green-400/50 group-hover/g1:bg-green-500
              rounded-lg'
            >
              Return to Home
            </button>
          </Link>
        </div>
      </div>  
      
      {/* Transperant gradient - change the height and colours acordingly*/}
      <div className="h-44 sm:h-66 w-full bg-gradient-to-b from-slate-200/20 to-transparent"></div>
    </div>
  );
}

export default NotFound;
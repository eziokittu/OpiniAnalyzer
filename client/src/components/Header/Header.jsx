import React from 'react';
import { Link } from 'react-router-dom';
import link_data from '../../data/links.json';
import { scroller } from 'react-scroll';
import { useParams } from 'react-router-dom';

function Header({openSecondNavbarCallback, openSecondHeader}) {
  const scrollToSection = (section) => {
    // console.log(section);
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: -220
    });
  };

  return (
    <div 
      className='sticky top-32 md:top-28 z-20'
    >
      {/* Upper Layer */}
      <div 
        className='mx-2 md:mx-8 rounded-3xl bg-black/40 text-black 
        text-[14px]  md:text-lg flex flex-row justify-between items-center leading-tight
        space-x-0 md:space-x-2  shadow-lg'
      >
        {/* Home */}
        <div 
          className='p-0 md:p-2 rounded-3xl bg-black/40 text-black 
          md:text-lg flex flex-row justify-center 
          space-x-1 md:space-x-2 sticky top-32 md:top-28 z-20 shadow-lg'
        >
          <div className='bg-gray-200 rounded-3xl border-2 md:border-3 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-1 md:px-4 py-1 md:py-2 text-center'>
            <Link to={"/"} onClick={()=>openSecondNavbarCallback(2)}>Home</Link>
          </div>
        </div>

        {/* Models */}
        <div 
          className='p-0 md:p-2 rounded-3xl bg-black/40 text-black 
          md:text-lg flex flex-row justify-center leading-tight
          space-x-0 md:space-x-2 sticky top-32 md:top-28 z-20 shadow-lg'
        >
          <div className=' bg-gray-200 rounded-3xl border-2 md:border-3 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-1 md:px-4 py-1 md:py-2 text-center'>
            <Link to={'/without-nltk'} onClick={()=>openSecondNavbarCallback(3)}>Without NLTK</Link>
          </div>
          <div className=' bg-gray-200 rounded-3xl border-2 md:border-3 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-1 md:px-4 py-1 md:py-2 text-center'>
            <Link to={'/with-nltk'} onClick={()=>openSecondNavbarCallback(3)}>With NLTK</Link>
          </div>
          <div className=' bg-gray-200 rounded-3xl border-2 md:border-3 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-1 md:px-4 py-1 md:py-2 text-center'>
            <Link to={'/with-huggingface'} onClick={()=>openSecondNavbarCallback(3)}>With HuggingFace</Link>
          </div>
        </div>

        {/* Docs */}
        <div 
          className='p-0 md:p-2 rounded-3xl bg-black/40 text-black 
          md:text-lg flex flex-row justify-center 
          space-x-1 md:space-x-2 sticky top-32 md:top-28 z-20 shadow-lg'
        >
          <div className='bg-gray-200 rounded-3xl border-2 md:border-3 border-gray-600 hover:bg-gray-300 hover:border-gray-800 px-1 md:px-4 py-1 md:py-2 text-center'>
            <Link 
              to={'/docs'}
              onClick={()=>openSecondNavbarCallback(0)}
            >Docs</Link>
          </div>
        </div>
      </div> 

      {/* Lower Layer */}
      {openSecondHeader===3 && (
      <div
        className='rounded-3xl bg-black/40 text-black w-fit mx-auto mt-2
        text-[14px]  md:text-lg flex flex-row justify-center items-center leading-tight
        space-x-1 md:space-x-2  shadow-lg p-2'
      >
        <div className='bg-gray-200 rounded-3xl p-1 md:px-4 md:py-2'>
          <button onClick={()=>{scrollToSection('section1')}}>Read About Model</button>
        </div>
        <div className='bg-gray-200 rounded-3xl p-1 md:px-4 md:py-2'>
          <button onClick={()=>{scrollToSection('section2')}}>Example Code</button>
        </div>
        <div className='bg-gray-200 rounded-3xl p-1 md:px-4 md:py-2'>
          <button onClick={()=>{scrollToSection('section3')}}>Use Model</button>
        </div>
      </div>
      )}
      {openSecondHeader===2 && (
      <div
        className='rounded-3xl bg-black/40 text-black w-fit mx-auto mt-2
        text-[12px]  md:text-lg flex flex-row justify-center items-center leading-tight
        space-x-1 md:space-x-2  shadow-lg p-2'
      >
        <div className='bg-gray-200 rounded-3xl p-1 md:px-4 md:py-2'>
          <button onClick={()=>{scrollToSection('section1')}}>Intro to Data Science</button>
        </div>
        <div className='bg-gray-200 rounded-3xl p-1 md:px-4 md:py-2'>
          <button onClick={()=>{scrollToSection('section2')}}>Play Store Review Analysis</button>
        </div>
      </div>
      )}

    </div>
  )
}

export default Header
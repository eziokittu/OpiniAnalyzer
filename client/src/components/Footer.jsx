import React from 'react'
import link_data from '../data/links.json';

function Footer() {
  return (
    <div className='relative bottom-0 w-full text-center p-8 min-h-[100px] flex flex-col sm:text-xl space-y-3 bg-black/20'>
      <hr className="my-2 h-0.5 border-t-0 bg-black" />
      <div className='text-lg sm:text-2xl'>A small project developed by - </div>
      <button onClick={() => window.open(link_data.link_bodhisatta, '_blank')}
      className='hover:font-bold transition-all'>Bodhisatta Bhattacherjee</button>
      <button onClick={() => window.open(link_data.link_sankalp, '_blank')}
      className='hover:font-bold transition-all'>Sankalp Chauhan</button>
      <button onClick={() => window.open(link_data.link_shreya, '_blank')}
      className='hover:font-bold transition-all'>Shreya Kumari</button>
      <button onClick={() => window.open(link_data.link_anish, '_blank')}
      className='hover:font-bold transition-all'>Anish Singh</button>
      <button onClick={() => window.open(link_data.link_anwesha, '_blank')}
      className='hover:font-bold transition-all'>Anwesha Sahu</button>
    </div>
  )
}

export default Footer
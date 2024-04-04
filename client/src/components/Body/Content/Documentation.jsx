import React from 'react'
import jsonData from '../../../data/links.json';

function Documentation() {
  return (
    <div className='min-h-[400px] p-2 md:p-8'>
      <div className='p-2 md:p-8 bg-black/20 rounded-3xl my-4'>
        <button 
          onClick={() => window.open(link_data.link_anish, '_blank')}
          className=''
        >Full Project Repository</button>
      </div>
    </div>
  )
}

export default Documentation
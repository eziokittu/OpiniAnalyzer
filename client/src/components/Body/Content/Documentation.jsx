import React from 'react'
import jsonData from '../../../data/links.json';

function Documentation() {
  return (
    <div className='min-h-[400px] p-2 md:p-8'>
      <div className='p-2 md:p-8 bg-black/20 rounded-3xl my-4'>

        {/* Project docs */}
        <div>
          <div className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mb-2'>Important Links</div>
          <div className='flex flex-col justify-center space-y-2'>
            <button 
              onClick={() => window.open(jsonData.link_projectRepo, '_blank')}
              className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
            >Project Github Repository</button>
            <button 
              onClick={() => window.open(jsonData.link_projectDocs, '_blank')}
              className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
            >Project Documentation</button>
          </div>
        </div>
        

        {/* Models */}
        <div className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mt-8 mb-2'>Models Used</div>
        <div className='flex flex-col justify-center space-y-2'>
          <button 
            onClick={() => window.open(jsonData.link_model_huggingface_roberta, '_blank')}
            className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
          >Twitter RoBERTa</button>
          <button 
            onClick={() => window.open(jsonData.link_model_withNltk, '_blank')}
            className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
          >With Nltk</button>
          <button 
            onClick={() => window.open(jsonData.link_model_withoutNltk, '_blank')}
            className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
          >Without Nltk</button>
        </div>

        {/* Contributors */}
        <div className='font-bold text-xl md:text-3xl text-white bg-gray-900/70 rounded-3xl px-4 py-2 w-fit mx-auto mt-8 mb-2'>Contrubutions Made by</div>
        <div className='flex flex-col justify-center space-y-2'>
          <button 
            onClick={() => window.open(jsonData.link_bodhisatta, '_blank')}
            className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
          >Bodhisatta Bhattacharjee</button>
          <button 
            onClick={() => window.open(jsonData.link_sankalp, '_blank')}
            className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
          >Sankalp Chauhan</button>
          <button 
            onClick={() => window.open(jsonData.link_shreya, '_blank')}
            className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
          >Shreya Kumari</button>
          <button 
            onClick={() => window.open(jsonData.link_anish, '_blank')}
            className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
          >Anish Singh</button>
          <button 
            onClick={() => window.open(jsonData.link_anwesha, '_blank')}
            className='text-lg bg-black/10 hover:bg-black/30 rounded-3xl hover:font-bold hover:underline w-fit px-4 py-2 mx-auto transition-all duration-300'
          >Anwesha Sahu</button>
        </div>

      </div>
    </div>
  )
}

export default Documentation
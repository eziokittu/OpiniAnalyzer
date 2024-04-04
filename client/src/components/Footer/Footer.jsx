import React from 'react'
import jsonData from '../../data/links.json';

function Footer() {
  return (
    <>
      <div className='bg-gradient-to-t from-black/30 to-transparent h-20'></div>

      <div className='relative bottom-0 w-full text-center min-h-[200px] flex flex-col sm:text-xl space-y-3 bg-black/30 pb-8'>
        {/* <hr className="my-2 h-0.5 border-t-0 bg-black" /> */}
        <div className='w-full flex items-center bg-transparent'>
          <div className="border-t-4 border-black w-full ml-2 mr-2 h-0"></div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" 
            class="w-24 h-24 animate-[spin_2s_linear_infinite] fill-slate-100 stroke-yellow-400  ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
          </svg> */}
          <div className='w-[300px] bg-gray-800 rounded-3xl text-white px-4 py-2'>Thank You</div>
          <div className="border-t-4 border-black w-full mr-2 ml-2 h-0"></div>
        </div>

        <div className='flex flex-col justify-center '>
          <div>A small project developed for Tools and Techniques LAB</div>
          <div>using</div>
          <div>
            <span className=''> 
              <button
                className='hover:no-underline underline hover:font-bold' 
                onClick={() => window.open(jsonData.link_sources_react, '_blank')}
              >React</button>
            </span>
            <span className='mx-1'> 
              <button
                className='hover:no-underline underline hover:font-bold' 
                onClick={() => window.open(jsonData.link_sources_vite, '_blank')}
              >Vite</button>
            </span>
            <span>and</span>
            <span className='mx-1'> 
              <button
                className='hover:no-underline underline hover:font-bold' 
                onClick={() => window.open(jsonData.link_sources_tailwindCss, '_blank')}
              >TailwindCSS</button>
            </span>
            <span>as frontend (hosted on</span>
            <span className='mx-1'> 
              <button
                className='hover:no-underline underline hover:font-bold' 
                onClick={() => window.open(jsonData.link_sources_vercel, '_blank')}
              >VERCEL</button>
            </span>
            <span>)</span>
          </div>
          <div>and</div>
          <div>
            <span className='mr-1'> 
              <button
                className='hover:no-underline underline hover:font-bold' 
                onClick={() => window.open(jsonData.link_sources_flask, '_blank')}
              >Flask</button>
            </span>
            <span>Python as backend (hosted on</span>
            <span className='mx-1'> 
              <button
                className='hover:no-underline underline hover:font-bold' 
                onClick={() => window.open(jsonData.link_sources_render, '_blank')}
              >RENDER</button>
            </span>
            <span>)</span>
          </div>
          <div>in</div>
          <div>
            <span>3rd Year - 6th Semester - </span>
            <span className='ml-1'>
              <button
                className='hover:no-underline underline hover:font-bold' 
                onClick={() => window.open(jsonData.link_random_kiit, '_blank')}
              >KIIT University</button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
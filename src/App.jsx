import React, { useEffect } from 'react'
import Canvas from './Canvas'
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  


  return (
    <>
    <div className="w-full bg-black relative min-h-screen font-['Helvetica_Now_Display']">
      {data[0].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}

<div className='w-full h-screen text-white'>
      <nav className='fixed top-0 left-0 w-full p-8 flex justify-between z-50'>
        <div className='brand text-2xl font-regular'>TS</div>
        <div className='links flex gap-10'>
          {["Home", "About", "Projects", "Contact"] .map((link, index) => (
            <a key={index}
            href={`#${link.toLowerCase()}`}
            className='text-md hover:text-gray-300'
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      
    </div>
    </div> 

    
    {/* <div className="w-full relative min-h-screen">
      {data[1].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}
    </div>
    <div className="w-full relative min-h-screen">
      {data[2].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}
    </div>
    <div className="w-full relative min-h-screen">
      {data[3].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}
    </div> */}
    </>
  )
}

export default App;



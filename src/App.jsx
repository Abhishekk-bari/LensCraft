import React, { useEffect } from 'react'
import MainCanvas from './MainCanvas'
import images from '../src/image'

function App() {
  useEffect(() =>{
    console.log(images)
  });

  
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <MainCanvas />
    </div>
  )
}

export default App



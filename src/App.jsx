import React, { useEffect } from 'react'
import MainCanvas from './Canvas'

function App() {
  


  return (
    <div className="w-full min-h-screen bg-black text-white">
      <MainCanvas startIndex={0} />
      <MainCanvas startIndex={150}/>
      <MainCanvas startIndex={300}/>
    </div>
  )
}

export default App



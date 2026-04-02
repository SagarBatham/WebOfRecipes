import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './navigat/Navbar'


function App() {
  return (
    <div className='py-10 px-[10%] w-screen h-screen text-2xl text-white bg-zinc-700'>
      <Nav/>    
      <Mainroutes/>
    </div>
  )
}

export default App
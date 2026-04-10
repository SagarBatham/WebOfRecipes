import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './navigat/Navbar'


function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white'>
      <div className='py-6 px-4 md:px-8 lg:px-[10%] max-w-7xl mx-auto'>
        <Nav/>    
        <main className='mt-8 mb-12'>
          <Mainroutes/>
        </main>
      </div>
    </div>
  )
}

export default App
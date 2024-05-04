import React from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'



function App() {
  return (
    <div className='flex flex-col h-[100vh] max-w-full overflow-auto flex-wrap'>
      <Navbar />
      <Manager />
      <Footer />
    </div>
  )
}

export default App

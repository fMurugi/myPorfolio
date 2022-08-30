import React from 'react'

import {Header,Footer,Skills,Work,About} from './container';
import{Navbar} from './components'

function App() {
  return (
    <div className='app'>
       <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
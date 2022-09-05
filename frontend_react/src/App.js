import React from 'react'


import './App.scss' 

import {Header,Footer,Skills,Work,About} from './container';
import{Navbar} from './components'

function App() {
  return (
    <div className='app__container'>
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
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

import './Footer.scss'

const Footer = () => {
  return (
    <div className='app__footer-container'>
      <h2 className='app__footer-head'> Take a coffe and chat with me</h2>
      <div className='footer-card'>
        <FontAwesomeIcon icon={faEnvelope} />
        {/* <FontAwesomeIcon icon={fa-solid fa-envelope}/> */}
        <a href='mailto:fionamurugi99@gmail.com'> fionamurugi99@gmail</a>
      </div>
    </div>
  )
}

export default Footer
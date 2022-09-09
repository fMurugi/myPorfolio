import React, { useState } from 'react'
import {Link, Navigate} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'

import './Header.scss'

const Header = () => {
 
  return (
    <div className='header__caontainer'>
      <head>
        <script src="https://kit.fontawesome.com/2a6829c07a.js" crossOrigin="anonymous"></script>
      </head>
      <div className='desc__header'> 
        <h1>Hi  I am Fiona Murugi</h1>
        <p>I am  fullStack developer</p>
        <div className='icon__div'>
          {/* <button >
          <FontAwesomeIcon icon={faGithub} />
          </button> */}
          
        <a href='https://github.com/fMurugi' rel='noopener' target={'_blank'}>               
          <FontAwesomeIcon icon={faGithub} />
        </a>  
        <a href ="https://twitter.com/FionaMurugi1" rel ="noopener" target={"_blank"}>
        <FontAwesomeIcon icon={faTwitter}/>
          </a>  
          <a href ="https://www.linkedin.com/in/fiona-murugi-594012174/" rel ="noopener" target={"parent"}>
          <FontAwesomeIcon icon={faLinkedin}/>
          </a>  
        </div>


       </div>
       <div className='image__container'>
        <image>

        </image>
       </div>

    </div>
  )
  }

export default Header

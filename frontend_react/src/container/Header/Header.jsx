import React from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'

import './Header.scss'

const Header = () => {
  return (
    <div className='header__caontainer'>
      <head>
        <script src="https://kit.fontawesome.com/2a6829c07a.js" crossorigin="anonymous"></script>
      </head>
      <div className='desc__header'> 
        <h1>Hi  I am Fiona Murugi</h1>
        <p>I am  fullStack developer</p>
        <Link to="https://github.com/fMurugi"> <FontAwesomeIcon icon={faGithub} /></Link>
        <div className='icon__div'>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faLinkedin}/>
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
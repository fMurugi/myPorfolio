import React ,{useState} from 'react'

import {HiMenuAlt4,HiX} from 'react-icons/hi'
import{motion} from 'framer-motion'
import './Navbar.scss'

function Navbar() {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div>
            <h1>FIONA</h1>
        </div>
        <div>
        <ul className='app__navbar-links'>
            {['home','about','work','skills','contact'].map((item)=>(
                <li className='app__flex p-text' key ={`${item}`}>
                    <a href ={`#${item}`}>{item}</a>
                </li>
            ))}
            
        </ul>
        </div>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onclick={()=>setToggle(true)}/>

            {toggle && (
                <div
                    // whileInView={{ x: [300, 0] }}
                    // transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                    <HiX onClick={()=>setToggle(false)}/>
                    <ul>
                        {['home','about','work','skills','contact'].map((item)=>(
                            <li key ={item}>
                                <a href ={`#${item}`}  onClick={()=>setToggle(false)}>{item}</a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            )}
        
        </div>
    </nav>
  )
}

export default Navbar
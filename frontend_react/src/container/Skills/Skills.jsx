import React from 'react'

import './Skills.scss'

function Skills() {
 const languages =['html','css','Javascript','React js','Node js','Java','Spring','Mysql','postgresql']

  return (
    <div className='skills__container'>
      <h1>SKILLS</h1>
      <div className='skills__list'>
        <ul>
          {languages.map((language)=> <li><div className='list__container'>{language}</div></li>)}
        </ul>
      </div>
    
    </div>
  )
}

export default Skills
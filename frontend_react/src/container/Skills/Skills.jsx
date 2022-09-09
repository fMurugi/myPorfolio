import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import { urlFor,client } from '../../client';

import './Skills.scss'

function Skills() {
 const languages =['html','css','Javascript','React js','Node js','Java','Spring','Mysql','postgresql']

  const [skills,setSkills]=useState([]);
  useEffect(()=>{
    const query = '*[_type=="skills"]';

    client.fetch(query)
      .then((data) =>{setSkills(data);
      
      })
      
  },[]);
 
  return (
    <div className='skills__container'>
      <h1>SKILLS</h1>
      <div className='skills__list'>
        <ul>
          {skills.map((skill)=> <li><div className='list__container'>
            <img src={urlFor(skill.icon)}/>
            {skill.name}
            </div></li>)}
        </ul>
      </div>
    
    </div>
  )
}

export default Skills
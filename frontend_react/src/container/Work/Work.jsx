import React,{ useEffect, useState} from 'react';

import { urlFor, client } from '../../client';

import './Work.scss';

const Work = () => {
  const [projects , setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type =="works"]';

    client.fetch(query)
      .then((data) =>{setProjects(data);
        console.log(data);
      } )
  },[]);
  return (
<div className='app__work'>
  <h1 className='app__works-title'>MY PROJECTS</h1>
  {/* <ul>
    <li>{}</li>
  </ul> */}
<div className='work__container'>
      {projects.map((project) => 
      (<div className='project' >
          <img src={urlFor(project.imgUrl)} alt=""/>
           <p>
            <h2>{project.title}</h2>
             {project.description}<br/>
           </p>
           <div className='external__buttons'>
             <a href={project.projectLink}  target="_blank" rel="noreferrer">
             <button className='Goto__button' type='button'>View the project</button>
             </a>
             <a href={project.codeLink}>
             <button className='Goto__button' type ='button'>View the code</button>
             </a>
           </div>
       </div>
        ))}
  </div>  

</div>
   
  
  );
};
export default Work;

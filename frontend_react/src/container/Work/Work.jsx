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
  return (<div className='work__container'>
      {projects.map((project) => 
      (<div >
          <img src={urlFor(project.imgUrl)} alt=""/>
           <p>
             {project.Tittle}<br/>
             {project.Description}<br/>
            
           </p>
           <div>
             <a href={project.projectLink}  target="_blank" rel="noreferrer">
             <button type='button'>View the project</button>
             </a>
             <a href={project.codeLink}>
             <button type ='button'>View the code</button>
             </a>
           </div>
       </div>
        ))}
  </div>  
  );
};
export default Work;

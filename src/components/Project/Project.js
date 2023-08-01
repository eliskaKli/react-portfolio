import React from "react";

import data from '../../data/projects.json';

function Project( {project} ) {
    function tag() {
        <ul>
        {props.tags.map(
            (tag) => (
                <li>
                    {tag}
                </li>)
        )}
        </ul>
    }

    return(
        <a
          key={animal.id}
          href={} //tady by asi měla být path pro link webu
          className='project'
        >
          <article>
            <div className="projectImgContainer">
              {
                <img 
                  className="projectImg"
                  src={project.img}
                  alt='could not load'
                />
              }
            </div>
            <h2><a href={animal.src} target="_blank">{project.projectName}</a></h2>
            <p>{project.description}</p>
            <p>tagy</p>
          </article>    
        </a>

        // PŮVODNĚ JSEM TO ZKOUŠELA NAPSAT TAKTO: 
        //<div>
        //     <div>
        //         {props.project
        //             .map( (project) => (
        //                 <div>                    
        //                     <img
        //                     className="projectImg"
        //                     src={project.img}
        //                     alt='could not load'
        //                     />
        //                     <div className="textBlock">
        //                         <h2>{project.projectName}</h2>
        //                         <p>{project.description}</p>
        //                         <p></p>
        //                     </div>
        //                 </div>
        //             ) )}
        //     </div>
        // </div>        
    )
};

export default Project;
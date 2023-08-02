import React from "react";
import styles from './ProjectsList.module.css';
import projects from '../../data/projects.json';

import { FiExternalLink } from "react-icons/fi";

function ProjectsList() {
    
  return (
    <div className={styles.tagsContainer}>
    <div className={styles.tagsList}>
      {projects.map((item) => (
        <div>
          <img src={item.img} alt={item.projectName} />
          <a
            className={styles.h2}
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.projectName}
            <FiExternalLink />
          </a>
          <p>{item.description}</p>
          <a
            className={styles.figmaLink}
            href={item.figma}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobrazit Figmu
          </a>
          <ul>
            <li key={item.id}>{item.tags}</li>
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ProjectsList;

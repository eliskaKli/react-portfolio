import React from "react";
import styles from "./ProjectsList.module.css";
import projects from "../../data/projects.json";

import { FiExternalLink } from "react-icons/fi";

function ProjectsList() {
  console.log(projects);

  return (
    <div className={styles.projectsContainer}>
      {projects.map((item) => (
        <div className={styles.projectsList}>
          <img
            className={styles.projectImg}
            // src={require(`../../data${item.img}`).default}
            src={process.env.PUBLIC_URL + item.img}
            alt={item.projectName}
          />
          <div className={styles.textContainer}>
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
              {item.figma ? "Zobrazit ve Figmě" : null}
            </a>
            <ul className={styles.tagsContainer}>
              {Array.isArray(item.tags) &&
                item.tags.map((tag, i) => (
                  <li key={tag.id} className={styles.tag}>
                    {tag}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;

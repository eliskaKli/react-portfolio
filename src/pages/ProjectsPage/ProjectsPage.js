import React from "react";

import styles from "./ProjectsPage.module.css";
import ButtonContact from "../../components/ButtonContact/ButtonContact.js";
import ProjectsList from "../../components/ProjectsList/ProjectsList.js";


function ProjectsPage() {
  return (
    <div>
      <header className={styles.header}>
        <p>Eliška Klimtová</p>
        <ButtonContact />
      </header>
      <ProjectsList />
      <footer className={styles.footer}>
        <a
          className={styles.linkPortfolioFigma}
          href="https://www.figma.com/file/r6PaxMek9So0hMPe3qp2UT/Portfolio-in-React?type=design&node-id=25%3A630&mode=design&t=v5oHb1dFHJClvcTo-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prototyp tohoto portfolia navržený ve Figmě ke shlédnutí zde{" "}
        </a>
        <p>Praha 2023</p>
      </footer>
    </div>
  );
}

export default ProjectsPage;

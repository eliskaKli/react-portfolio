import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ProjectsPage.module.css";
import ButtonContact from "../../components/ButtonContact/ButtonContact.js";
import ProjectsList from "../../components/ProjectsList/ProjectsList.js";


function ProjectsPage() {
  const navigate= useNavigate();
  const toProfilePage = () =>{
    navigate("/")
  };

  return (
    <div>
      <header className={styles.header}>
        <p onClick={toProfilePage}>Eliška Klimtová</p>
        <ButtonContact className={styles.button} />
      </header>
      <ProjectsList className={styles.projectsList}/>
      <footer className={styles.footer}>
        {/* <a
          className={styles.linkPortfolioFigma}
          href="https://www.figma.com/file/r6PaxMek9So0hMPe3qp2UT/Portfolio-in-React?type=design&node-id=25%3A630&mode=design&t=v5oHb1dFHJClvcTo-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prototyp tohoto portfolia navržený ve Figmě ke shlédnutí zde{" "}
        </a> */}
        <p>Praha 2023</p>
      </footer>
    </div>
  );
}

export default ProjectsPage;

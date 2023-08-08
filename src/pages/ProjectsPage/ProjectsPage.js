import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ProjectsPage.module.css";
import ButtonContact from "../../components/ButtonContact/ButtonContact.js";
import ProjectsList from "../../components/ProjectsList/ProjectsList.js";

function ProjectsPage() {
  // display border bottom line when scrolling
  const [line, setLine] = useState(false);
  const changeLine = () => {
    if (window.scrollY >= 7.25) {
      setLine(true);
    } else {
      setLine(false);
    }
  };

  window.addEventListener("scroll", changeLine);

  // navigate to the profile page
  const navigate = useNavigate();
  const toProfilePage = () => {
    navigate("/");
  };

  return (
    <div>
      <header
        className={
          line ? `${styles.header} ${styles.headerScroll}` : `${styles.header}`
        }
      >
        <p onClick={toProfilePage}>Eliška Klimtová</p>
        <ButtonContact className={styles.button} />
      </header>
      <div className={styles.blankBar}></div>
      <ProjectsList className={styles.projectsList} />
      <footer className={styles.footer}>
        <p>Praha 2023</p>
      </footer>
    </div>
  );
}

export default ProjectsPage;

import React from "react";
import styles from "./ExternalLogos.module.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function ExternalLogos() {
  // tady udělat funkce na odkazy

  return (
    <div className={styles.logosGroup}>
      <a
        className={styles.logo}
        href="/https://github.com/eliskaKli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={styles.icon} />
        GitHub
      </a>
      <a 
      className={styles.logo}
      href="https://www.linkedin.com/in/eli%C5%A1ka-klimtov%C3%A1-5201961a4/"
      target="_blank"
      rel="noopener noreferrer"
      >
        <FaLinkedin className={styles.icon} />
        LinkedIn
      </a>
    </div>
  );
}

export default ExternalLogos;

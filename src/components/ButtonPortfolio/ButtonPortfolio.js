import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./ButtonPortfolio.module.css";

function ButtonPortfolio() {
  return (
    <NavLink
      to="projects"
      // isActive nonused in fact
      className={ ({isActive}) => isActive ? `${styles.portfolioButton} ${styles.portfolioButtonActive}` : `${styles.portfolioButton}` }
    >
      vstoupit do portfolia
    </NavLink>
  );
}

export default ButtonPortfolio;

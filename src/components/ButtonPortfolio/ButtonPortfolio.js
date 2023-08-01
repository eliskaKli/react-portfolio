import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./ButtonPortfolio.module.css";

function ButtonPortfolio() {
  return (
    <NavLink
      to="projects"
      // mám tu sice to zapojení active, ale v praxi to nevyužívám
      className={ ({isActive}) => isActive ? `${styles.portfolioButton} ${styles.portfolioButtonActive}` : `${styles.portfolioButton}` }
    >
      vstoupit do portfolia
    </NavLink>
  );
}

export default ButtonPortfolio;

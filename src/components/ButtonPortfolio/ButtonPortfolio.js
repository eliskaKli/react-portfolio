import React from "react";

import styles from "./ButtonPortfolio.module.css";

function ButtonPortfolio() {
  return (
    <div
      // onClick={šoupne mě to na portfolio stránku}
      className={styles.portfolioButton}
    >
      vstoupit do portfolia
    </div>
  );
}

export default ButtonPortfolio;

import React from "react";
import styles from "./ButtonContact.module.css";

import { FaLinkedin } from "react-icons/fa";

function ButtonContact() {
  return (
    <button className={styles.contactButton}>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/eli%C5%A1ka-klimtov%C3%A1-5201961a4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        kontaktujte mě na LinkedIn
        < FaLinkedin className={styles.logoLinkedIn} />
      </a>
    </button>
  );
}

export default ButtonContact;

import profileImg from "../../data/img/profileImg.jpg";

import ButtonContact from "../../components/ButtonContact/ButtonContact.js";
import ButtonPortfolio from "../../components/ButtonPortfolio/ButtonPortfolio.js";
import ExternalLogos from "../../components/ExternalLogos/ExternalLogos.js";

import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className="profile">
      <img src={profileImg} className={styles.profileImg} alt="Profile" />
      <div className={styles.aboutMe}>
        <p className={`${styles.text} ${styles.textFirst}`}>
          Jsem <b>Eliška Klimtová</b> a už skoro rok se učím jak psát kód v
          HTML, CSS, JavaScriptu a v poslední době i v Reactu. V únoru 2023 jsem
          pověsila minulou práci na hřebík, a vrhla jsem se do těchto nových vod
          na plno.
        </p>
        <p className={styles.text}>
          Dost bylo osamoceného plavání, chci zjistit, jak se plave v týmu a
          naučit se nové věci.
        </p>
        <p className={styles.text}>Ráda si s vámi domluvím schůzku.</p>
      </div>
      <div className={styles.profileButtons}>
        <ButtonContact className={styles.contact}></ButtonContact>
        <ButtonPortfolio></ButtonPortfolio>
      </div>
      <ExternalLogos />
    </div>
  );
}

export default Profile;

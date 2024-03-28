import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>GrooveFactory</h1>
      <p className={styles.description}>
      Explore Techno DJ sets from around the world
      </p>
    </div>
  );
};

export default Header;
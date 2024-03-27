import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.contribute}>
        Want to contribute?{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/999.maykol/"
        >
          Give me a coffe{" "}
        </a>
      </p>
      <p>
        Or follow me in my socials: {" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mayk0l"
        >
          mayk0l
        </a>
      </p>
    </div>
  );
};

export default Footer;
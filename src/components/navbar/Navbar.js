import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.logo} src={logo.src} />
      </div>

      <ul>
        <li>
          <a href="/">Main</a>
        </li>
        <li>
          <a href="/newQuestion">Insert Question</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
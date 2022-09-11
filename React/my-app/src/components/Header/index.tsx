import { useState } from "react";
import { NavBar } from "../NavBar";
import styles from "./style.module.css";
import menu from "./menu.svg"

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const openNavBar = () => {
    setIsNavBarVisible(true);
  };

  const closeNavBar = () => {
    setIsNavBarVisible(false);
  };

  return (
    <div>
    <nav className={styles.header}>
      <button className={styles.menu} onClick={openNavBar}>
        <img src={menu} alt="menu" className={styles.menuButton} />
        <div className={styles.menuButton} />
      </button>
    </nav>
    { isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null }
    </div>
  );
};

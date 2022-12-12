import React from "react";
import styles from './Header.module.css';
import Logo from './Logo.svg'
import { NavLink } from "react-router-dom";

 export function Header() {
  return(
    <div className={styles["Header"]}>
      <img className={styles["Header_Logo"]} src={Logo} alt="logo du site"/>
      <nav className={styles["Header_links"]}>
        <NavLink className={styles["Header_Links-Home"]} to="/" >Accueil</NavLink>
        <NavLink className={styles["Header_Links-About"]} to="/About">A propo</NavLink>
      </nav>
    </div>
  )
}


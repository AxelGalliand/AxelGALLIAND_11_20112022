import React from "react";
import styles from './Header.module.css';
import Logo from '../../IMG/svgFolder/Logo.svg';
import { NavLink } from "react-router-dom";

 export function Header() {
  return(
    <div className={styles["header"]}>
      <NavLink to="/">
       <img className={styles["header_logo"]} src={Logo} alt="logo du site"/>  
      </NavLink>
      <nav className={styles["header_links"]}>
        <NavLink style={({ isActive }) =>isActive ? {textDecorationLine: "underline"} : undefined} className={styles["header_links-home"]} to="/" >Accueil</NavLink>
        <NavLink style={({ isActive }) =>isActive ? {textDecorationLine: "underline"} : undefined} className={styles["header_links-about"]} to="/About">A Propos</NavLink>
      </nav>
    </div>
  )
}
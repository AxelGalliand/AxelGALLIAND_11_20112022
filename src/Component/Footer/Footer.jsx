import React from "react";
import styles from './Footer.module.css';
import Logo from '../svgFolder/Logo_footer.svg'

export function Footer () {
  return(
    <div className={styles["footer"]}>
      <img className={styles["footer_logo"]} src={Logo} alt="logo du site"/>
      <span className={styles["footer_span"]}>© 2020 Kasa. All rights reserved</span>
    </div>
  )
}
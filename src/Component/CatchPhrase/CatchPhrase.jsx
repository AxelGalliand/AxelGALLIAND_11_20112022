import React from "react";
import styles from './CatchPhrase.module.css';

export function CatchPhrase () {
  return (
    <div className={styles["catchphrase-cont"]}>
      <div className={styles["catchphrase"]}></div>
      <div className={styles["catchphrase-phrase"]}>
        <span className={styles["catchphrase-phrase_1"]}>Chez vous, </span>
        <br className={styles["catchphraseBr"]}></br>
        <span className={styles["catchphrase-phrase_2"]}>partout et ailleurs</span>
      </div>  
    </div>
  )
}